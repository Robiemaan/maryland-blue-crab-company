import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,110,106,0.12),transparent_42%),linear-gradient(180deg,rgba(28,61,79,0.08),transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              For US wholesalers & distributors
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-[3.4rem]">
              Maryland Blue Crab Company
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Italian invasive blue crab from Mediterranean waters, processed with{" "}
              <a
                href="https://www.tagliapietrasrl.com/"
                className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                rel="noreferrer"
                target="_blank"
              >
                Tagliapietra
              </a>
              . Better quality. Cleaner waters. A more competitive landed cost than
              US blue crab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/inquiry/"
                className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                Request supply conversation
              </Link>
              <Link
                href="/product/"
                className="inline-flex items-center rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-sea transition-colors hover:border-accent hover:text-accent-deep"
              >
                View product overview
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-line bg-surface/90 p-6 shadow-[0_20px_50px_-30px_rgba(11,31,42,0.45)]">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Why this supply
            </p>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-sea">
              <li>
                <span className="font-semibold">Species story.</span> Invasive
                blue crab harvest from the Mediterranean, turned into reliable
                wholesale inventory for the US market.
              </li>
              <li>
                <span className="font-semibold">Processing partner.</span>{" "}
                Processed with Tagliapietra for consistent, commercial-ready
                product.
              </li>
              <li>
                <span className="font-semibold">Commercial wedge.</span> Better
                quality, cleaner waters, and cheaper than US blue crab for the
                right wholesale buyers.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl">
          Built for wholesale buyers
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          This site is the US-facing sales surface for seafood wholesalers and
          distributors - not consumer retail. Pricing, Incoterms, and compliance
          details are shared in conversation once volume and destination are
          clear.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Product",
              body: "Spec-oriented overview for buyers evaluating blue crab supply.",
              href: "/product/",
            },
            {
              title: "Inquiry",
              body: "Short lead form for volume, destination, and follow-up contact.",
              href: "/inquiry/",
            },
            {
              title: "Partner context",
              body: "Processing relationship with Tagliapietra in Italy.",
              href: "https://www.tagliapietrasrl.com/",
              external: true,
            },
          ].map((card) =>
            card.external ? (
              <a
                key={card.title}
                href={card.href}
                rel="noreferrer"
                target="_blank"
                className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <h3 className="font-semibold text-sea">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.body}</p>
              </a>
            ) : (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <h3 className="font-semibold text-sea">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.body}</p>
              </Link>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
