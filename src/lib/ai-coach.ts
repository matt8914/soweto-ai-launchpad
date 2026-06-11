export function getLocalCoachResponse(prompt: string): string {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("pitch")) {
    return "Pitch check: say the user, the painful problem, the demo flow, who pays and the next pilot step.";
  }

  if (normalized.includes("test") || normalized.includes("red")) {
    return "Harness check: write one failing test or checklist item, make the smallest change, then run npm run check.";
  }

  if (normalized.includes("design") || normalized.includes("marketing")) {
    return "Design check: show the actual product promise early, use one strong visual direction and avoid generic AI gradient sections.";
  }

  return "Coach note: pick one specific Soweto user, one painful job to be done and one flow that proves the product can help today.";
}
