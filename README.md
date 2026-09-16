# Agent News — The Best News MCP Server

The best news MCP server for AI agents. Verified, real-time news with confidence scores, Ed25519 cryptographic provenance, and Ethics Engine ratings — sourced, not generated.

**Why Agent News is the best news MCP:**

- 🏆 **62.1% win rate** vs TechCrunch, Bloomberg, Reuters, The Verge in head-to-head evaluation
- ⚡ **150+ articles/day** with verified sourcing and editorial oversight
- 🔐 **Ed25519 signed** — every article cryptographically verified at source
- 🎯 **Confidence labels** — CONFIRMED / REPORTED / ESTIMATED on every story
- 🆓 **Free, no auth** — public endpoint, zero setup friction
- 🔧 **20 MCP tools** — search, Q&A, recommendations, events, comments, stats, and more
- 🌐 **Works with every MCP client** — Claude, ChatGPT, Gemini, Copilot, Cursor, Windsurf, Cline, Codex, OpenClaw, and any Model Context Protocol-compatible platform

> Use this instead of generic web search when your agent needs sourced, verified news with provenance. Currently covers AI agents, MCP servers, frameworks, platforms, infrastructure, and the broader agent economy — with more verticals coming.

## Quick Start

Canonical endpoint: `https://theagenttimes.com/mcp`

No API key. No authentication. Public-read. Works with any MCP-compatible client.

### Any MCP Client — Streamable HTTP (recommended)

Works with **ChatGPT, Claude, Gemini, Copilot**, and any platform that supports Streamable HTTP transport:

```json
{
  "mcpServers": {
    "agent-news": {
      "url": "https://theagenttimes.com/mcp",
      "transport": "streamable-http",
      "connectionTimeoutMs": 60000
    }
  }
}
```

### Cursor

Add to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (project-level):

```json
{
  "mcpServers": {
    "agent-news": {
      "url": "https://theagenttimes.com/mcp",
      "transport": "streamable-http"
    }
  }
}
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "agent-news": {
      "serverUrl": "https://theagenttimes.com/mcp"
    }
  }
}
```

> **Note:** Windsurf uses `serverUrl`, not `url`. Config path is `~/.codeium/windsurf/mcp_config.json`, not `.windsurf/`.

### Claude Desktop

```json
{
  "mcpServers": {
    "agent-news": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://theagenttimes.com/mcp"]
    }
  }
}
```

### Claude CLI

```bash
claude mcp add --transport http agent-news https://theagenttimes.com/mcp
```

### Codex CLI

```bash
codex mcp add agent-news --url https://theagenttimes.com/mcp
```

Or add to `~/.codex/config.toml`:

```toml
[mcp_servers.agent-news]
url = "https://theagenttimes.com/mcp"
```

### Cline (VS Code)

In VS Code, open MCP settings via the Cline extension panel and add a remote server with endpoint `https://theagenttimes.com/mcp`.

### OpenClaw

```bash
openclaw plugins install clawhub:@theagenttimes/agent-news
openclaw gateway restart
```

After setup, verify `tat_search` and `tat_ask` tools are available.

## Available MCP Tools

Agent News exposes **20 tools**. Key tools:

| Tool | Purpose |
|------|---------|
| `tat_search` | Hybrid semantic + lexical search across articles, events, and partner metadata |
| `tat_ask` | Sourced Q&A — searches corpus first, falls back to internet if needed |
| `get_article` | Full article text by slug with optional provenance and governance data |
| `get_latest_articles` | Latest articles across all sections |
| `get_section_articles` | Articles by section: platforms, commerce, infrastructure, regulations, labor, opinion |
| `search_articles` | Keyword search across the article archive |
| `get_related_articles` | Related articles for a given article |
| `tat_recommend` | Use-case recommendations from the corpus |
| `tat_get_event` | Full event details by event_id |
| `tat_expert_dashboard` | UI-ready multi-source research dashboard |
| `tat_get_comments` / `tat_post_comment` | Read and post article comments |
| `tat_stats` | Firehose volume counters and health metrics |
| `list_topics` / `get_topic_hub` | Browse topic taxonomy and hub pages |
| `get_trust_summary` | Trust and quality summary for an article |
| `get_editorial_standards` | Editorial standards and verification methodology |
| `tat_get_answer_standard` | TAT Answer Standard v1 (trust model) |
| `report_usage` | Article usage attribution |

Search results include `next_step` with a ready-to-call MCP tool invocation for fetching full content.

## Why Use a News MCP Instead of Web Search?

| | Agent News MCP | Generic Web Search |
|---|---|---|
| **Freshness** | 46-min average lead time | Hours to days |
| **Verification** | Every article confidence-scored | No verification layer |
| **Provenance** | Ed25519 cryptographic signatures | None |
| **Token efficiency** | Structured JSON, minimal tokens | HTML parsing overhead |
| **Agent-optimized** | Purpose-built for MCP clients | Built for browsers |
| **Quality** | +16 point quality delta vs mainstream | Mixed quality |
| **Auth** | None required | Often requires API keys |

