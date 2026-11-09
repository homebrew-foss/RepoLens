import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from mcp.server.fastmcp import FastMCP
from app.services import rag
import os
mcp = FastMCP("RepoLens-MCP", host="127.0.0.1", port=8765)

@mcp.tool()
def answer_query(path:str,query:str,deepThink:bool) -> dict[str,str]:
    """
    Answers questions with respect to a project/repo along with citations
    ARGS: path, query, deepThink
    """
    if not os.path.exists(path):
        return {"info":"Couldn't find the project..."}
    repo = Path(os.path.join(path,"repolens"))
    if not os.path.exists(os.path.join("out","state.json")):
        return {"info":"RepoLens setup incomplete... Launch RepoLens and complete setup"}
    if not os.path.exists(repo):
        # Do the complete process...(embedding,summarization etc...)
        pass
    res = (rag.answer_query(query,deep=deepThink,repo_path=repo))
    # Will do further refinement
    return {"answer":res}


if __name__ == "__main__":
    mcp.run(transport='streamable-http')