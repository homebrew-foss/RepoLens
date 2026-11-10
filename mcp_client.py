"""
This is a sample implementation on how tools of the mcp server(mcp_server.py) may be called
The tools belonging to this mcp server may also be called by agents built using various frameworks(langchain, langgraph, etc.)
The only thing to be kept in mind is the timeout must be extended from the 
standard 5 min to 25 min(since the answer_query tool may take good chunk of time in 
the worst case(RepoLenisification not complete: ast extraction, generation of ai summaries, vectorization of nodes not complete))
"""
import asyncio
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client
from datetime import timedelta
import httpx
async def main():
    http_client = httpx.AsyncClient(
        timeout=httpx.Timeout(30,read=1500),
        follow_redirects=True
    )
    async with http_client:

        async with streamable_http_client("http://127.0.0.1:8765/mcp",http_client=http_client) as (read, write, _):
            async with ClientSession(read, write) as session:
                await session.initialize()
                tools = await session.list_tools()
                print([t.name for t in tools.tools])
                result = await session.call_tool("answer_query", {"path": "/home/akanish/agentic_ai_infra/dev_agent", "query":"How does this agent decide which tasks require the entire harness or which ones can be solved using an llm","deepThink":False},read_timeout_seconds=timedelta(minutes=25))
                #result = await session.call_tool("get_code",{"node_id":"abcc0f","path":"/home/akanish/agentic_ai_infra/dev_agent"})
                #result = await session.call_tool("get_dependencies",{"node_id":"333968","path":"/home/akanish/agentic_ai_infra/dev_agent"})
                print(result.content[0].text)

asyncio.run(main())