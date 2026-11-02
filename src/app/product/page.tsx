import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product & origin",
  description:
    "Wholesale product and origin brief for Italian invasive blue crab from Mediterranean waters, processed with Tagliapietra.",
};

const specs = [
  {
    label: "Species",
    value:
      "Atlantic blue crab (Callinectes sapidus) - the same species valued in US blue crab fisheries, harvested in Mediterranean waters where it is treated as an invasive alien species.",
    note: "Species identity is widely documented for Mediterranean / Adriatic invasive blue crab fisheries.",
  },
  {
    label: "Origin",
    value:
      "Mediterranean waters, with published Blueat harvest framing centered on the Adriatic and Ionian (FAO Area 37.2).",
    note: "Source: Blueat / Mariscadoras public project materials.",
  },
  {
    label: "Form factors (reference)",
    value:
      "Published Blueat catalog forms include machine-picked crab meat, hand-picked crab meat, and claw meat. Temperature states: pasteurized chilled (0 / +4 °C) or frozen (−18 °C).",
    note: "Reference catalog only. Maryland Blue Crab Company confirmed SKUs / grades are TBD pending inquiry.",
  },
  {
    label: "Pack sizes (reference)",
    value:
      "Blueat publishes packs such as 100 g / 500 g / 1 kg (hand-picked meat) and 500 g / 1 kg / 5 kg (machine-picked meat and claw meat).",
    note: "Cited from blueat.eu product pages. Our offered packs confirmed per order.",
  },
  {
    label: "Processing",
    value:
      "Commercial processing relationship with Tagliapietra & Figli Srl (Marcon / Venice area), an established Italian seafood processor serving wholesale and foodservice buyers.",
    note: "Partner site: tagliapietrasrl.com. No certifications claimed here beyond what that site states.",
  },
  {
    label: "Buyer fit",
    value:
      "US seafood wholesalers and distributors supplying restaurants and foodservice. This page is a B2B brief, not a consumer retail storefront.",
    note: null,
  },
  {
    label: "Pricing & terms",
    value:
      "Shared on inquiry once volume, destination, and pack preference are clear. No public list price, Incoterms, or compliance claims on this page.",
    note: "Do not invent commercial terms from this brief.",
  },
];

const comparisonPoints = [
  {
    title: "Quality",
    body: "Same species buyers already know how to sell - presented as a Mediterranean-sourced, processor-backed alternative for wholesale programs that need consistent commercial packs.",
  },
  {
    title: "Cleaner waters",
    body: "Positioned around Mediterranean harvest waters versus strained US blue crab supply contexts. Specific water-quality metrics are not published here until approved.",
  },
  {
    title: "Price",
    body: "Framed as a more competitive landed-cost option than US blue crab for qualified wholesale volume. Exact $/lb or Incoterms are quote-only.",
  },
];

const openQuestions = [
  "Confirmed Maryland Blue Crab Company SKU list, grades, and pack sizes (vs Blueat public catalog).",
  "Any certifications, lab results, or import/compliance language approved for the US site.",
  "Preferred Incoterms and whether any indicative price bands may be shared under NDA.",
  "Exact public wording for the Tagliapietra relationship (processor of record / co-packer / preferred partner).",
];

