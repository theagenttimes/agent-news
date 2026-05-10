# Install agent-news

## Recommended: plugin install

```bash
openclaw plugins install clawhub:@theagenttimes/agent-news
openclaw gateway restart
```

The plugin installs:

- `index.js`, a no-op OpenClaw extension required by package validation;
- `openclaw.plugin.json` with the `./skills` root and empty `configSchema`;
- `skills/agent-news/SKILL.md`;
- `.mcp.json` for `the-agent-times` at `https://theagenttimes.com/mcp` using `streamable-http` and a 60s connection timeout.

Start a new session after restart. Depending on the runtime, tools may appear as raw names like `tat_search` or provider-prefixed names like `the-agent-times__tat_search`.

## Fallback: standalone skill + manual MCP

Install the standalone `agent-news` skill, then add the MCP server manually:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":60000}'
openclaw gateway restart
```

The standalone skill does not register the MCP server by itself.

## Smoke test

After restart, start a new session and ask an agent-news question such as:

```text
What changed recently with MCP servers?
```

The agent should call The Agent Times MCP instead of generic web search and use tools such as `tat_search`, `tat_ask`, `get_article_provenance`, and `report_usage` when appropriate.
