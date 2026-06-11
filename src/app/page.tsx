import Image from "next/image";
import Link from "next/link";

import { challengeTracks, homepage } from "../lib/launchpad-content";

export default function HomePage() {
  return (
    <main>
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <p className="mb-4 inline-block border-2 border-ink bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
              Boundless Soweto AI App Development Challenge 2026
            </p>
            <h1 className="font-display text-5xl font-black leading-[0.98] text-ink sm:text-7xl">
              {homepage.productName}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-800">{homepage.promise}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="border-2 border-ink bg-clay px-5 py-3 font-black text-white shadow-sharp">
                {homepage.primaryCta}
              </Link>
              <Link href="/pitch" className="border-2 border-ink bg-white px-5 py-3 font-black text-ink">
                {homepage.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="border-2 border-ink bg-white p-4 shadow-sharp">
            <Image
              src="/soweto-launchpad-hero.png"
              alt="Poster-style illustration of local app cards, people and connected prototype steps"
              width={1200}
              height={760}
              priority
              className="mb-5 aspect-[1200/760] w-full border-2 border-ink object-cover"
            />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-meadow">Today&apos;s proof</p>
            <dl className="mt-5 grid gap-4">
              {[
                ["50", "unemployed IT graduates"],
                ["10", "teams and prototypes"],
                ["1 day", "AI app challenge"],
                ["3 months", "post-event learning pathway"]
              ].map(([value, label]) => (
                <div key={label} className="border-b border-neutral-200 pb-3 last:border-0">
                  <dt className="font-display text-4xl font-black text-ink">{value}</dt>
                  <dd className="text-sm font-semibold text-neutral-700">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {homepage.sections.map((section) => (
            <article key={section.title} className="border-2 border-ink bg-white p-5">
              <h2 className="font-display text-3xl font-black text-ink">{section.title}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-ink bg-night text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="font-display text-4xl font-black">Challenge tracks this repo can support</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {challengeTracks.map((track) => (
              <p key={track} className="border border-white/30 bg-white/10 p-3 text-sm font-semibold">
                {track}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
