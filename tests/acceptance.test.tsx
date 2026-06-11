import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { RoleSwitcher } from "../src/components/RoleSwitcher";
import { readLaunchpadData, resetDatabase } from "../src/lib/db";
import { homepage, roles } from "../src/lib/launchpad-content";

describe("Soweto AI Launchpad acceptance harness", () => {
  it("describes a strong marketing homepage for KasiCareer Connect", () => {
    expect(homepage.productName).toBe("KasiCareer Connect");
    expect(homepage.promise).toContain("Soweto graduates");
    expect(homepage.primaryCta).toBe("View the demo");
    expect(homepage.sections.map((section) => section.title)).toEqual([
      "Problem",
      "Solution",
      "How it works",
      "Impact",
      "Business case"
    ]);
  });

  it("seeds realistic local SQLite data for the demo", () => {
    const dbPath = resetDatabase(":memory:");
    const data = readLaunchpadData(dbPath);

    expect(data.actors).toHaveLength(7);
    expect(data.opportunities).toHaveLength(4);
    expect(data.actions.some((action) => action.status === "shortlisted")).toBe(true);
    expect(data.pitchFacts.find((fact) => fact.label === "Target user")?.value).toContain(
      "unemployed graduates"
    );
  });

  it("switches between all judging demo roles without authentication", async () => {
    const user = userEvent.setup();
    render(<RoleSwitcher roles={roles} />);

    expect(screen.getByRole("heading", { name: "Graduate view" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Mentor" }));
    expect(screen.getByRole("heading", { name: "Mentor view" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Employer" }));
    expect(screen.getByRole("heading", { name: "Employer view" })).toBeInTheDocument();
  });

  it("proves one complete demo flow from opportunity to mentor feedback", () => {
    const dbPath = resetDatabase(":memory:");
    const data = readLaunchpadData(dbPath);
    const application = data.actions.find((action) => action.type === "application");
    const feedback = data.feedback.find((item) => item.toActorId === application?.actorId);

    expect(application?.note).toContain("junior admin internship");
    expect(application?.status).toBe("shortlisted");
    expect(feedback?.nextStep).toContain("interview practice");
  });
});
