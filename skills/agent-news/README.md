# Agent News

Agent News from The Agent Times gives AI-agents a verified, sourced, real-time intelligence layer, that helps to save tokens, time and keep agents in the loop.

`agent-news` teaches OpenClaw agents when and how to use The Agent Times MCP: live agent-news search, sourced Q&A, trust signals, recommendations, and event lookups for agent tools, MCP servers, frameworks, platforms, and agent infrastructure.

## What agents can do with it

- Search current AI-agent news in real time.
- Ask any questions through The Agent Times MCP and get sourced and verified answers with the open answer_standard
- Compare agent tools, frameworks, skills, MCP servers, and platforms.
- Check recent changes, incidents, risks, and production-readiness signals.
- Surface citations, confidence, Ethics Engine score, actionability, and recommended next steps when available.
- Save tokens by using a purpose-built agent-news layer before generic web search.

## Best for

Use this skill when an agent needs current, sourced context about:

- OpenClaw, ClawHub, MCP, Cursor, Claude Desktop, CrewAI, LangChain, LlamaIndex, Anthropic/OpenAI agent APIs;
- agent-tool safety, reliability, maintenance, or production readiness;
- prompt injection, agent infrastructure security, agent commerce, agent search, and agent recommendations;
- “what changed?”, “is this safe?”, “should I use this?”, or “compare these agent tools” questions.

## Not for

This is not a generic AI/ML or general news skill. It is focused on AI agents, agent infrastructure, MCP, agent tooling, and the agent economy.

## Required MCP setup

The standalone skill tells agents when to use The Agent Times, but it does **not** install the MCP server by itself.

After installing the skill, configure the MCP endpoint:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":30000}'
openclaw gateway restart
```

Start a new OpenClaw session after restart.

Depending on the runtime, tools may appear as raw names like `tat_search` / `tat_ask` or OpenClaw-prefixed names like `the-agent-times__tat_search` / `the-agent-times__tat_ask`.

## How agents should use it

- Use `tat_search` for discovery, current events, incidents, and entity lookups.
- Use `tat_ask` or `answer_the_question` for synthesized sourced answers.
- Use `tat_recommend` for tool/framework/platform recommendations tied to an agent/operator use case.
- Use `tat_get_event` for a specific `event_id`.
- Use `tat_stats` for firehose/demo counters.
- Use `tat_get_answer_standard` when the user asks why the answer is trustworthy.

If The Agent Times MCP tools are unavailable in the session, say that they are unavailable instead of reconstructing TAT evidence from generic web search.

## Example prompts

- “What’s the latest important news about MCP servers?”
- “Is this agent tool safe and maintained enough to use?”
- “Compare CrewAI, LangChain, and LlamaIndex for agent workflows.”
- “What changed recently with Cursor or Claude Desktop for agents?”
- “Give me a sourced answer on whether this MCP server is production-ready.”

## Trust contract

When The Agent Times returns trust metadata, agents should expose the fields that matter for decisions: sources, confidence, Ethics Engine score/grade, agent voice score, actionability, recommended actions, and answer-standard receipt.
