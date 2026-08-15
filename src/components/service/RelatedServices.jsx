import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../system/SectionHeader";
import { servicesById } from "../../data/serviceIndex";
import { disciplinesById } from "../../data/disciplines";
import { servicePath, isServiceRouteLive } from "../../routes/routeConfig";

// Related services (Phase 10). Resolves `relatedServiceIds` to real records —
// no invented relationships — showing service title and discipline. Live targets
// link to their route; targets not yet implemented (Phase 10A) render in an
// accessible, non-navigating state so navigation never breaks. Capped at a
// sensible number. Renders nothing when nothing resolves.
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
        className={`mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${
          item.live ? "text-ink group-hover:text-accent" : "text-ink-muted"
        }`}
      >
        {item.live ? "View service" : "In development"}
        {item.live && (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        )}
      </span>
    </>
  );

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
    <div
      aria-disabled="true"
      title="This service page is in development"
      className="flex cursor-not-allowed flex-col border border-hairline p-6"
    >
      {inner}
    </div>
  );
}

export default function RelatedServices({ service }) {
  const items = resolve(service.relatedServiceIds);
  if (items.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Related services" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
