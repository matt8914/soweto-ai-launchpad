# Harness Engineering

Harness engineering is the practice of building the environment around an AI coding agent so it can do useful work reliably.

For this challenge:

```text
The app is what the team builds.
The harness is how the team and Codex know whether the app is working.
```

## Plain-English Version

A harness is the workbench, dashboard and test track around the thing you are building.

It helps Codex answer:

- What are we trying to build?
- Who is this for?
- What does success look like?
- How do I run the project?
- What checks tell us if the work is red or green?
- What should I avoid?
- What should I do next when something breaks?

## Why It Matters

Codex can produce code quickly. That is useful, but speed alone is not the win.

The real win is steering:

- clear problem
- clear constraints
- clear context
- clear acceptance criteria
- fast checks
- short feedback loops

Without a harness, Codex guesses. With a harness, Codex can work inside a system.

## What A Small Harness Can Contain

- `AGENTS.md` - durable instructions for Codex.
- `docs/PROJECT_BRIEF.md` - the user, problem, result and demo scope.
- `docs/ACCEPTANCE_CRITERIA.md` - what must be true before the team can pitch.
- `docs/DEMO_SCRIPT.md` - what judges will see.
- `docs/TESTING.md` - how to run red/green checks.
- `.agents/skills/project-coach/SKILL.md` - a repo skill that keeps Codex focused.

## The Red/Green Loop

1. State what should work.
2. Write a check or acceptance criterion.
3. Confirm the current state is red or incomplete.
4. Ask Codex for the smallest useful change.
5. Run the check again.
6. Repeat until green.

This is red/green test-driven development for a one-day prototype.

## The Mindset

Good teams can ask AI to build ambitious things.

The difference is that they give Codex context, feedback and a direction of travel, then keep expanding from the first working version.
