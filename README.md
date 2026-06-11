# Soweto AI Launchpad

A public starter repo for the Boundless Soweto AI App Development Challenge 2026.

The goal is not to start from a blank page. The goal is to clone a working baseline, use Codex with a clear harness, and customize it into a prototype that can be pitched by the end of the day.

Default sample product: **KasiCareer Connect**, a local youth employment and mentorship prototype for Soweto graduates.

## What Teams Build

- An epic marketing homepage that captures the vision.
- A working prototype with 2-3 user roles.
- One complete demo flow backed by local SQLite seed data.
- A pitch and simple business case.
- A final checklist judges can scan quickly.

## Quick Start

You need Node.js `>=22.5.0` because this starter uses the built-in `node:sqlite` module for local SQLite.

```bash
npm install
npm run db:reset
npm run dev
```

Open `http://localhost:3000`.

Before pitching:

```bash
npm run check
npm run build
npm run smoke
```

## Routes

- `/` - marketing site
- `/demo` - role-based prototype
- `/pitch` - pitch and business case
- `/checklist` - final judging checklist

## First Codex Prompt

```text
Read this repo, use Plan mode, do not edit yet. Help us choose one Soweto community problem, one specific user, and one core user journey we can demo by 15:40.
```

## Goal Mode Template

```text
By 15:40, this team must have a working prototype, marketing page, pitch page, business case, and green checks for one clear Soweto community problem. Use local SQLite, no real auth, no external services, and keep the demo judge-friendly.
```

## Recommended Workflow

1. Pick one challenge track and one painful user problem.
2. Write one user story.
3. Ask Codex for a plan before edits.
4. Create or update one failing test.
5. Make the smallest useful change.
6. Run checks until green.
7. Commit after each green milestone.
8. Prepare the pitch from `/pitch`.

## Optional Hallmark Design Skill

This repo vendors the third-party Hallmark design skill under `.agents/skills/hallmark` if available. Hallmark is MIT licensed and comes from [Nutlope/hallmark](https://github.com/Nutlope/hallmark).

Use it to improve the marketing site, but do not copy protected designs, logos, paid templates or exact trade dress.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local SQLite through Node `node:sqlite`
- Vitest acceptance tests

No Docker, no Supabase, no required API keys and no real authentication.

The optional `OPENAI_API_KEY` placeholder in `.env.example` is only for teams that later want to replace the local deterministic coach stub with a real AI feature. The challenge-day starter works without it.