const sources = [
  {
    label: "Blueat - sustainable alien-species fishery project",
    href: "https://blueat.eu/?lang=en-US",
  },
  {
    label: "Blueat products index",
    href: "https://blueat.eu/prodotti",
  },
  {
    label: "Blueat - machine-picked crab meat packs",
    href: "https://blueat.eu/prodotti/polpa-di-granchio-a-macchina",
  },
  {
    label: "Blueat - hand-picked crab meat packs",
    href: "https://www.blueat.eu/prodotti/polpa-di-granchio-a-mano",
  },
  {
    label: "Tagliapietra & Figli Srl",
    href: "https://www.tagliapietrasrl.com/",
  },
];

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-18">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        Product & origin
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-sea sm:text-5xl">
        Italian invasive blue crab for US wholesale
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
        A forwardable brief for seafood wholesalers and distributors: what the
        crab is, where it comes from, who processes it, and how we position it
        against US blue crab supply - without inventing pricing, certifications,
        or compliance claims.
      </p>

      <section className="mt-12" aria-labelledby="specs-heading">
        <h2
          id="specs-heading"
          className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl"
        >
          Product specs
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Specs below mix company-approved positioning with publicly published
          Mediterranean blue crab product forms. Reference catalog packs are
          sourced from{" "}
          <a
            href="https://blueat.eu/prodotti"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            blueat.eu
          </a>{" "}
          and marked as reference until our confirmed SKUs are locked.
        </p>
        <dl className="mt-8 divide-y divide-line border-y border-line bg-surface/70">
          {specs.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-2 px-5 py-5 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <dt className="text-sm font-semibold tracking-wide text-sea">
                {fact.label}
              </dt>
              <dd className="space-y-2">
                <p className="text-sm leading-relaxed text-muted">{fact.value}</p>
                {fact.note ? (
                  <p className="text-xs leading-relaxed text-muted/80">
                    Note: {fact.note}
                  </p>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14" aria-labelledby="origin-heading">
        <h2
          id="origin-heading"
          className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl"
        >
          Origin story
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
          <p>
            Atlantic blue crab arrived in the Mediterranean as an invasive alien
            species and has become a serious pressure on coastal fisheries and
            shellfish farming - especially in Adriatic and Ionian waters.
          </p>
          <p>
            Projects such as{" "}
            <a
              href="https://blueat.eu/?lang=en-US"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              Blueat
            </a>{" "}
            treat that biological pressure as a harvestable resource: buy blue
            crab from local fishermen, process it into food products, and move it
            into markets that already understand the species - including North
            America.
          </p>
          <p>
            Maryland Blue Crab Company sells that Mediterranean invasive blue
            crab story into US wholesale channels: same species American buyers
            recognize, sourced from Italian / Mediterranean waters and processed
            for commercial packs.
          </p>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="processor-heading">
        <h2
          id="processor-heading"
          className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl"
        >
          Processor credibility
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
          <p>
            Processing is handled with{" "}
            <a
              href="https://www.tagliapietrasrl.com/"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              Tagliapietra & Figli Srl
            </a>
            , a Venetian-area seafood company that serves wholesalers, retailers,
            and foodservice with traditional and ready-to-cook seafood products.
          </p>
          <p>
            Public reporting on the Blueat supply chain also identifies
            Tagliapietra as the Italian processor converting blue crab into pulp
            and commercial packs for domestic and export channels. We cite that
            only as processor-context credibility - not as a certification claim.
          </p>
          <p className="rounded-lg border border-line bg-foam/50 px-4 py-3 text-sm text-sea">
            No ISO / BRC / FDA / HACCP badges are shown on this page unless and
            until Chief of Staff supplies approved proof language. Ask on inquiry
            for current documentation.
          </p>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="compare-heading">
        <h2
          id="compare-heading"
          className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl"
        >
          Versus US blue crab
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Approved commercial framing for wholesale conversations. Numbers stay
          off the page until Sales has a real quote.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {comparisonPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <h3 className="font-semibold text-sea">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="sources-heading">
        <h2
          id="sources-heading"
          className="font-[family-name:var(--font-display)] text-2xl text-sea sm:text-3xl"
        >
          Sources
        </h2>
        <ul className="mt-5 space-y-2 text-sm text-muted">
          {sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                className="font-medium text-accent underline decoration-accent/30 underline-offset-4"
                rel="noreferrer"
                target="_blank"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-14 rounded-2xl border border-line bg-surface p-6 sm:p-8"
        aria-labelledby="tbd-heading"
      >
        <h2
          id="tbd-heading"
          className="font-[family-name:var(--font-display)] text-xl text-sea"
        >
          Open facts for Chief of Staff
        </h2>
        <p className="mt-2 text-sm text-muted">
          Marked TBD so Sales does not overclaim. Please confirm or replace:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
          {openQuestions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-sea">
          Ready to evaluate supply?
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Share your company, destination, and approximate volume. We will follow
          up with availability, packing options, and commercial terms.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/inquiry/"
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            Start an inquiry
          </Link>
          <a
            href="https://www.tagliapietrasrl.com/"
            className="inline-flex items-center rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-sea hover:border-accent"
            rel="noreferrer"
            target="_blank"
          >
            Tagliapietra site
          </a>
        </div>
      </section>
    </div>
  );
}
