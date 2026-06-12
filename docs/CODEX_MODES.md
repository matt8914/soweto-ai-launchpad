# Codex Features For The Challenge

Use Codex features to keep the team moving, learning and building.

## Plan Mode

Use Plan mode before coding when the task is fuzzy, broad or risky.

Use it for:

- choosing what to build first
- choosing a stack
- turning an idea into screens and flows
- deciding the first red/green milestone
- checking whether the team is over-scoping

Prompt:

```text
Use Plan mode. Read the current files and do not edit yet. Help us choose the fastest path to a demo we can finish today.
```

## Goal Mode

Use Goal mode once the team knows the outcome.

Good Goal mode text:

```text
By 15:40, help this team build a working prototype for [specific user] and [specific problem]. Keep teaching us Codex features while building, use lightweight red/green checks, and keep the demo and pitch aligned.
```

Goal mode is useful because Codex keeps checking the work against the same definition of done.

## Side Chat

Use side chat when the team needs understanding without interrupting the main build.

Use side chat for:

- "Where are we?"
- "What is risky?"
- "Explain this error."
- "What should we do next?"
- "What can we cut to finish by 15:40?"
- "Explain what Codex just changed."

Prompt:

```text
Side chat: give us a status recap. What works, what is still red, and what is the fastest path to green?
```

## Skills

Skills are reusable workflows that Codex can load when the task matches. This repo includes a harness coach skill and the optional Hallmark design skill.

Use a skill when:

- the team wants structured coaching
- the team wants a design review
- the same workflow will be repeated
- the repo should carry durable instructions beyond one prompt

Prompt:

```text
Use the harness coach skill if useful. Help us turn our idea into a build plan, a demo flow, and the smallest useful harness.
```

## Subagents

Subagents let Codex delegate independent work to parallel agents and summarize the results back to the main thread. They are useful, but optional.

Good uses:

- one subagent investigates failing checks
- one subagent reviews the demo flow
- one subagent reviews the pitch
- one subagent scans for design polish opportunities

Avoid subagents for tiny tasks or decisions the main team must make together.

Prompt:

```text
Use subagents if they will materially improve speed, coverage or confidence. Keep the main thread responsible for decisions and integration.
```

## Short Threads

If the context gets crowded, start a fresh thread and point Codex at:

- `README.md`
- `AGENTS.md`
- `docs/BUILD_WITH_CODEX.md`
- the app files the team has built

Then ask:

```text
Read the repo guidance and current project files. First summarize what you understand, then continue from the next smallest useful build step.
```
