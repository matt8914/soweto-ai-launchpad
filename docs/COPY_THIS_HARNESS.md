# Copy This Harness

Teams should copy the files in `templates/project-harness/` into the project they are building.

## Copy All Of This

```text
templates/project-harness/
  AGENTS.md
  docs/
    PROJECT_BRIEF.md
    ACCEPTANCE_CRITERIA.md
    DEMO_SCRIPT.md
    TESTING.md
    DECISIONS.md
    RETROSPECTIVE.md
  .agents/
    skills/
      project-coach/
        SKILL.md
```

## What Each File Does

- `AGENTS.md` tells Codex how to behave in the project.
- `PROJECT_BRIEF.md` keeps the team focused on one user and one problem.
- `ACCEPTANCE_CRITERIA.md` defines green.
- `DEMO_SCRIPT.md` makes the pitch concrete.
- `TESTING.md` records checks and commands.
- `DECISIONS.md` prevents repeated debates.
- `RETROSPECTIVE.md` captures what the team learned.
- `project-coach/SKILL.md` gives Codex a project-specific coaching workflow.

## Copy Command

From this repo:

```bash
npm run copy:harness -- /path/to/your-project
```

Then open the target project in Codex and say:

```text
Read AGENTS.md and the docs folder. Use Plan mode. Do not edit yet. Help us create the first red/green milestone.
```
