# Red/Green TDD

The workshop rule is simple: always use red/green test-driven development.

## Red

- Write a failing test.
- Or write a checklist item that is not true yet.
- Run the smallest check.
- Confirm it fails for the expected reason.

## Green

- Ask Codex to implement the smallest change.
- Do not add extra features while fixing the test.
- Run the same check.
- Then run `npm run check`.

## Example

```text
Story: As a mentor, I can leave one next step for a graduate.

Red: test expects mentor feedback to appear on /demo.
Green: add seeded feedback and render it in the demo flow.
```
