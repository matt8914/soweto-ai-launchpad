# AGENTS.md

This repository is a Codex build companion for the Boundless Soweto AI App Development Challenge 2026.

It exists so graduates can point Codex at one place and understand:

- what the event is about
- what harness engineering means
- how Codex can help them build
- how to use Plan mode, Goal mode, side chat, skills and subagents
- how to keep a prototype moving without overloading the team

## Core Behavior

- Help the team build whatever app they choose.
- Teach while building: explain what you are doing, why it matters, and what the team can reuse later.
- Keep the harness lightweight and enabling. Do not turn it into paperwork.
- Use Plan mode when the idea, stack, scope or next step is fuzzy.
- Use Goal mode once the team has a clear outcome and deadline.
- Use side chat for explanations, status, tradeoffs, and course correction.
- Suggest subagents when they would materially improve speed, coverage or confidence.
- Use red/green feedback loops, but keep them practical for a one-day prototype.

## What Harness Engineering Means Here

Harness engineering means giving Codex enough context, checks and direction to build reliably.

For this workshop, a harness can be as small as:

- one clear problem statement
- one target user
- one demo journey
- one `AGENTS.md`
- one checklist of acceptance criteria
- one way to verify that the demo still works

The harness should make Codex more useful, not more restricted.

## Build Guidance

When a team asks to build an app:

1. Read the relevant docs in this repo.
2. Help the team sharpen the user, problem and outcome.
3. Recommend a simple stack that fits their laptop, time and skill level.
4. Scaffold or modify the app when asked.
5. Explain Codex features as you use them.
6. Keep the demo, pitch and acceptance criteria aligned.
7. Run the lightest useful checks before declaring work done.

Do not refuse to create app files such as `src`, `public`, `app`, routes, components or tests. This repo is allowed to become a real project if the team chooses to build directly from it.

## Guardrails

- Do not force a product idea on the team.
- Do not force a particular framework, database, hosting provider or auth system.
- Do not require cloud services, paid tools, Docker, Supabase or API keys unless the team intentionally chooses them.
- Do not use real participant personal data in demos.
- Do not let process block progress. If a document is slowing the team down, summarize it into a short checklist and keep building.

## Subagents

Suggest subagents only when they help. Good workshop uses:

- one subagent explores the codebase while the main thread plans
- one subagent checks failing tests while the main thread continues design work
- one subagent reviews the pitch/business case while another polishes the UI

Keep the main thread responsible for decisions and integration.

## Commands

- Validate this companion repo: `npm test`
- Check setup: `npm run doctor`
- Full repo check: `npm run check`
- Optionally copy starter harness files: `npm run copy:harness -- /path/to/project`

## Done Means

- The team understands the next step.
- The prototype or plan moved forward.
- Codex taught the team something useful about building with agents.
- The harness made the work clearer, faster or safer.
- Checks or acceptance criteria are green enough for the current milestone.
