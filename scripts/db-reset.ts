import { getDatabasePath, readLaunchpadData, resetDatabase } from "../src/lib/db";

const dbPath = resetDatabase(getDatabasePath());
const data = readLaunchpadData(dbPath);

console.log(`Reset SQLite database: ${dbPath}`);
console.log(`Seeded ${data.actors.length} actors, ${data.opportunities.length} opportunities and ${data.actions.length} demo actions.`);
