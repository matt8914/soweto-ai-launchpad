"use client";

import React from "react";
import { useState } from "react";

import type { RoleDemo } from "../lib/launchpad-content";

type RoleSwitcherProps = {
  roles: RoleDemo[];
};

export function RoleSwitcher({ roles }: RoleSwitcherProps) {
  const [activeRoleId, setActiveRoleId] = useState<RoleDemo["id"]>(roles[0]?.id ?? "graduate");
  const activeRole = roles.find((role) => role.id === activeRoleId) ?? roles[0];

  return (
    <section className="border-2 border-ink bg-white p-4 shadow-sharp sm:p-6" aria-label="Role switcher demo">
      <div className="mb-5 flex flex-wrap gap-2">
        {roles.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => setActiveRoleId(role.id)}
            className={`border-2 border-ink px-4 py-2 text-sm font-bold transition ${
              activeRole.id === role.id ? "bg-ink text-white" : "bg-paper text-ink hover:bg-gold"
            }`}
            aria-pressed={activeRole.id === role.id}
          >
            {role.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-clay">No login needed</p>
          <h2 className="font-display text-3xl font-black text-ink">{activeRole.heading}</h2>
          <p className="mt-3 text-base leading-7 text-neutral-700">{activeRole.summary}</p>
        </div>
        <ol className="grid gap-3">
          {activeRole.actions.map((action, index) => (
            <li key={action} className="flex items-start gap-3 rounded-sm bg-paper p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-meadow text-sm font-black text-white">
                {index + 1}
              </span>
              <span className="font-medium text-ink">{action}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
