import { ArrowUpRight } from "lucide-react";
import { approachContent } from "../../data/homeContent";
import { email, emailHref } from "../../config/contact";

const { eyebrow, heading, body, stages, cta, enquiries } = approachContent;
const whoWeWorkWith = enquiries.whoWeWorkWith || [];

// Section 6 — the final substantive section before the footer. A split band that
// answers two client questions: left (dark) states Trident's operating model as
// the proof of trust; right (light) is the conversion point.
export default function ApproachEnquiries({ onScrollTo }) {
  return (
    <section className="grid lg:grid-cols-2">
      {/* LEFT — Our Approach (dark): the Trident operating proposition */}
      <div className="bg-image-dark px-5 py-16 text-white lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.6rem]">
            {heading}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-white/70">{body}</p>

          {/* Three stages: understand → support → evidence */}
          <div className="mt-12 border-t border-white/15">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-white/15 py-7"
              >
                <span className="font-display text-lg font-light text-white/35 tabular-nums">
                  {stage.number}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-6 bg-accent" />
                    <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                      {stage.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onScrollTo?.(cta.target)}
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* RIGHT — Enquiries (light): deliberately simpler, conversion. Content is
          vertically centred so the audience list sits directly with the enquiry
          call to action — no dead vertical space between them. */}
      <div className="flex items-center bg-canvas px-5 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto flex w-full max-w-xl flex-col lg:mx-0 lg:mr-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {enquiries.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
            {enquiries.heading}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-ink-soft">
            {enquiries.body}
          </p>

          <a
            href={emailHref}
            className="mt-9 inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
          >
            {enquiries.ctaLabel}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>

          <div className="mt-6">
            <a
              href={emailHref}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {email}
            </a>
          </div>

          {/* Who we work with — the client base as a restrained editorial list
              (sectors served, not existing-client claims). Typography and a thin
              accent rule only; no boxes, cards or icons. */}
          <div className="mt-12 border-t border-hairline pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Who we work with
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {whoWeWorkWith.map((audience) => (
                <li
                  key={audience}
                  className="flex items-center gap-3 text-[15px] leading-7 text-ink-soft"
                >
                  <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent/60" />
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
