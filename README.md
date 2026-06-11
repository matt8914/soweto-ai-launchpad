# Soweto AI Harness Launch Kit

This is not an application scaffold.

This repo is a Codex and harness engineering launch kit for the Boundless Soweto AI App Development Challenge 2026. Teams should clone it, let Codex read it, learn the workflow, then copy the harness templates into the project they decide to build.

The core idea:

```text
Humans steer. Agents execute. The harness makes the work visible, testable and reviewable.
```

## What This Repo Teaches

- What harness engineering is.
- How to use Codex as a build partner instead of an autocomplete tool.
- How to use Plan mode before coding.
- How to use Goal mode to hold the day’s outcome steady.
- How to use side chat for status, explanations and course correction.
- How to use red/green checks so teams know whether the prototype still works.
- How to give Codex enough repo context through `AGENTS.md`, docs, prompts, acceptance criteria and tests.

## How Participants Should Use It

1. Clone this repo.
2. Open it with Codex.
3. Ask Codex to explain the harness in plain language.
4. Choose the project your team wants to build.
5. Copy `templates/project-harness/` into your new project folder.
6. Customize the copied files for your idea.
7. Start building with Plan mode, Goal mode and red/green checks.

## First Prompt

```text
Read this repo and explain harness engineering to our team in plain language. Then show us exactly which files from templates/project-harness we should copy into the project we are about to build. Do not write product code yet.
```

## The Prompt To Start A New Project

Use this after your team has chosen a problem:

```text
We are building for the Boundless Soweto AI App Development Challenge. Use Plan mode. Do not edit yet.

Our user is: [specific user]
Their problem is: [specific problem]
The result we want is: [specific result]
Our demo must be ready by 15:40.

Read AGENTS.md and the docs in this repo. Propose the smallest harness and first red/green milestone for our project.
```

## Repo Map

- `docs/HARNESS_ENGINEERING.md` - the main explanation.
- `docs/CODEX_MODES.md` - Plan mode, Goal mode and side chat.
- `docs/PROMPT_LIBRARY.md` - copy-paste prompts for the challenge.
- `docs/COPY_THIS_HARNESS.md` - what to copy into a team project.
- `templates/project-harness/` - the actual copyable harness.
- `.agents/skills/harness-coach/` - repo skill for Codex to teach and apply the harness.
- `facilitator/masterclass-guide.md` - 35-minute Luma masterclass script.

## Commands

There is no product runtime in this repo.

```bash
npm test
npm run doctor
npm run check
```

These commands validate that the launch kit still contains the right harness material and has not drifted back into a product scaffold.

To copy the harness into another project:

```bash
npm run copy:harness -- /path/to/your-project
```

## Optional Hallmark Design Skill

The third-party Hallmark design skill is vendored in `.agents/skills/hallmark` because it can help teams later improve landing-page design. It is optional and MIT licensed. The harness workflow comes first.
