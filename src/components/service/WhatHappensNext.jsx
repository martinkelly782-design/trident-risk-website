import SectionHeader from "../system/SectionHeader";

// "What happens next?" (editorial phase).
// Explains the client journey after making an enquiry — not internal procedure.
// The steps mirror Trident's published engagement process (the request page), so
// the page answers "what happens next" without the client leaving it.
const STEPS = [
  ["Requirement review", "We confirm the requirement, urgency, geography and operational context."],
  ["Analyst allocation", "The relevant analyst or advisory lead is assigned."],
  ["Response and scope", "We respond with the proposed scope and anything required to proceed."],
];

export default function WhatHappensNext() {
  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="What happens next?" />

        <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {STEPS.map(([label, body], index) => (
            <li key={label} className="border-t border-hairline pt-5">
              <span className="font-display text-lg text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-ink">{label}</p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
