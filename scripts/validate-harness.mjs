import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "docs/HARNESS_ENGINEERING.md",
  "docs/OPENAI_HARNESS_ENGINEERING_ARTICLE.md",
  "docs/CODEX_MODES.md",
  "docs/PROMPT_LIBRARY.md",
  "docs/COPY_THIS_HARNESS.md",
  "docs/DAY_PLAN.md",
  "facilitator/masterclass-guide.md",
  "templates/project-harness/AGENTS.md",
  "templates/project-harness/docs/PROJECT_BRIEF.md",
  "templates/project-harness/docs/ACCEPTANCE_CRITERIA.md",
  "templates/project-harness/docs/DEMO_SCRIPT.md",
  "templates/project-harness/.agents/skills/project-coach/SKILL.md",
  ".agents/skills/harness-coach/SKILL.md"
];

const forbiddenPaths = [
  "src",
  "public",
  "next.config.ts",
  "next-env.d.ts",
  "tailwind.config.ts",
  "postcss.config.mjs",
  "vitest.config.ts"
];

const forbiddenTerms = [
  "KasiCareer",
  "Kasi Career",
  "Cassie Career",
  "RoleSwitcher",
  "starter app",
  "sample product"
];

const requiredTerms = [
  "harness engineering",
  "Ryan Lopopolo",
  "https://openai.com/index/harness-engineering/",
  "Plan mode",
  "Goal mode",
  "side chat",
  "red/green",
  "AGENTS.md",
  "acceptance criteria"
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(join(process.cwd(), file))) {
    failures.push(`Missing required harness file: ${file}`);
  }
}

for (const filePath of forbiddenPaths) {
  if (existsSync(join(process.cwd(), filePath))) {
    failures.push(`App scaffold should not exist in this harness repo: ${filePath}`);
  }
}

const textFiles = [
  "README.md",
  "AGENTS.md",
  ...requiredFiles.filter((file) => file.endsWith(".md"))
].filter((file, index, all) => all.indexOf(file) === index && existsSync(join(process.cwd(), file)));

const combinedText = textFiles.map((file) => readFileSync(join(process.cwd(), file), "utf8")).join("\n");

for (const term of forbiddenTerms) {
  if (combinedText.includes(term)) {
    failures.push(`Remove app-specific term from harness docs: ${term}`);
  }
}

for (const term of requiredTerms) {
  if (!combinedText.includes(term)) {
    failures.push(`Harness docs should teach: ${term}`);
  }
}

if (failures.length > 0) {
  console.error("Harness validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Harness validation passed. This repo is a Codex/harness launch kit, not a product scaffold.");
