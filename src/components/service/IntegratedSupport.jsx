import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../system/SectionHeader";
import { servicesById } from "../../data/serviceIndex";
import { disciplinesById } from "../../data/disciplines";
import { servicePath, isServiceRouteLive } from "../../routes/routeConfig";
import { emailHref } from "../../config/contact";

// "Integrated support" (editorial phase).
// Demonstrates — rather than claims — how this service fits into Trident's wider
// operational capability. The lead is the discipline's own operational-context
// positioning (approved data, not marketing); the capabilities shown are only the
// services genuinely related to this page (relatedServiceIds), preserving internal
// linking. Live targets link to their route; not-yet-built targets render in an
// accessible, non-navigating state. Renders nothing when nothing resolves.
const MAX_RELATED = 6;

function resolve(relatedServiceIds = []) {
  return relatedServiceIds
    .map((id) => servicesById[id])
    .filter(Boolean)
    .slice(0, MAX_RELATED)
    .map((service) => ({
      id: service.id,
      title: service.title,
      discipline: disciplinesById[service.disciplineId]?.name,
      path: servicePath(service),
      live: isServiceRouteLive(service),
    }));
}

function Card({ item }) {
  const inner = (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {item.discipline}
      </p>
      <h3 className="mt-2 font-display text-lg font-normal leading-snug text-ink">
        {item.title}
      </h3>
      <span
        className={`mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] transition-colors ${
          item.live
            ? "font-semibold text-ink group-hover:text-accent"
            : "font-medium text-ink-muted group-hover:text-accent"
        }`}
      >
        {item.live ? "View service" : "Enquire"}
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </span>
    </>
  );

  // Live targets link to their page; every other related service stays
  // engageable via a direct enquiry rather than a dead, "in development" state.
  if (item.live) {
    return (
      <Link
        to={item.path}
        className="group flex flex-col border border-hairline p-6 transition-colors hover:bg-canvas-raised"
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={emailHref}
      aria-label={`${item.title} — enquire`}
      className="group flex flex-col border border-hairline p-6 transition-colors hover:bg-canvas-raised"
    >
      {inner}
    </a>
  );
}

export default function IntegratedSupport({ service, discipline }) {
  const items = resolve(service.relatedServiceIds);
  if (items.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Integrated support" />

        {discipline?.positioning && (
          <p className="mt-8 max-w-3xl font-display text-xl font-light leading-snug tracking-tight text-ink">
            {discipline.positioning}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
