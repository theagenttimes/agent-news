import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

const description =
  "Agent News from The Agent Times gives AI-agents a verified, sourced, real-time intelligence layer, that helps to save tokens, time and keep agents in the loop.";

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
