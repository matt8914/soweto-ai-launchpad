# Harness Engineering

Harness engineering means building the rails around Codex so it can do useful work reliably.

For this challenge, the app is the thing the team builds. The harness is the set of instructions, tests, seed data, scripts and checklists that prove the app still works.

## Plain Definition

A harness is the safety rail and scoreboard around your app.

It tells Codex:

- what the product is trying to do
- how to run the app
- what data exists
- what tests prove the core flow works
- what done means before the demo

## Workshop Harness

This repo includes:

- `AGENTS.md` as the short table of contents for Codex
- `docs/` for deeper guidance
- local SQLite seed data for repeatable demos
- `npm test` for fast red/green feedback
- `npm run check` for lint, typecheck and tests
- `/pitch` and `/checklist` so business thinking stays visible

## The Loop

1. Say what should work.
2. Write or update the check.
3. Watch it fail red.
4. Ask Codex to implement the smallest fix.
5. Run the check again.
6. Stop when it is green.

The key lesson: good builders do not just build features. They build the system that proves the feature works.
