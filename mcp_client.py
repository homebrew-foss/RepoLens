import asyncio
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client

async def main():
    async with streamable_http_client("http://127.0.0.1:8765/mcp") as (read, write, _):
        async with ClientSession(read, write) as session:
            await session.initialize()
            tools = await session.list_tools()
            print([t.name for t in tools.tools])
            result = await session.call_tool("answer_query", {"path": "/home/akanish/agentic_ai_infra/dev_agent", "query":"explain the core logic behind this project","deepThink":False})
            print(result.content)

asyncio.run(main())