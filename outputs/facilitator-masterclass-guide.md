# Facilitator Masterclass Guide

Time: 10:05-10:40 on Friday, 12 June 2026  
Audience: 50 unemployed IT graduates in 10 teams at Boundless Soweto Campus

## Outcome

Participants leave the masterclass believing they can build a useful prototype today with Codex, and they know the first prompt to run.

## 35-Minute Flow

### 10:05-10:10 - Why This Matters

Message:

- You do not need permission to start building.
- The scarce skill is not typing code. It is choosing a real problem and steering the build.
- Today, each team creates visible proof: prototype, pitch, business case and impact pathway.

### 10:10-10:18 - Business First

Teach the one-sentence product:

```text
A [specific user] in Soweto struggles to [specific painful job], so our app helps them [specific result] by [simple mechanism].
```

Ask teams to avoid building for everyone.

### 10:18-10:26 - Harness Engineering

Explain:

- The app is what you build.
- The harness is how you prove it works.
- Codex gets better when the repo tells it what good looks like.

Show the harness:

- `AGENTS.md`
- `docs/PROMPT_LIBRARY.md`
- seeded SQLite data
- `npm run check`
- `/pitch`
- `/checklist`

### 10:26-10:34 - Codex Workflow

Teach four moves:

- Plan mode: think before edits.
- Goal mode: hold the outcome steady.
- Side chat: ask for status without derailing work.
- Red/green TDD: one failing test, one smallest fix, one green check.

### 10:34-10:40 - Start The Teams

Ask every team to run:

```bash
npm install
npm run db:reset
npm run dev
```

Then paste:

```text
Read this repo, use Plan mode, do not edit yet. Help us choose one Soweto community problem, one specific user, and one core user journey we can demo by 15:40.
```

Close with:

```text
Your job is not to ask AI to make something impressive. Your job is to steer Codex toward one useful thing that works.
```
