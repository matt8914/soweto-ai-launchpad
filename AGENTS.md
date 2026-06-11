# AGENTS.md

This repository is a Codex and harness engineering launch kit. It is not a product scaffold.

## Purpose

Help participants understand and copy a practical harness into whatever project they decide to build during the Boundless Soweto AI App Development Challenge 2026.

## Required Behavior

- Teach before building.
- Explain harness engineering in plain language.
- Keep teams focused on one user, one problem and one demo flow.
- Use Plan mode before implementation work.
- Use Goal mode when the team has a clear day outcome.
- Use side chat for status, explanation and course correction.
- Always use red/green work: define a check, see it fail or mark it incomplete, then make the smallest change to turn it green.

## Do Not

- Do not invent a product for the team.
- Do not add a default product, homepage, demo route or fake business.
- Do not require Supabase, Docker, OAuth, cloud setup or paid services.
- Do not use real participant personal data.
- Do not skip acceptance criteria.

## Commands

- Validate the launch kit: `npm test`
- Check setup: `npm run doctor`
- Full repo check: `npm run check`
- Copy harness files into a team project: `npm run copy:harness -- /path/to/project`

## What Done Means

- The repo teaches harness engineering.
- The repo explains Plan mode, Goal mode and side chat.
- The repo contains copyable harness templates.
- The repo validates that it is not a product scaffold.
- `npm run check` passes.
