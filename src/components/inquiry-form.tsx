"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitted";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Lead capture backend / CRM wiring is out of scope for the scaffold.
    // Keep the UI honest: capture locally for now and show next-step copy.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        className="rounded-xl border border-accent/30 bg-foam/60 px-5 py-6 text-sea"
        role="status"
      >
        <p className="font-semibold">Inquiry received in this browser session.</p>
        <p className="mt-2 text-sm text-muted">
          Server-side lead capture is not wired yet. Sales will connect CRM /
          email routing next. If you need a live follow-up now, reply through
          your Maryland Blue Crab Company contact.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Contact name" name="name" required autoComplete="name" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <Field
        label="Destination market / region"
        name="destination"
        placeholder="e.g. Mid-Atlantic wholesale"
      />
      <Field
        label="Estimated monthly volume"
        name="volume"
        placeholder="Leave blank if unknown - do not invent numbers"
      />
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-sea">
          Notes for the sales conversation
        </span>
        <textarea
          name="notes"
          rows={4}
          className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-sea outline-none ring-accent/30 placeholder:text-muted/70 focus:ring-2"
          placeholder="Pack preferences, timing, or questions. No pricing assumed."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
      >
        Submit inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-sea">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-sea outline-none ring-accent/30 placeholder:text-muted/70 focus:ring-2"
      />
    </label>
  );
}
