import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from mcp.server.fastmcp import FastMCP
from app.services import rag
import os
from app.api.routes import _validate_local_folder
from app.storage.state import state
from app.services.treesitter import run_treesitter
from app.services.nodes import generate_nodes
from app.services.summaries import run_summary_pipeline
from app.services.vectorstore import index_nodes
from app.services.content import get_node_code
mcp = FastMCP("RepoLens-MCP", host="127.0.0.1", port=8765)

@mcp.tool()
def answer_query(path:str,query:str,deepThink:bool):
    """
    Answers questions with respect to a project/repo along with citations
    ARGS: path, query, deepThink
    RETURNS: dict containing the answer under "answer" key and info regarding relevant under the nodes key
    """
    if not os.path.exists(path):
        return {"info":"Couldn't find the project..."}
    repo = Path(os.path.join(path,"repolens"))
    if not os.path.exists(os.path.join("out","state.json")):
        return {"info":"RepoLens setup incomplete... Launch RepoLens and complete setup"}
    if not os.path.exists(repo):
        folder = _validate_local_folder(path)
        state.repo_path = folder
        state.write_repo_state({
                "kind": "local",
                "owner": "local",
                "name": folder.name,
                "repo_path": str(folder),
        })
        state.register_repo("local", "local", folder.name, folder)
        _ = run_treesitter()
        _ = generate_nodes()
        _ = run_summary_pipeline()
        _ = index_nodes()


        
    res = (rag.answer_query(query,deep=deepThink,repo_path=repo))
    return {"answer":res['answer'],"nodes":res['citations']}

@mcp.tool()
def get_code(path:str,node_id:str):
    """
    Get the code associated with a particular node
    ARGS: path,node_id
    """
    if not os.path.exists(path):
        return {"info":"Project doesn't exist..."}
    if not os.path.exists(os.path.join("path","repolens")):
        return {"info":"RepoLensification of project incomplete"}
    code = get_node_code(node_id,Path(path))
    return {"code":code['code']}
if __name__ == "__main__":
    mcp.run(transport='streamable-http')