# Build With Codex During The Challenge

This guide is for teams who want Codex to help them build something real today.

The aim is simple: build whatever app your team chooses, learn how Codex works, and use a lightweight harness so the work stays clear.

## Start With A Real Problem

Before asking for code, write one sentence:

```text
A [specific person] in Soweto struggles to [specific problem], so our app helps them [specific result].
```

Examples:

- A spaza shop owner struggles to track stock and cash flow, so our app helps them record sales and see what to restock.
- A matric learner struggles to plan study time, so our app helps them create a daily revision plan and track progress.
- A community volunteer struggles to coordinate cleanup teams, so our app helps them log hotspots, tasks and available helpers.

You can build in any track. The harness should support the idea, not shrink it too early.

## Ask Codex To Teach While Building

Use this prompt:

```text
Help us build this app. Teach while building.

When you make a decision, briefly explain:
- what you are doing
- why it helps the demo
- what Codex feature or harness idea we should notice

Keep explanations short enough that we keep moving.
```

This turns Codex into a practical build partner, not just a code generator.

## Use Plan Mode For Fuzzy Work

Use Plan mode when the team is unsure about:

- what to build first
- what stack to use
- how to turn an idea into screens
- whether the idea is too broad
- how to make a judge-friendly demo

Prompt:

```text
Use Plan mode. Read the repo. Do not edit yet.

Our app idea is [idea]. Help us choose the first version we can demo today. Give us a plan with the smallest useful harness and the first build milestone.
```

## Use Goal Mode Once The Outcome Is Clear

Use Goal mode after the team knows what the prototype should show.

Goal text:

```text
By [deadline], help this team build a working demo for [specific user] who needs [specific result]. The demo should show [core journey]. Keep teaching us Codex features as you work, use lightweight red/green checks, and keep the pitch aligned with the product.
```

Goal mode helps Codex keep returning to the same outcome instead of drifting into random features.

## Use Side Chat To Learn Without Stopping The Build

Use side chat for questions that should not derail the main task:

- Explain this file in plain language.
- What are you doing right now?
- Why did the check fail?
- Are we still on track?
- What should we cut if time is short?
- How would a judge understand this feature?

Prompt:

```text
Side chat: give us a quick status update. What works, what is still red, and what should we do next?
```

## Use Subagents When They Help

Subagents are useful when parallel work saves time or gives better coverage. They are optional and may use more tokens.

Good uses:

- one subagent checks test failures while the main thread keeps planning
- one subagent reviews the pitch while the main thread builds
- one subagent explores design improvements while the main thread fixes functionality
- one subagent checks whether the app matches the judging rubric

Prompt:

```text
Use subagents if available and useful. Keep the main thread focused on decisions. Spawn one subagent to review the demo flow and one to review the pitch. Wait for both, then summarize the changes we should make.
```

## Keep The Harness Lightweight

A workshop harness can be tiny:

```text
User:
Problem:
Core journey:
Demo deadline:
Acceptance criteria:
Check command or manual smoke check:
```

If the team is moving fast, do not stop to fill in every document. Ask Codex to keep a short running checklist and update it when decisions change.

## Use Red/Green Without Making It Heavy

Red/green does not always need a full automated test.

Red can mean:

- this page does not exist yet
- this button does not work yet
- this demo step currently fails
- this test fails
- this checklist item is incomplete

Green can mean:

- the user can complete the journey
- the page loads locally
- the data appears correctly
- the check command passes
- the team can explain what is mocked

Prompt:

```text
Before building the next feature, define one red/green check for it. Keep it lightweight enough for a one-day prototype.
```

## Good Build Rhythm

1. Pick one user and one problem.
2. Ask Codex for a Plan mode build plan.
3. Set a Goal mode objective once the target is clear.
4. Scaffold the simplest app that can show the idea.
5. Build one demo journey.
6. Ask side chat questions when the team needs clarity.
7. Use subagents only for useful parallel work.
8. Run a lightweight check after each milestone.
9. Prepare a short pitch from what actually works.

## When You Are Stuck

Ask Codex:

```text
We are stuck. Diagnose the blocker, explain it simply, and give us the fastest path to a demo. If there are multiple options, recommend one and explain the tradeoff.
```

If context gets crowded, start a fresh thread and say:

```text
Read README.md, AGENTS.md, docs/BUILD_WITH_CODEX.md and our current project files. Continue from the current state. First summarize what you understand, then propose the next smallest useful build step.
```
