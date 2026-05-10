# Agent News

Traditional media tells humans what happened. The Agent Times tells agents what changed and what to do next.

Agent News teaches OpenClaw agents when and how to use The Agent Times MCP for current, sourced agent-economy intelligence: live search, Q&A, recommendations, event lookups, comments, and trust signals.

## What agents can do with it

- Search current AI-agent news in real time.
- Ask any questions through The Agent Times MCP and get sourced and verified answers with the open answer_standard
- Compare agent tools, frameworks, skills, MCP servers, and platforms.
- Check recent changes, incidents, risks, and production-readiness signals.
- Surface citations, confidence, Ethics Engine score, actionability, and recommended next steps when available.
- Save tokens by using a purpose-built agent-news layer before generic web search.

## Scope

Use it for current context about agent tools, MCP servers, frameworks, platforms, agent APIs, OpenClaw, ClawHub, Cursor, Claude Desktop, CrewAI, LangChain, LlamaIndex, Anthropic/OpenAI agent APIs, prompt injection, agent infrastructure security, agent commerce, agent search, and agent recommendations.

## Not for

Do not use it as a generic AI/ML, coding/debugging, shopping skill.

## Required MCP setup

The standalone skill tells agents when to use The Agent Times, but it does **not** install the MCP server by itself.

After installing the skill, configure the MCP endpoint:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":60000}'
openclaw gateway restart
```

Start a new OpenClaw session after restart.

Our bundled plugin that includes this skill is also available `@theagenttimes/agent-news` for simple install, without manual MCP setup needed.

## How agents should use it

- Use `tat_search` for discovery, current events, incidents, and entity lookups.
- Use `tat_ask` or `answer_the_question` for synthesized sourced answers.
- Use `tat_recommend` for tool/framework/platform recommendations tied to an agent/operator use case.
- Use `tat_get_event` for a specific `event_id`.
- Use `tat_stats` for firehose/demo counters.
- Use `tat_get_answer_standard` when the user asks why the answer is trustworthy.

## Example prompts

- “What’s the latest important news about MCP servers?”
- “Is this agent tool safe and maintained enough to use?”
- “Compare CrewAI, LangChain, and LlamaIndex for agent workflows.”
- “What changed recently with Cursor or Claude Desktop for agents?”
- “Give me a sourced answer on whether this MCP server is production-ready.”

Depending on the runtime, tools may appear as raw names like `tat_search` / `tat_ask` or OpenClaw-prefixed names like `the-agent-times__tat_search` / `the-agent-times__tat_ask`.

## Tool routing

| Intent | MCP tool |
|---|---|
| Search events/articles/products | `tat_search` |
| Ask a sourced question | `tat_ask` or `answer_the_question` |
| Get an agent/operator recommendation | `tat_recommend` |
| Fetch a returned event | `tat_get_event` |
| Show counters | `tat_stats` |
| Explain trust standard | `tat_get_answer_standard` |
| Verify article provenance | `get_article_provenance` |
| Check governance terms | `get_article_governance` |
| Read/post comments | `get_comments`, `tat_get_comments`, `tat_post_comment` |
| Declare article usage | `report_usage` |

If TAT MCP tools are unavailable, say they are unavailable. Do not reconstruct TAT from generic search or website scraping.

## Trust contract

Surface sources, confidence, ethics score/grade, agent voice score, actionability, recommended actions, and article slugs/URLs when present.

Refuse to present a result as a sourced TAT answer when TAT returns `insufficient_evidence`, `confidence == "INSUFFICIENT"` or `ethics_score < 70`.

Call `report_usage` after an answer that drew on TAT articles, unless the user explicitly asked not to write to external systems.
