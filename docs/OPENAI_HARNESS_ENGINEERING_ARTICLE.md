# OpenAI Harness Engineering Article Companion

Source: [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) by Ryan Lopopolo, OpenAI.

This file is a markdown study companion for the original OpenAI article. It is not a full copy of the article and should not be treated as a replacement for the source. For exact wording, read the original article at the link above.

The goal of this file is to help challenge teams understand the article quickly, then apply the ideas inside their own project harness.

## One-Sentence Thesis

Harness engineering is the work of designing the system around Codex so agents can build, check, review and improve software with humans steering the direction.

The short version:

```text
Humans steer. Agents execute.
```

## What The Article Is About

Ryan Lopopolo describes an OpenAI team experiment where a small team used Codex as the main builder for a real internal software product. The important lesson is not only that Codex could write code. The important lesson is that the team changed the engineering environment so Codex could do useful work repeatedly.

The article is about moving from:

```text
Human writes most of the code.
AI helps in small moments.
```

to:

```text
Human defines intent, constraints and quality bars.
Agents do more of the execution.
The harness keeps the work inspectable.
```

That shift only works if the repo gives the agent enough structure.

## What "Harness" Means Here

A harness is everything around the model that turns raw generation into reliable engineering work.

In a normal project, the harness can include:

- repo instructions such as `AGENTS.md`
- project briefs and acceptance criteria
- repeatable setup commands
- test commands
- lint and typecheck commands
- smoke checks
- CI checks
- logs and observability
- review rules
- issue templates
- prompt libraries
- skills under `.agents/skills`
- scripts that make repeated work easy
- a clear definition of done

The model is powerful, but the harness tells it where to apply that power.

## Why The Article Matters For This Challenge

The Boundless Soweto challenge is a one-day build environment. Teams do not have time to wander.

Harness engineering helps teams move faster because it answers the questions that otherwise waste the day:

- What problem are we solving?
- Who is the user?
- What result should the user get?
- What is the smallest demoable journey?
- What should Codex build first?
- What checks prove the demo still works?
- What should the team stop building because it is outside scope?

Without a harness, Codex may generate impressive code that does not serve the pitch. With a harness, the team can keep Codex pointed at the user problem, the demo and the judging criteria.

## The Engineering Shift

The article argues that agent-first engineering changes the human job.

The human does less hand-writing of implementation details and more steering:

- framing the problem
- deciding the user value
- setting constraints
- reviewing outcomes
- watching for risk
- improving the harness when the agent gets stuck

The agent does more execution:

- reading the repo
- proposing a plan
- writing code
- writing tests
- running commands
- diagnosing failures
- updating docs
- repeating the loop

This does not remove engineering judgment. It moves judgment earlier and higher in the workflow.

## The Most Important Lesson

The bottleneck becomes attention and feedback.

If the agent has poor context, it guesses. If the checks are vague, it may declare success too early. If the goal is unclear, it may build the wrong thing quickly.

The harness protects the team from those failure modes by making context, commands and success criteria explicit.

## What A Good Harness Does

A good harness gives Codex a working map of the project.

It should tell Codex:

- what this repo is for
- what kind of work is in scope
- what kind of work is out of scope
- how to start the project
- how to run checks
- what quality bar matters
- how to handle failing checks
- how to ask for clarification
- how to update docs after changes
- how to keep the demo working

For a one-day challenge, the harness should be short. If the harness is too complicated, teams will stop using it.

## What Humans Still Own

The article's message is not "let AI do anything."

Humans still own:

- the problem choice
- the ethical boundaries
- the product judgment
- the user story
- the acceptance criteria
- the decision to stop or continue
- the final pitch
- the responsibility for what gets shown

Codex can help execute, but the team must decide what matters.

## Translating The Article Into A Student Workflow

For the challenge, students can apply the article with this loop:

1. Write the user problem in one sentence.
2. Write the smallest demo journey.
3. Create or copy `AGENTS.md`.
4. Add acceptance criteria before building.
5. Ask Codex to make a plan before editing.
6. Ask Codex to create the first red check.
7. Make the smallest change to turn it green.
8. Keep the demo page, pitch page and checks aligned.
9. Commit after green checks.
10. Start a fresh Codex thread when context gets crowded.

