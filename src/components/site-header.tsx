import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/product/", label: "Product & origin" },
  { href: "/inquiry/", label: "Inquiry" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line/80 bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group min-w-0">
          <p className="font-[family-name:var(--font-display)] text-lg leading-tight tracking-tight text-sea sm:text-xl">
            Maryland Blue Crab Company
          </p>
          <p className="text-xs tracking-[0.14em] text-muted uppercase">
            US wholesale supply
          </p>
        </Link>
        <nav aria-label="Primary" className="flex shrink-0 items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-sea transition-colors hover:bg-foam hover:text-accent-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
