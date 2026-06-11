# AGENTS.md

This repo is a one-day starter kit for the Boundless Soweto AI App Development Challenge 2026.

## Mission

Help a team build a working prototype, marketing page, pitch page, business case and impact pathway by 15:40.

Humans steer. Codex executes. Keep the repo legible, testable and demo-ready.

## Commands

- Install: `npm install`
- Reset local SQLite seed: `npm run db:reset`
- Start app: `npm run dev`
- Test: `npm test`
- Full check: `npm run check`
- Build: `npm run build`
- Smoke check: `npm run smoke`
- Setup help: `npm run doctor`

## Red/Green TDD Rule

Always use red/green test-driven development:

1. State the user story.
2. Add or update one failing test or checklist item.
3. Run the smallest relevant check and confirm it is red.
4. Implement the smallest useful change.
5. Run `npm run check` or the narrowest relevant check until green.

## Scope

- Use Next.js, TypeScript, Tailwind and local SQLite.
- Do not require Docker, Supabase, OAuth, payments or external API keys.
- Use the role switcher for demos instead of real auth.
- Use only fictional demo data. Do not add real participant personal information.
- Keep app flows simple enough to explain in a five-minute pitch.

## Where To Look

- `README.md` for participant setup.
- `docs/HARNESS_ENGINEERING.md` for the workshop mindset.
- `docs/PROMPT_LIBRARY.md` for copy-paste Codex prompts.
- `docs/JUDGING_RUBRIC.md` for what judges need to see.
- `docs/PROJECT_BRIEF.md` for how to choose the team idea.
- `.agents/skills/challenge-coach/SKILL.md` for the repo-specific coaching skill.

## Done Means

- Homepage explains the product and target user.
- `/demo` shows 2-3 roles and one working journey.
- `/pitch` has problem, target user, solution, business model and impact pathway.
- `/checklist` is complete.
- `npm run check`, `npm run build` and `npm run smoke` pass.
