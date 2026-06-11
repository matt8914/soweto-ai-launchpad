import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "src/app/page.tsx",
  "src/app/demo/page.tsx",
  "src/app/pitch/page.tsx",
  "src/app/checklist/page.tsx",
  "docs/HARNESS_ENGINEERING.md",
  "docs/PROMPT_LIBRARY.md",
  ".agents/skills/challenge-coach/SKILL.md"
];

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (missing.length > 0) {
  console.error("Smoke check failed. Missing files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

if (process.env.SMOKE_URL) {
  const paths = ["/", "/demo", "/pitch", "/checklist"];
  for (const route of paths) {
    const response = await fetch(new URL(route, process.env.SMOKE_URL));
    if (!response.ok) {
      console.error(`Smoke check failed for ${route}: HTTP ${response.status}`);
      process.exit(1);
    }
  }
}

console.log("Smoke check passed. Core routes, docs and skills are present.");
