# Soweto AI Codex Build Companion

This repo helps teams at the Boundless Soweto AI App Development Challenge understand Codex, harness engineering and agent-assisted building.

It is not meant to restrict what graduates can build. It is meant to give Codex enough context to help them build whatever app they choose, while teaching them along the way.

The core idea:

```text
Humans steer. Agents execute. The harness keeps the work clear, testable and teachable.
```

## What This Repo Teaches

- What harness engineering is.
- How Codex works as a build partner.
- How to use Plan mode for fuzzy decisions.
- How to use Goal mode once the outcome is clear.
- How to use side chat for explanations and status.
- How to use skills and subagents when they help.
- How to keep red/green feedback loops lightweight and enabling.
- How to make a project understandable to Codex through `AGENTS.md`, short docs, acceptance criteria and checks.

## How Participants Can Use It

There are two good paths:

1. Use this repo as a reference while building a new app somewhere else.
2. Fork or clone this repo and ask Codex to turn it into the app your team chooses.

Both are fine. The point is not to protect this repo from app code. The point is to help the team learn how to steer Codex.

## First Prompt

```text
Read this repo first. Understand the challenge, harness engineering, and how you should teach us while building.

Then help us choose or sharpen one app idea, create the smallest useful harness, and start building the first demoable version.
```

## Build Prompt

Use this when your team has an idea:

```text
We are building for the Boundless Soweto AI App Development Challenge.

Our idea is: [describe the app]
Our target user is: [specific user]
The problem is: [specific problem]
The result we want is: [specific result]
Our demo must be ready by: [time]

Use Plan mode if the path is fuzzy. Then help us build. Teach us what you are doing as you go, suggest Codex features when useful, and keep the harness lightweight and enabling.
```

## Repo Map

- `AGENTS.md` - durable instructions telling Codex to help teams build and teach while building.
- `docs/CODEX_BEGINNER_CHEATSHEET.md` - very simple first-time Codex guide for the students.
- `docs/HERMES_CONTEXT.md` - rich context prompt for handing the event support to a Hermes agent.
- `docs/BUILD_WITH_CODEX.md` - practical guide for using Codex during the challenge.
- `docs/HARNESS_ENGINEERING.md` - the main harness engineering explanation.
- `docs/OPENAI_HARNESS_ENGINEERING_ARTICLE.md` - markdown companion to Ryan Lopopolo's OpenAI article.
- `docs/CODEX_MODES.md` - Plan mode, Goal mode, side chat and subagents.
- `docs/PROMPT_LIBRARY.md` - copy-paste prompts for the challenge.
- `docs/COPY_THIS_HARNESS.md` - optional files teams can copy into their app.
- `templates/project-harness/` - optional starter harness files.
- `.agents/skills/harness-coach/` - repo skill for Codex to teach and apply the harness.
- `facilitator/codex-beginner-cheatsheet.html` - printable two-page beginner handout.
- `facilitator/group-run-plan.md` - simple facilitator plan for 5 groups of 7.
- `facilitator/masterclass-guide.md` - 35-minute Luma masterclass script.

## Commands

This companion repo has no required app runtime. If your team scaffolds an app here, add the app's normal commands as you go.

For the companion repo itself:

```bash
npm test
npm run doctor
npm run check
```

To copy optional harness files into another project:

```bash
npm run copy:harness -- /path/to/your-project
```

## Optional Hallmark Design Skill

The third-party Hallmark design skill is vendored in `.agents/skills/hallmark` because it can help teams improve landing-page design. It is optional and MIT licensed. Use it for design direction, not for copying protected designs, logos, paid templates or exact trade dress.