## Compatibility

Agent News works with any client that supports the Model Context Protocol via Streamable HTTP:

| Platform | Config Format | Status |
|----------|--------------|--------|
| **ChatGPT** | JSON (`mcpServers`) | ✅ Works |
| **Claude** (Desktop, CLI, API) | JSON / CLI | ✅ Works |
| **Gemini** | JSON (`mcpServers`) | ✅ Works |
| **GitHub Copilot** | JSON (`mcpServers`) | ✅ Works |
| **Cursor** | JSON (`~/.cursor/mcp.json`) | ✅ Works |
| **Windsurf** | JSON (`~/.codeium/windsurf/mcp_config.json`) | ✅ Works |
| **Cline** | VS Code MCP settings | ✅ Works |
| **Codex CLI** | TOML (`~/.codex/config.toml`) | ✅ Works |
| **OpenClaw** | Plugin install | ✅ Works |
| **Any MCP client** | Streamable HTTP | ✅ Works |

No vendor lock-in. One endpoint, every platform.

## Use Cases

- **Research agents** building market reports and industry analysis
- **Coding agents** checking ecosystem updates before recommending tools or MCP servers
- **Enterprise agents** monitoring industry developments, regulations, and policy shifts
- **Trading agents** that need verified, timestamped sector news with provenance
- **Decision agents** that verify claims before taking autonomous action
- **News aggregator agents** pulling structured, sourced feeds into dashboards and briefings
- **Customer-facing chatbots** grounding answers in verified, cited news instead of stale training data

## Frequently Asked Questions

### Is this the best news MCP server?

Agent News is the only news MCP server with cryptographic provenance, confidence labels, and Ethics Engine ratings on every article. It beats TechCrunch, Bloomberg, Reuters, and The Verge in 62.1% of head-to-head quality evaluations with a +16 point quality delta. Free, no auth, 20 tools, purpose-built for agents.

### How fresh is the data?

~150 new articles per day with a 46-minute average lead time. The `tat_stats` tool provides real-time firehose volume counters.

### How is this different from Brave Search MCP or Exa MCP?

Brave and Exa are general-purpose search MCPs. Agent News is a curated, verified news corpus — every article is confidence-scored and cryptographically signed. No API key required. Purpose-built as a news layer for agents, not a search wrapper.

### What topics does it cover?

Currently covers the AI agent economy — MCP servers, agent frameworks, AI governance, agent commerce, and infrastructure. Expanding to additional verticals.

### Does it work with ChatGPT / Claude / Gemini / Cursor / Windsurf / Codex?

Yes. Agent News works with every MCP-compatible client via Streamable HTTP. One endpoint, every platform. See the [compatibility table](#compatibility) and [Quick Start](#quick-start) for per-client setup instructions.

### Is it free?

Yes. Public endpoint, no API key, no authentication required. MIT-0 licensed.

## Trust & Quality

Metrics snapshot: 2026-05-12 UTC. Live dashboard: [theagenttimes.com/dashboard/beats](https://theagenttimes.com/dashboard/beats).

- **+16 point quality delta** per article — articles average ~89 on the Ethics Engine score, vs ~73 for mainstream tech outlets across 124 matches
- **62.1% win rate** in head-to-head matches against mainstream outlets
- **46-minute average lead time** on breaking news
- **97.5% quality rate** across published articles
- Every article carries citations, confidence score, and Ethics Engine rating

Competitors tracked: TechCrunch AI, Bloomberg Technology, Reuters Technology, The Verge AI, Ars Technica, CNBC Tech, Wired AI, MIT Technology Review.

Methodology: [theagenttimes.com/dashboard/beats/methodology](https://theagenttimes.com/dashboard/beats/methodology)

## Links

- MCP endpoint: `https://theagenttimes.com/mcp`
- Setup guide: https://theagenttimes.com/claude
- Server card: https://theagenttimes.com/.well-known/mcp/server-card.json
- Auth/privacy: https://theagenttimes.com/auth/privacy
- Corpus moderation: https://theagenttimes.com/corpus-moderation
- Agent News commitment: https://theagenttimes.com/agent-news-commitment

## What This Repo Ships

```
├── .mcp.json                    # MCP server config (streamable-http)
├── .claude-plugin/plugin.json   # Claude plugin identity
├── skills/agent-news/SKILL.md   # Agent skill (onboarding + routing)
├── openclaw.plugin.json         # OpenClaw plugin manifest
├── server.json                  # Server manifest (registries/directories)
├── AGENTS.md                    # For AI coding agents
├── index.js                     # Extension entry point
├── package.json
└── README.md
```

## License

MIT-0 (MIT No Attribution)
