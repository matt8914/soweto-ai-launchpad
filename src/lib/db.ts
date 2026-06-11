import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import { seedData, type Actor, type DemoAction, type LaunchpadData, type Opportunity, type PitchFact } from "./seed-data";

type DbPath = string;

const memorySnapshots = new Map<string, LaunchpadData>();

export function getDatabasePath(): DbPath {
  return process.env.SQLITE_PATH
    ? path.resolve(process.cwd(), process.env.SQLITE_PATH)
    : path.join(process.cwd(), ".data", "launchpad.sqlite");
}

export function ensureDatabase(dbPath: DbPath = getDatabasePath()): DbPath {
  if (dbPath.startsWith("memory:")) {
    return dbPath;
  }

  if (!existsSync(dbPath)) {
    resetDatabase(dbPath);
  }

  return dbPath;
}

export function resetDatabase(targetPath: DbPath = getDatabasePath()): DbPath {
  const isMemory = targetPath === ":memory:";
  const dbPath = isMemory ? `memory:${randomUUID()}` : targetPath;
  const sqlitePath = isMemory ? ":memory:" : targetPath;

  if (!isMemory) {
    mkdirSync(path.dirname(targetPath), { recursive: true });
  }

  const db = new DatabaseSync(sqlitePath);
  createSchema(db);
  insertSeedData(db);
  const snapshot = readFromDatabase(db);
  db.close();

  if (isMemory) {
    memorySnapshots.set(dbPath, snapshot);
  }

  return dbPath;
}

export function readLaunchpadData(targetPath: DbPath = getDatabasePath()): LaunchpadData {
  if (targetPath.startsWith("memory:")) {
    const snapshot = memorySnapshots.get(targetPath);
    if (!snapshot) {
      throw new Error(`No in-memory launchpad database exists for ${targetPath}`);
    }
    return snapshot;
  }

  const dbPath = ensureDatabase(targetPath);
  const db = new DatabaseSync(dbPath, { readOnly: true });
  const data = readFromDatabase(db);
  db.close();
  return data;
}

function createSchema(db: DatabaseSync): void {
  db.exec(`
    DROP TABLE IF EXISTS feedback;
    DROP TABLE IF EXISTS actions;
    DROP TABLE IF EXISTS opportunities;
    DROP TABLE IF EXISTS actors;
    DROP TABLE IF EXISTS pitch_facts;

    CREATE TABLE actors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      bio TEXT NOT NULL,
      location TEXT NOT NULL,
      goal TEXT NOT NULL
    );

    CREATE TABLE opportunities (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      track TEXT NOT NULL,
      provider TEXT NOT NULL,
      description TEXT NOT NULL,
      status TEXT NOT NULL
    );

    CREATE TABLE actions (
      id TEXT PRIMARY KEY,
      actor_id TEXT NOT NULL,
      opportunity_id TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL,
      note TEXT NOT NULL,
      FOREIGN KEY(actor_id) REFERENCES actors(id),
      FOREIGN KEY(opportunity_id) REFERENCES opportunities(id)
    );

    CREATE TABLE feedback (
      id TEXT PRIMARY KEY,
      from_actor_id TEXT NOT NULL,
      to_actor_id TEXT NOT NULL,
      message TEXT NOT NULL,
      next_step TEXT NOT NULL,
      FOREIGN KEY(from_actor_id) REFERENCES actors(id),
      FOREIGN KEY(to_actor_id) REFERENCES actors(id)
    );

    CREATE TABLE pitch_facts (
      id TEXT PRIMARY KEY,
      label TEXT NOT NULL,
      value TEXT NOT NULL
    );
  `);
}

function insertSeedData(db: DatabaseSync): void {
  const actorStatement = db.prepare(`
    INSERT INTO actors (id, name, role, bio, location, goal)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const opportunityStatement = db.prepare(`
    INSERT INTO opportunities (id, title, track, provider, description, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const actionStatement = db.prepare(`
    INSERT INTO actions (id, actor_id, opportunity_id, type, status, note)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const feedbackStatement = db.prepare(`
    INSERT INTO feedback (id, from_actor_id, to_actor_id, message, next_step)
    VALUES (?, ?, ?, ?, ?)
  `);
  const pitchFactStatement = db.prepare(`
    INSERT INTO pitch_facts (id, label, value)
    VALUES (?, ?, ?)
  `);

  for (const actor of seedData.actors) {
    actorStatement.run(actor.id, actor.name, actor.role, actor.bio, actor.location, actor.goal);
  }

  for (const opportunity of seedData.opportunities) {
    opportunityStatement.run(
      opportunity.id,
      opportunity.title,
      opportunity.track,
      opportunity.provider,
      opportunity.description,
      opportunity.status
    );
  }

  for (const action of seedData.actions) {
    actionStatement.run(action.id, action.actorId, action.opportunityId, action.type, action.status, action.note);
  }

  for (const item of seedData.feedback) {
    feedbackStatement.run(item.id, item.fromActorId, item.toActorId, item.message, item.nextStep);
  }

  for (const fact of seedData.pitchFacts) {
    pitchFactStatement.run(fact.id, fact.label, fact.value);
  }
}

function readFromDatabase(db: DatabaseSync): LaunchpadData {
  const actors = db.prepare("SELECT id, name, role, bio, location, goal FROM actors ORDER BY id").all() as Actor[];
  const opportunities = db
    .prepare("SELECT id, title, track, provider, description, status FROM opportunities ORDER BY id")
    .all() as Opportunity[];
  const actionRows = db
    .prepare("SELECT id, actor_id, opportunity_id, type, status, note FROM actions ORDER BY id")
    .all() as Array<{
    id: string;
    actor_id: string;
    opportunity_id: string;
    type: DemoAction["type"];
    status: DemoAction["status"];
    note: string;
  }>;
  const feedbackRows = db
    .prepare("SELECT id, from_actor_id, to_actor_id, message, next_step FROM feedback ORDER BY id")
    .all() as Array<{
    id: string;
    from_actor_id: string;
    to_actor_id: string;
    message: string;
    next_step: string;
  }>;
  const pitchFacts = db.prepare("SELECT id, label, value FROM pitch_facts ORDER BY id").all() as PitchFact[];

  return {
    actors,
    opportunities,
    actions: actionRows.map((row) => ({
      id: row.id,
      actorId: row.actor_id,
      opportunityId: row.opportunity_id,
      type: row.type,
      status: row.status,
      note: row.note
    })),
    feedback: feedbackRows.map((row) => ({
      id: row.id,
      fromActorId: row.from_actor_id,
      toActorId: row.to_actor_id,
      message: row.message,
      nextStep: row.next_step
    })),
    pitchFacts
  };
}
