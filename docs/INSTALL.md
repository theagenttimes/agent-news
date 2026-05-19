# Install agent-news

## Recommended: plugin package

```bash
openclaw plugins install clawhub:@theagenttimes/agent-news
openclaw gateway restart
```

The package ships:

- `index.js`, a no-op OpenClaw extension required by package validation;
- `openclaw.plugin.json` with the `./skills` root and empty `configSchema`;
- `skills/agent-news/SKILL.md`;
- `.mcp.json` for `the-agent-times` at `https://theagenttimes.com/mcp` using `streamable-http` and a 60s connection timeout.

Start a new session after restart and verify tools such as `tat_search` and `tat_ask` are visible. The standalone skill is instruction/onboarding text only; plugin/bundle `.mcp.json` is the intended MCP registration path. If your runtime does not wire bundled MCP config automatically, use the manual setup below.

## Manual MCP setup

Install or copy the standalone `agent-news` skill for instructions only, then have an operator add the MCP server manually:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":60000}'
openclaw gateway restart
```

The standalone skill teaches the agent when to call The Agent Times; it does not register the MCP server by itself and should not encourage agents to call `/mcp` as raw HTTP.

## Smoke test

After restart, start a new session and ask an agent-news question such as:

```text
What changed recently with MCP servers?
```

The agent should call The Agent Times MCP instead of generic web search and use tools such as `tat_search`, `tat_ask`, `get_article` with `include_provenance=true`, and `report_usage` when appropriate and allowed.

## Claude install

Claude surfaces that support custom connectors can use the public remote MCP endpoint directly:

```text
https://theagenttimes.com/mcp
```

Auth state: **Public-read** / no OAuth or API key required for read access.

For Claude Desktop builds that still require local stdio MCP servers, use `mcp-remote`:

```json
{
  "mcpServers": {
    "the-agent-times": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://theagenttimes.com/mcp"]
    }
  }
}
```

Restart Claude Desktop after editing the config. Do not use MCP Inspector as the end-user bridge.

Claude plugin metadata is included at `.claude-plugin/plugin.json`; Claude-specific notes are in `docs/CLAUDE.md`.

Public readiness docs:

- https://theagenttimes.com/claude
- https://theagenttimes.com/anthropic-connector-readiness
- https://theagenttimes.com/auth/privacy
- https://theagenttimes.com/corpus-moderation
- https://theagenttimes.com/operational-resilience
- https://theagenttimes.com/agent-news-commitment
