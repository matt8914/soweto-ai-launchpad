# Codex Modes For The Challenge

Use these modes to control the work instead of letting the thread drift.

## Plan Mode

Use Plan mode before coding when the task is fuzzy, broad or risky.

Use it for:

- choosing the smallest buildable demo
- turning an idea into acceptance criteria
- deciding the first red/green milestone
- checking whether the team is over-scoping

Prompt:

```text
Use Plan mode. Do not edit yet. Read the harness docs and propose the smallest credible demo we can finish today.
```

## Goal Mode

Use Goal mode after the team knows the outcome.

Good Goal mode text:

```text
By 15:40, help this team produce a working prototype for one specific community problem, with a clear demo script, acceptance criteria, and green checks. Keep scope small and explain tradeoffs before making major changes.
```

Goal mode is useful because Codex keeps checking the work against the same definition of done.

## Side Chat

Use side chat when you need understanding without interrupting the main build.

Use side chat for:

- “Where are we?”
- “What is risky?”
- “Explain this error.”
- “What should we do next?”
- “What can we cut to finish by 15:40?”

Prompt:

```text
Side chat: give us a status recap. What is done, what is red, and what is the fastest path to green?
```

## Short Threads

If the context gets crowded, start a fresh thread and point Codex at:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/ACCEPTANCE_CRITERIA.md`
- `docs/DEMO_SCRIPT.md`

Then ask:

```text
Read these harness files and continue from the current acceptance criteria. Do not broaden scope.
```
