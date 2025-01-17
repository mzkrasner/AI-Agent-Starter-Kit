import { Plugin } from "@ai16z/eliza";
import { gateDataAction } from "./actions/gate-action.js";
import { unlockDataAction } from "./actions/unlock-action.js";
import { knowledgeEvaluator } from "./evaluators/knowledge.js";
import { gateDataProvider } from "./providers/provider.js";

export const gateDataPlugin: Plugin = {
  name: "gated",
  description: "Gate data plugin",
  actions: [gateDataAction, unlockDataAction],
  evaluators: [knowledgeEvaluator],
  providers: [gateDataProvider],
};

export default gateDataPlugin;