from __future__ import annotations

import json
import logging
import os
import re
import time
import uuid
from pathlib import Path

from dotenv import load_dotenv
from qdrant_client import QdrantClient
from qdrant_client.http import models as qmodels
from tqdm import tqdm

from app.services.embeddings import EMBED_DIM, EMBED_MODEL_NAME, embed_query, embed_texts
from app.storage.state import state

load_dotenv()

logger = logging.getLogger(__name__)

_QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
_COLLECTION = "repolens"
_VECTOR_DIM = EMBED_DIM
_UPSERT_BATCH_SIZE = 100

# the random seed for qdrant uuid generator 
_NAMESPACE = uuid.UUID("7c53f8bb-fd95-4a91-bc1c-6b9b7d2e65ef")

_client: QdrantClient | None = None
_client_db: str | None = None


def get_client(repo_path=None) -> QdrantClient:
    global _client, _client_db
    qdrant_url = os.getenv("QDRANT_URL")
    if qdrant_url:
        if _client is None:
            _client = QdrantClient(url=qdrant_url)
        return _client
    # embedded storage lives inside the active repo's repolens/ folder,
    # so each repository gets its own vector DB.
    if not repo_path:

        db_path = state.repo_dir / "qdrant_db"
    else:
        db_path = repo_path/ "qdrant_db"
    db_str = str(db_path)
    if _client is None or _client_db != db_str:
        db_path.mkdir(parents=True, exist_ok=True)
        _client = QdrantClient(path=db_str)
        _client_db = db_str
    return _client


def _point_id(kind: str, node_id: str) -> str:
    return str(uuid.uuid5(_NAMESPACE, f"{kind}:{node_id}"))


def _collection_name() -> str:
    if state.repo_path is None:
        return _COLLECTION
    repo = re.sub(r"[^a-zA-Z0-9_.-]", "_", str(state.repo_path.resolve()))
    return f"{_COLLECTION}_{repo[-48:]}"


def _file_index(structure: dict) -> dict[str, dict]:
    index: dict[str, dict] = {}

    def walk(entry: dict, chain: list[str]) -> None:
        name = entry.get("name", "")
        my_chain = chain + [name]
        if entry.get("type") == "file":
            index[entry["id"]] = {
                "id": entry["id"],
                "name": name,
                "path": entry.get("path", ""),
                "chain": my_chain,
                "summary": entry.get("summary", ""),
            }
        for child in entry.get("children", []):
            walk(child, my_chain)

    walk(structure, [])
    return index


def _node_document(node: dict, file_meta: dict) -> dict:
    chain = " > ".join(file_meta.get("chain", [])) or node.get("path", "")
    title = node.get("title") or node.get("id")
    summary = node.get("summary") or ""
    text = (
        f"Code node ({node.get('node_type', '')}) named '{title}'\n"
        f"File: {node.get('path', '')}\n"
        f"Location: {chain}\n"
        f"Summary: {summary}"
    )
    # meta data, for retrieval
    return {
        "kind": "node",
        "id": node["id"],
        "title": title,
        "node_type": node.get("node_type", ""),
        "language": node.get("language", ""),
        "path": node.get("path", ""),
        "start_line": node.get("start_line"),
        "end_line": node.get("end_line"),
        "parent_id": node.get("parent_id"),
        "chain": file_meta.get("chain", []),
        "summary": summary,
        "text": text,
    }


def _tree_document(entry: dict, chain: list[str]) -> dict | None:
    name = entry.get("name", "")
    entry_type = entry.get("type", "")
    summary = entry.get("summary", "")
    if not summary or entry_type not in ("file", "folder", "repository"):
        return None
    my_chain = chain + [name]
    text = (
        f"{entry_type.capitalize()} '{name}'\n"
        f"Path: {entry.get('path', '')}\n"
        f"Location: {' > '.join(my_chain)}\n"
        f"Summary: {summary}"
    )
    return {
        "kind": entry_type,
        "id": entry["id"],
        "title": name,
        "node_type": entry_type,
        "language": "",
        "path": entry.get("path", ""),
        "start_line": None,
        "end_line": None,
        "parent_id": entry.get("parent"),
        "chain": my_chain,
        "summary": summary,
        "text": text,
    }


