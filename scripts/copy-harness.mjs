import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const target = process.argv[2];

if (!target) {
  console.error("Usage: npm run copy:harness -- /path/to/team-project");
  process.exit(1);
}

const source = resolve(process.cwd(), "templates", "project-harness");
const destination = resolve(target);

if (!existsSync(source)) {
  console.error(`Missing harness template: ${source}`);
  process.exit(1);
}

mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true, force: false, errorOnExist: false });

console.log(`Copied harness template into ${destination}`);
console.log("Next: open that project in Codex and ask it to read AGENTS.md before editing.");
