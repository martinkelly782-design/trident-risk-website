import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { isServiceRouteLive, servicePath } from "../../routes/routeConfig";
import { emailHref } from "../../config/contact";

// Discipline services — editorial capability wall (Discipline Direction Change).
//
// The services section is the visual centrepiece of every discipline page. It
// reuses the approved homepage "What We Do" language: substantial blocks, each a
// dark navy header band (restrained service index + accent keyline + title in
// white) over a light content area (approved summary + a single directional
// action). Square geometry, thin rules (a hairline grid formed by gap-px over an
// ink field), strong typography, restrained red accent. No lists, tables, small
// navigation rows or rounded SaaS cards.
//
// Actions: a live dedicated page shows VIEW SERVICE ↗ and links to it; a service
// without a live page shows ENQUIRE ↗ and opens a direct enquiry. There is no
// "in development" / "coming soon" / "unavailable" state — every service reads as
// commercially available. Legal & Evidence opts into restrained gold micro-detail
// via the `gold` prop.

function ServiceCard({ service, index, gold }) {
  const live = isServiceRouteLive(service);
  const accentText = gold ? "text-gold" : "text-accent";
  const accentBar = gold ? "bg-gold" : "bg-accent";

  const inner = (
    <>
      {/* Dark navy header band */}
      <div className="relative flex min-h-[168px] flex-col justify-between bg-image-dark p-6 lg:p-7">
        <div className="flex items-start justify-between">
          <span className="font-display text-sm font-light text-white/35 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Subtle line mark — restrained, not an icon set */}
          <span aria-hidden="true" className="mt-2 h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-9 group-hover:bg-white/40" />
        </div>
        <div>
          <div className={`h-px w-8 ${accentBar}`} />
          {/* Reserve ~two lines and bottom-align the title so the dark band
              height and the title baseline stay level across a row of cards
              (longer titles still grow cleanly rather than clip). */}
          <div className="mt-4 flex min-h-[2.9rem] flex-col justify-end">
            <h3 className="font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Light content area — summary at top, action pinned to the base so
          actions align across a row (grid stretches cards to equal height). */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-sm leading-[1.6] text-ink-soft">{service.summary}</p>
        <span
          className={`mt-auto inline-flex items-center gap-1.5 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentText}`}
        >
          {live ? "View service" : "Enquire"}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </span>
      </div>
    </>
  );

  // Hairline grid via per-card right/bottom borders (container supplies top/left).
  // Unlike a gap-px fill, a ragged final row ends cleanly against the section
  // background instead of leaving an empty grey tile where a card would be.
  const cardClass =
    "group flex flex-col border-b border-r border-ink/15 bg-canvas transition-colors hover:bg-canvas-raised";

  if (live) {
    return (
      <Link
        to={servicePath(service)}
        aria-label={`${service.title} — view service`}
        className={cardClass}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a href={emailHref} aria-label={`${service.title} — enquire`} className={cardClass}>
      {inner}
    </a>
  );
}

export default function DisciplineServiceWall({ discipline, services, gold = false, intro }) {
  const accentBar = gold ? "bg-gold" : "bg-accent";
  return (
    <section id="services" className="scroll-mt-20 bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Section header — eyebrow + capability lead, framed as a wall not a list */}
        <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
              <span aria-hidden="true" className={`h-3 w-[3px] ${accentBar}`} />
              Services
            </h2>
            <p className="mt-5 max-w-xl font-display text-[1.7rem] font-light leading-[1.14] tracking-tight text-ink sm:text-[2rem]">
              {discipline.name} capability.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            {intro && (
              <p className="max-w-xl text-[15px] leading-7 text-ink-soft">{intro}</p>
            )}
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
              {services.length} {discipline.name.toLowerCase()} services
            </p>
          </div>
        </div>

        {/* Capability wall — desktop 3, tablet 2, mobile 1; thin hairline rules
            drawn by the cards themselves so ragged last rows have no empty tile. */}
        <div className="mt-10 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} gold={gold} />
          ))}
        </div>
      </div>
    </section>
  );
}
