import { existsSync } from "node:fs";
import { join } from "node:path";

const checks = [
  ["Node", process.version],
  ["README", existsSync(join(process.cwd(), "README.md")) ? "present" : "missing"],
  ["AGENTS.md", existsSync(join(process.cwd(), "AGENTS.md")) ? "present" : "missing"],
  ["Harness docs", existsSync(join(process.cwd(), "docs", "HARNESS_ENGINEERING.md")) ? "present" : "missing"],
  ["Codex modes docs", existsSync(join(process.cwd(), "docs", "CODEX_MODES.md")) ? "present" : "missing"],
  ["Copyable template", existsSync(join(process.cwd(), "templates", "project-harness", "AGENTS.md")) ? "present" : "missing"],
  ["Harness skill", existsSync(join(process.cwd(), ".agents", "skills", "harness-coach", "SKILL.md")) ? "present" : "missing"]
];

console.log("Soweto AI Harness Launch Kit doctor");
for (const [label, value] of checks) {
  console.log(`- ${label}: ${value}`);
}

console.log("\nRecommended first commands:");
console.log("1. npm test");
console.log("2. npm run check");
console.log("3. npm run copy:harness -- /path/to/team-project");
