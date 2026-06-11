import { readLaunchpadData } from "../../lib/db";

export default function PitchPage() {
  const data = readLaunchpadData();

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <section className="border-2 border-ink bg-white p-6 shadow-sharp">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-meadow">Five-minute team pitch</p>
        <h1 className="font-display text-5xl font-black text-ink">KasiCareer Connect business case</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          Replace this page with your team&apos;s problem, target user, demo flow, business model and impact pathway.
          Keep it clear enough for judges to scan in under one minute.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {data.pitchFacts.map((fact) => (
          <article key={fact.id} className="border-2 border-ink bg-paper p-5">
            <h2 className="font-display text-3xl font-black text-ink">{fact.label}</h2>
            <p className="mt-3 leading-7 text-neutral-700">{fact.value}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
