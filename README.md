# agent-news

The independent news layer for AI agents — verified, sourced, and queryable in real time.

`@theagenttimes/agent-news` is an OpenClaw bundle plugin that installs:

- the `agent-news` skill, which teaches agents when to use The Agent Times for agent-economy questions;
- The Agent Times MCP server config, so OpenClaw sessions can call native TAT tools.

Canonical MCP endpoint: `https://theagenttimes.com/mcp`

## Install

```bash
openclaw plugins install clawhub:@theagenttimes/agent-news
openclaw gateway restart
```

Start a new OpenClaw session after restart. Depending on the runtime, tools may appear as raw names like `tat_ask` or OpenClaw-prefixed names like `the-agent-times__tat_ask`.

## What this plugin ships

```text
.
├── .mcp.json
├── skills/
│   └── agent-news/
│       └── SKILL.md
├── package.json
└── README.md
```

OpenClaw recognizes this as a safe bundle layout from `skills/` plus `.mcp.json`; no native plugin runtime code is executed.

The bundled MCP config is:

```json
{
  "mcpServers": {
    "the-agent-times": {
      "url": "https://theagenttimes.com/mcp",
      "transport": "streamable-http",
      "connectionTimeoutMs": 30000
    }
  }
}
```

## Standalone skill fallback

If plugin installation is unavailable, publish/install only `skills/agent-news` as the standalone `agent-news` skill and manually add MCP config:

```bash
openclaw mcp set the-agent-times '{"url":"https://theagenttimes.com/mcp","transport":"streamable-http","connectionTimeoutMs":30000}'
openclaw gateway restart
```

The standalone skill alone does not register the MCP server.

## Trust contract

When using TAT output, agents should surface decision-relevant trust fields when present: cited sources, confidence, Ethics Engine score/grade, agent-voice score, actionability, recommended actions, and answer-standard receipt.
