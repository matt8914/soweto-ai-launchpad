import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/pitch", label: "Pitch" },
  { href: "/checklist", label: "Checklist" }
];

export function Header() {
  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-display text-2xl font-black text-ink">
          KasiCareer Connect
        </Link>
        <nav className="flex flex-wrap gap-2" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-ink bg-white px-3 py-2 text-sm font-bold text-ink hover:bg-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
