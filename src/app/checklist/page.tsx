import { submissionChecklist } from "../../lib/launchpad-content";

export default function ChecklistPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <section className="border-2 border-ink bg-white p-6 shadow-sharp">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Submit by 15:40</p>
        <h1 className="font-display text-5xl font-black text-ink">Final judging checklist</h1>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Use this page before the final team pitches and demos. If every item is true, the team has a credible
          challenge-day prototype.
        </p>
      </section>

      <ol className="mt-8 grid gap-3">
        {submissionChecklist.map((item, index) => (
          <li key={item} className="flex gap-4 border-2 border-ink bg-paper p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-ink font-black text-white">
              {index + 1}
            </span>
            <span className="font-semibold text-ink">{item}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