That is harness engineering at workshop scale.

## Plan Mode Connection

Plan mode is useful before code changes because it gives Codex permission to slow down, read the repo and reason about options.

Use Plan mode when:

- the team has not chosen the core journey
- the repo is unfamiliar
- the build path is unclear
- the team is choosing between stacks
- Codex needs to inspect files before editing
- a change could affect multiple parts of the prototype

Workshop prompt:

```text
Use Plan mode. Read this repo and do not edit yet.

Help us choose one Soweto community problem, one primary user, and one core demo journey. Then propose the smallest harness we need before writing code.
```

## Goal Mode Connection

Goal mode is useful when the work has a clear end state and the team needs Codex to keep pushing across multiple steps.

Use Goal mode when:

- the team has chosen the project
- the deadline is fixed
- the required outputs are known
- Codex should keep working until checks pass
- the team wants a persistent objective across tasks

Workshop goal:

```text
By 15:40 today, this team must have a working local prototype, a clear demo journey, a pitch/business case page, no real personal data, and green checks for one Soweto community problem.
```

## Side Chat Connection

Side chat is useful when the team needs explanation or status without interrupting the main build.

Use side chat to ask:

- What is Codex doing right now?
- Why did this test fail?
- What does this file do?
- Are we still on track for the pitch?
- What should we cut if time is running out?
- Explain this in plain English for the team.

Side chat helps students learn while the main task keeps moving.

## Red/Green Connection

The article's deeper lesson is that agents need feedback loops. Red/green testing is the simplest feedback loop for a one-day prototype.

Red means:

- the expected behavior is not present yet
- the check fails
- the team has a clear next target

Green means:

- the expected behavior exists
- the check passes
- the team can move to the next small milestone

For challenge teams, the check can be a test, a script, a smoke check or a written acceptance criterion.

## Practical Harness Checklist

Before building, each team should have:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/ACCEPTANCE_CRITERIA.md`
- `docs/DEMO_SCRIPT.md`
- `docs/TESTING.md`
- one command that checks the project
- one clear demo journey
- one clear pitch outcome

If those files exist and Codex can read them, the team has a basic harness.

## What To Avoid

Avoid using Codex like a vending machine for random features.

Common failure modes:

- asking for a full app before choosing a user
- building authentication before the demo needs it
- copying a big stack the laptop cannot run
- letting the agent choose the product strategy
- accepting code without running it
- keeping the whole day in one crowded context window
- using real personal data in a prototype
- adding features that do not improve the pitch

The harness should make these mistakes visible early.

## How To Explain This In The Masterclass

Use this simple framing:

```text
Codex is not just a code generator.
Codex is a build partner.
But every build partner needs a workshop, a brief, tools, checks and a definition of done.
That workshop is the harness.
```

Then show the team this chain:

```text
Problem -> User -> Journey -> Harness -> Plan -> Red Check -> Build -> Green Check -> Demo -> Pitch
```

## Source Takeaways

These are the workshop takeaways from Ryan Lopopolo's article:

- The winning skill is steering agent work, not typing every line yourself.
- Codex performs better when the repo explains itself.
- Agent work needs fast feedback from tests, logs and review.
- Good instructions are durable project infrastructure, not one-off prompts.
- The harness improves every time the agent gets stuck and the team captures the lesson.
- Humans remain responsible for direction, taste, judgment and consequences.

## Suggested Reading Prompt For Codex

Use this inside a team project:

```text
Read docs/OPENAI_HARNESS_ENGINEERING_ARTICLE.md and docs/HARNESS_ENGINEERING.md.

Explain the harness engineering idea in plain language for our team. Then inspect our current project and tell us the three smallest harness improvements that would help Codex build more reliably today.
```

## Attribution

This companion is based on the public OpenAI article:

- Title: "Harness engineering: leveraging Codex in an agent-first world"
- Author: Ryan Lopopolo, OpenAI
- URL: https://openai.com/index/harness-engineering/

Please link to the original article when teaching or sharing these ideas.
