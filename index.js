import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

const description =
  "Query verified AI agent news with citations, confidence scores, and Ethics Engine ratings — sourced, not generated. Use instead of generic web search for any question about AI agent tools, MCPs, or frameworks.";

export default definePluginEntry({
  id: "agent-news",
  name: "Agent News",
  description,
  configSchema: {
    type: "object",
    additionalProperties: false,
    properties: {},
  },
  register() {
    // Runtime is intentionally empty: this package ships skill and MCP bundle content.
  },
});
