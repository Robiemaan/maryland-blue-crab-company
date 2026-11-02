import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Wholesale overview of Italian invasive blue crab from Mediterranean waters, processed with Tagliapietra.",
};

const facts = [
  {
    label: "Species / origin",
    value:
      "Italian invasive blue crab harvested from Mediterranean waters.",
  },
  {
    label: "Processing",
    value:
      "Processed with Tagliapietra for commercial wholesale packs. Pack formats and grades confirmed per order.",
  },
  {
    label: "Buyer fit",
    value:
      "US seafood wholesalers and distributors supplying restaurants and foodservice - not a consumer retail storefront.",
  },
  {
    label: "Commercial position",
    value:
      "Positioned as better quality, from cleaner waters, and cheaper than US blue crab for qualified wholesale volume.",
  },
  {
    label: "Pricing & terms",
    value:
      "Shared on inquiry. No public list price, Incoterms, or certification claims on this page until approved.",
  },
];

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-18">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        Product overview
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-sea sm:text-5xl">
        Blue crab for wholesale buyers
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        A US-facing summary of the supply we sell into American wholesale
        channels. Reference context for the broader Mediterranean blue crab
        opportunity:{" "}
        <a
          href="https://blueat.eu/?lang=en-US"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4"
          rel="noreferrer"
          target="_blank"
        >
          blueat.eu
        </a>
        .
      </p>

      <dl className="mt-12 divide-y divide-line border-y border-line bg-surface/70">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid gap-2 px-5 py-5 sm:grid-cols-[220px_1fr] sm:gap-8"
          >
            <dt className="text-sm font-semibold tracking-wide text-sea">
              {fact.label}
            </dt>
            <dd className="text-sm leading-relaxed text-muted">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap gap-3">
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
          Tagliapietra
        </a>
      </div>
    </div>
  );
}
