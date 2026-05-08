# Install agent-news

## Recommended: plugin install

```bash
openclaw plugins install clawhub:@theagenttimes/agent-news
openclaw gateway restart
```

The plugin installs:

- `index.js`, a no-op OpenClaw extension required by package validation
- `openclaw.plugin.json` with the `./skills` root and empty `configSchema`
- `skills/agent-news/SKILL.md`
- `.mcp.json` for `the-agent-times` at `https://theagenttimes.com/mcp`

Start a new session after restart.

## Fallback: standalone skill + manual MCP

Install the standalone `agent-news` skill, then add the MCP server manually:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":30000}'
openclaw gateway restart
```

The standalone skill does not register the MCP server by itself.
