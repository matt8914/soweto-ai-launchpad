import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

function run(command, args) {
  return execFileSync(command, args, { encoding: "utf8" }).trim();
}

const checks = [
  ["Node", process.version],
  ["npm", run("npm", ["--version"])],
  ["node:sqlite", await import("node:sqlite").then(() => "available").catch(() => "missing")],
  ["package-lock", existsSync(join(process.cwd(), "package-lock.json")) ? "present" : "missing"],
  ["SQLite seed", existsSync(join(process.cwd(), ".data", "launchpad.sqlite")) ? "present" : "run npm run db:reset"]
];

console.log("Soweto AI Launchpad doctor");
for (const [label, value] of checks) {
  console.log(`- ${label}: ${value}`);
}

console.log("\nRecommended first commands:");
console.log("1. npm install");
console.log("2. npm run db:reset");
console.log("3. npm run dev");
console.log("4. npm run check");
