from __future__ import annotations

import json
import logging
from pathlib import Path

from app.storage.state import state

logger = logging.getLogger(__name__)


def _read_snippet(path: str, start_line: int, end_line: int) -> str:
    try:
        lines = Path(path).read_text(encoding="utf-8", errors="replace").splitlines(keepends=True)
        return "".join(lines[start_line - 1:end_line])
    except OSError:
        return ""


def _find_node(node_id: str,repo_path=None) -> dict | None:
    if not repo_path:

        nodes_path = (state.repo_dir / "nodes.json").resolve()
    else:

        nodes_path = (repo_path / 'repolens' / "nodes.json").resolve()
    if not nodes_path.exists():
        return None
    data = json.loads(nodes_path.read_text(encoding="utf-8"))
    for node in data.get("nodes", []):
        if node.get("id") == node_id:
            return node
    return None


def _find_file_entry(node_id: str,repo_path=None) -> dict | None:
    if repo_path:
        structure_path = (repo_path / "repolens" / "filestructure.json").resolve()    
    else:

        structure_path = (state.repo_dir / "filestructure.json").resolve()
    if not structure_path.exists():
        return None
    structure = json.loads(structure_path.read_text(encoding="utf-8"))
    stack = [structure]
    while stack:
        entry = stack.pop()
        if entry.get("id") == node_id and entry.get("type") == "file":
            return entry
        stack.extend(entry.get("children", []))
    return None


def _iter_file_entries(entry: dict, acc: list[dict]) -> None:
    if entry.get("type") == "file":
        acc.append(entry)
        return
    for child in entry.get("children", []):
        _iter_file_entries(child, acc)


def _resolve_node_path(source_path: str) -> Path:
    if not source_path:
        raise FileNotFoundError("Node has no file path")
    raw = str(source_path)
    candidate = Path(raw)
    candidates: list[Path] = []

    if candidate.is_absolute():
        candidates.append(candidate)
    else:
        if state.repo_path is not None:
            candidates.append(state.repo_path / candidate)
        candidates.append(Path.cwd() / candidate)
        candidates.append((state.out_dir / "repo" / candidate).resolve())

    for cand in candidates:
        try:
            if cand.exists() and cand.is_file():
                return cand.resolve()
        except OSError:
            continue

    raise FileNotFoundError(f"Source file not found: {raw}")


def _load_edges() -> list[dict]:
    edges_path = (state.repo_dir / "edges.json").resolve()
    if not edges_path.exists():
        return []
    try:
        data = json.loads(edges_path.read_text(encoding="utf-8"))
        return data.get("edges", []) or []
    except (json.JSONDecodeError, OSError):
        logger.warning("edges.json is missing or malformed; treating as empty")
        return []


def _load_file_entries() -> dict[str, dict]:
    structure_path = (state.repo_dir / "filestructure.json").resolve()
    if not structure_path.exists():
        return {}
    structure = json.loads(structure_path.read_text(encoding="utf-8"))
    entries: list[dict] = []
    _iter_file_entries(structure, entries)
    return {e["id"]: e for e in entries if e.get("id")}


def _collect_source_file_ids(node: dict) -> set[str]:
    source_ids: set[str] = set()

    if node.get("node_type") == "file":
        source_ids.add(node.get("id"))
    else:
        if node.get("parent_id"):
            source_ids.add(node.get("parent_id"))
        path = node.get("path")
        if path:
            try:
                resolved = Path(str(path)).resolve()
            except OSError:
                resolved = None
            if resolved is not None:
                for entry in _load_file_entries().values():
                    try:
                        if entry.get("type") == "file" and Path(entry.get("path", "")).resolve() == resolved:
                            source_ids.add(entry["id"])
                    except OSError:
                        continue
    return source_ids


