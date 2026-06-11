import { RoleSwitcher } from "../../components/RoleSwitcher";
import { getLocalCoachResponse } from "../../lib/ai-coach";
import { roles } from "../../lib/launchpad-content";
import { readLaunchpadData } from "../../lib/db";

export default function DemoPage() {
  const data = readLaunchpadData();
  const shortlisted = data.actions.find((action) => action.status === "shortlisted");
  const graduate = data.actors.find((actor) => actor.id === shortlisted?.actorId);
  const feedback = data.feedback.find((item) => item.toActorId === graduate?.id);

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-5 py-10">
      <section>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-clay">Working prototype</p>
        <h1 className="font-display text-5xl font-black text-ink">Role-based judging demo</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          This demo uses a role switcher instead of real authentication. Judges can inspect the graduate, mentor and
          employer views without passwords or setup.
        </p>
      </section>

      <RoleSwitcher roles={roles} />

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="border-2 border-ink bg-white p-5">
          <h2 className="font-display text-2xl font-black">Seeded people</h2>
          <p className="mt-2 text-4xl font-black text-meadow">{data.actors.length}</p>
          <p className="mt-2 text-sm text-neutral-700">Graduates, a mentor and an employer loaded from SQLite.</p>
        </article>
        <article className="border-2 border-ink bg-white p-5">
          <h2 className="font-display text-2xl font-black">Opportunities</h2>
          <p className="mt-2 text-4xl font-black text-clay">{data.opportunities.length}</p>
          <p className="mt-2 text-sm text-neutral-700">Local opportunities across challenge tracks.</p>
        </article>
        <article className="border-2 border-ink bg-white p-5">
          <h2 className="font-display text-2xl font-black">AI coach stub</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-700">{getLocalCoachResponse("test the pitch")}</p>
        </article>
      </section>

      <section className="border-2 border-ink bg-paper p-5">
        <h2 className="font-display text-3xl font-black">Complete sample flow</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <p className="bg-white p-4">
            <strong>{graduate?.name}</strong> applies for the junior admin internship.
          </p>
          <p className="bg-white p-4">Mentor note: {feedback?.message}</p>
          <p className="bg-white p-4">Next step: {feedback?.nextStep}</p>
        </div>
      </section>
    </main>
  );
}
