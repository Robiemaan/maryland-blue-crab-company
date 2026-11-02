import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Request a wholesale supply conversation with Maryland Blue Crab Company.",
};

export default function InquiryPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-18">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        Lead capture
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-sea sm:text-5xl">
        Request a supply conversation
      </h1>
      <p className="mt-5 text-lg text-muted">
        Tell us who you are and roughly what volume you are evaluating. We will
        follow up with product availability, packing options, and commercial
        terms - not published as public list pricing on this site.
      </p>
      <div className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <InquiryForm />
      </div>
    </div>
  );
}
