# Red/Green TDD

Red/green test-driven development means the team defines the check before asking Codex to make the change.

## Red

- Write a failing automated test, or
- Write a manual acceptance criterion that is not true yet.

Then confirm the current state is red or incomplete.

## Green

- Ask Codex for the smallest useful change.
- Run the check again.
- Stop when the check is green.

## Challenge Example

```text
Story: As a community member, I can complete the one core journey the team will demo to judges.

Red: the acceptance criterion says the journey must work, but the current project does not support it yet.
Green: Codex implements only enough for that journey to work, and the team can demonstrate it in under five minutes.
```