def _build_documents(nodes: list[dict], structure: dict) -> list[dict]:
    files = _file_index(structure)
    docs: list[dict] = []

    for node in nodes:
        if not node.get("summary"):
            continue
        docs.append(_node_document(node, files.get(node.get("parent_id", ""), {})))

    stack = [(structure, [])]
    while stack:
        entry, chain = stack.pop()
        doc = _tree_document(entry, chain)
        if doc is not None:
            docs.append(doc)
        for child in entry.get("children", []):
            stack.append((child, chain + [entry.get("name", "")]))

    return docs


def ensure_collection() -> None:
    client = get_client()
    name = _collection_name()
    if not client.collection_exists(name):
        client.create_collection(
            collection_name=name,
            vectors_config=qmodels.VectorParams(
                size=_VECTOR_DIM,
                distance=qmodels.Distance.COSINE,
            ),
        )


def index_nodes() -> dict:
    nodes_path = (state.repo_dir / "nodes.json").resolve()
    structure_path = (state.repo_dir / "filestructure.json").resolve()

    if not nodes_path.exists():
        raise RuntimeError("nodes.json not found. Call POST /nodes first.")
    if not structure_path.exists():
        raise RuntimeError("filestructure.json not found. Call POST /tree first.")

    nodes: list[dict] = json.loads(nodes_path.read_text(encoding="utf-8"))["nodes"]
    structure: dict = json.loads(structure_path.read_text(encoding="utf-8"))

    t0 = time.perf_counter()
    documents = _build_documents(nodes, structure)
    if not documents:
        raise RuntimeError("No summarized nodes found. Call POST /summary first.")
    logger.info(
        "Built %d documents to index in %.2fs (embedding model: %s)",
        len(documents),
        time.perf_counter() - t0,
        EMBED_MODEL_NAME,
    )

    client = get_client()
    name = _collection_name()
    if client.collection_exists(name):
        client.delete_collection(name)
    client.create_collection(
        collection_name=name,
        vectors_config=qmodels.VectorParams(
            size=_VECTOR_DIM,
            distance=qmodels.Distance.COSINE,
        ),
    )

    logger.info("Embedding %d documents one-by-one...", len(documents))
    t1 = time.perf_counter()
    state.pipeline_progress = {"phase": "embedding", "done": 0, "total": len(documents)}
    vectors = embed_texts(
        [doc["text"] for doc in documents],
        on_progress=lambda done, total: state.pipeline_progress.update(
            {"phase": "embedding", "done": done, "total": total}
        ),
    )
    logger.info("Embedded %d vectors in %.2fs", len(vectors), time.perf_counter() - t1)

    points: list[qmodels.PointStruct] = []
    for doc, vector in zip(documents, vectors):
        payload = {k: v for k, v in doc.items() if k != "text"}
        payload["text"] = doc["text"]
        points.append(qmodels.PointStruct(
            id=_point_id(doc["kind"], doc["id"]),
            vector=vector,
            payload=payload,
        ))

    logger.info("Prepared %d points, upserting in batches of %d", len(points), _UPSERT_BATCH_SIZE)
    t2 = time.perf_counter()
    state.pipeline_progress = {"phase": "upserting", "done": 0, "total": len(points)}
    for start in tqdm(
        range(0, len(points), _UPSERT_BATCH_SIZE),
        desc="Upserting to Qdrant",
        unit="batch",
    ):
        client.upsert(
            collection_name=name,
            points=points[start:start + _UPSERT_BATCH_SIZE],
        )
        state.pipeline_progress.update(
            {"phase": "upserting", "done": min(start + _UPSERT_BATCH_SIZE, len(points)), "total": len(points)}
        )
    state.pipeline_progress = {"phase": "done", "done": len(points), "total": len(points)}
    logger.info("Upsert complete: %d points in %.2fs", len(points), time.perf_counter() - t2)

    logger.info("Indexed %d points into collection %s", len(points), name)
    return {
        "collection": name,
        "indexed": len(points),
        "vector_dim": _VECTOR_DIM,
    }


def search_nodes(query: str, top_k: int = 8,repo_path=None) -> list[dict]:
    query_vector = embed_query(query)
    if not query_vector:
        raise RuntimeError("Failed to embed query")

    response = get_client(repo_path).query_points(
        collection_name=_collection_name(),
        query=query_vector,
        limit=top_k,
        with_payload=True,
    )
    hits: list[dict] = []
    for point in response.points:
        payload = dict(point.payload or {})
        payload["score"] = point.score
        hits.append(payload)
    return hits
