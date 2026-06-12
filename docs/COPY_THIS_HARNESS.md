# Optional Harness Files

Teams can copy the files in `templates/project-harness/` into the app they are building, but this is optional.

Use what helps. Skip what slows the team down.

## Copy The Smallest Useful Set

For most teams, start with:

```text
templates/project-harness/
  AGENTS.md
  docs/
    PROJECT_BRIEF.md
    ACCEPTANCE_CRITERIA.md
    DEMO_SCRIPT.md
    TESTING.md
```

If the team has time, also copy:

```text
    DECISIONS.md
    RETROSPECTIVE.md
  .agents/
    skills/
      project-coach/
        SKILL.md
```

## What Each File Does

- `AGENTS.md` tells Codex how to help with this specific app.
- `PROJECT_BRIEF.md` keeps the user, problem and result visible.
- `ACCEPTANCE_CRITERIA.md` defines what green means for the demo.
- `DEMO_SCRIPT.md` keeps the product and pitch connected.
- `TESTING.md` records the lightest useful checks.
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
Read AGENTS.md and the docs folder. Help us build the app we chose. Use Plan mode if the next step is fuzzy, teach us while building, and keep the harness lightweight and enabling.
```
