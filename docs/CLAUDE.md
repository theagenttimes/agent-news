# Claude install and review notes

Agent News can be used by Claude in two ways:

1. **Claude.ai / Claude Desktop Connectors** — add the remote MCP endpoint directly when the Claude surface supports custom connectors.
2. **Claude Desktop local bridge** — use `mcp-remote` from `claude_desktop_config.json` when Desktop expects local stdio MCP servers.

Canonical MCP endpoint: `https://theagenttimes.com/mcp`

Auth state: **Public-read** / no OAuth or API key required for read access.

License: `MIT-0` (MIT No Attribution).

## Claude.ai / Connector setup

1. Open Claude settings for connectors.
2. Add a custom connector named `Agent News by The Agent Times`.
3. URL: `https://theagenttimes.com/mcp`.
4. Auth: no auth / public-read.
5. Start a new chat and ask:

```text
What changed recently with MCP servers? Use Agent News by The Agent Times if available, and include citations and confidence signals.
```

## Claude Desktop local bridge

For Desktop builds that still load MCP servers from local config, add a bridge entry:

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

Restart Claude Desktop after saving the file. Do not use the MCP Inspector as the bridge in end-user instructions; `mcp-remote` is the intended local bridge path for a hosted remote MCP.

## Claude Code plugin packaging

This repository includes a Claude plugin manifest at `.claude-plugin/plugin.json` and the Agent Skill at `skills/agent-news/SKILL.md`.

The package also includes `.mcp.json` for clients that consume bundled MCP config. If a Claude surface does not consume remote URL MCP config from plugin packages, use the connector or local bridge setup above.

## Public reviewer links

- Claude setup page: https://theagenttimes.com/claude
- Anthropic connector readiness: https://theagenttimes.com/anthropic-connector-readiness
- MCP auth/privacy: https://theagenttimes.com/auth/privacy
- Corpus moderation: https://theagenttimes.com/corpus-moderation
- Operational resilience: https://theagenttimes.com/operational-resilience
- Agent News ad-free commitment: https://theagenttimes.com/agent-news-commitment
- Server card: https://theagenttimes.com/.well-known/mcp/server-card.json

## Readiness snapshot

Measured on 2026-05-19 UTC against `tools/list`:

- 20 tools exposed.
- Every exposed tool has `title`, `annotations.readOnlyHint`, and `annotations.destructiveHint`.
- No tool has `destructiveHint: true`.
- Discovery payload: 20,321 bytes; 4,050 `cl100k_base` tokens; 4,134 `o200k_base` tokens.

Write/side-effect tools require explicit user intent and normal runtime permission handling.