def _import_edge_to_dict(edge: dict, files_by_id: dict[str, dict]) -> dict:
    target_id = edge.get("target_file_id")
    target: dict | None = files_by_id.get(target_id) if target_id else None

    title = ""
    if target is not None:
        title = target.get("name") or Path(edge.get("target_path") or "").name or edge.get("module") or ""
    else:
        title = edge.get("module") or Path(edge.get("target_path") or "").name or ""

    return {
        "id": edge.get("id"),
        "title": title,
        "module": edge.get("module"),
        "imported_symbols": edge.get("imported_symbols", []),
        "aliases": edge.get("aliases", []),
        "path": edge.get("target_path") if target is not None else None,
        "target_file_id": target_id,
        "node_type": "file" if target is not None else "module",
        "edge_type": edge.get("type", "import"),
        "is_internal": target is not None or bool(edge.get("is_internal", False)),
        "start_line": edge.get("start_line"),
        "end_line": edge.get("end_line"),
        "raw": edge.get("raw"),
    }


def _collect_imports(node: dict) -> list[dict]:
    source_ids = _collect_source_file_ids(node)
    if not source_ids:
        return []

    files_by_id = _load_file_entries()
    imports: list[dict] = []
    for edge in _load_edges():
        # only treat import relationships as imports , no graph edges, that was just not needed
        if edge.get("type") != "import":
            continue
        if edge.get("source_file_id") not in source_ids:
            continue
        imports.append(_import_edge_to_dict(edge, files_by_id))
    return imports


def get_node_code(node_id: str,repo_path=None) -> dict:
    node = _find_node(node_id,repo_path=repo_path)

    if node is None:
        file_entry = _find_file_entry(node_id)
        if file_entry is None:
            raise LookupError(f"Unknown node id: {node_id}")
        node = {
            "id": file_entry.get("id"),
            "title": file_entry.get("name"),
            "node_type": "file",
            "path": file_entry.get("path"),
            "language": file_entry.get("language"),
            "start_line": 1,
            "end_line": None,
            "summary": file_entry.get("summary") or None,
        }

    start_line = node.get("start_line")
    end_line = node.get("end_line")

    if start_line is None or not isinstance(start_line, int) or start_line < 1:
        raise ValueError(f"Invalid start_line for node {node_id}")

    source_path = _resolve_node_path(node.get("path"))

    total_lines = 0
    try:
        with open(source_path, "r", encoding="utf-8", errors="replace") as f:
            total_lines = sum(1 for _ in f)
    except OSError:
        raise FileNotFoundError(f"Source file not found: {source_path}")

    if end_line is None:
        end_line = total_lines
    elif not isinstance(end_line, int) or end_line < 1:
        raise ValueError(f"Invalid end_line for node {node_id}")
    if start_line > end_line:
        raise ValueError(f"Invalid line range for node {node_id}: {start_line} > {end_line}")
    if start_line > total_lines:
        end_line = start_line
    if end_line > total_lines:
        end_line = total_lines

    code = _read_snippet(str(source_path), start_line, end_line)

    return {
        "id": node.get("id"),
        "node_type": node.get("node_type"),
        "title": node.get("title"),
        "path": node.get("path"),
        "language": node.get("language"),
        "summary": node.get("summary") or None,
        "start_line": start_line,
        "end_line": end_line,
        "code": code,
        "imports": _collect_imports(node),
    }


def get_node_content(node_id: str,repo_path=None) -> dict | None:
    node = _find_node(node_id,repo_path=repo_path)
    if node is not None:
        return {
            "id": node_id,
            "kind": "node",
            "title": node.get("title"),
            "node_type": node.get("node_type"),
            "language": node.get("language"),
            "path": node.get("path"),
            "start_line": node.get("start_line"),
            "end_line": node.get("end_line"),
            "content": _read_snippet(node["path"], node["start_line"], node["end_line"]),
        }

    file_entry = _find_file_entry(node_id,repo_path=repo_path)
    if file_entry is not None:
        path = file_entry.get("path", "")
        content = _read_snippet(path, 1, 10**9)
        return {
            "id": node_id,
            "kind": "file",
            "title": file_entry.get("name"),
            "node_type": "file",
            "language": "",
            "path": path,
            "start_line": 1,
            "end_line": content.count("\n") + 1,
            "content": content,
        }

    return None