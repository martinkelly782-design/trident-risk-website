import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../system/SectionHeader";
import { servicesById } from "../../data/serviceIndex";
import { servicePath, isServiceRouteLive } from "../../routes/routeConfig";

// Service index (Phase 9).
// An editorial list with thin dividers and strong hierarchy — deliberately not
// repetitive SaaS cards. Services render in the deterministic order supplied by
// the discipline. Publication status is never surfaced publicly.
//
// Service links are route-ready but not yet live (Phase 10 owns service pages):
// `isServiceRouteLive()` returns false, so each row shows an accessible,
// non-navigating "Service page in development" state instead of routing anywhere.

function resolveRelated(relatedServiceIds = []) {
  return relatedServiceIds
    .map((id) => servicesById[id])
    .filter(Boolean)
    .slice(0, 2)
    .map((service) => service.shortTitle || service.title);
}

function ServiceRow({ service, index }) {
  const live = isServiceRouteLive(service);
  const href = servicePath(service);
  const related = resolveRelated(service.relatedServiceIds);
  const scopeNotes = Array.isArray(service.limits) ? service.limits : [];

  return (
    <li className="grid grid-cols-1 gap-4 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
      {/* Index */}
      <span
        aria-hidden="true"
        className="text-sm font-medium tabular-nums text-ink-muted sm:pt-1"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="font-display text-xl font-normal leading-snug text-ink">
          {live ? (
            <Link to={href} className="transition-colors hover:text-accent">
              {service.title}
            </Link>
          ) : (
            service.title
          )}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
          {service.summary}
        </p>

        {scopeNotes.length > 0 && (
          <p className="mt-3 max-w-2xl text-[11px] leading-5 text-ink-muted">
            <span className="font-semibold uppercase tracking-[0.16em]">
              Scope
            </span>
            <span className="mx-2 text-hairline">|</span>
            {scopeNotes.join(" · ")}
          </p>
        )}

        {related.length > 0 && (
          <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            Related: {related.join(" · ")}
          </p>
        )}
      </div>

      {/* Route-ready but unavailable state */}
      <div className="sm:pt-1 sm:text-right">
        {live ? (
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
          >
            View service
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        ) : (
          <span
            role="note"
            aria-disabled="true"
            title="This service page is in development"
            className="inline-flex cursor-not-allowed items-center border border-hairline px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted"
          >
            Service page in development
          </span>
        )}
      </div>
    </li>
  );
}

export default function ServiceListGrid({ discipline, services = [] }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader
          title="Services"
          supporting={`${services.length} services within ${discipline.name}.`}
        />

        <ol className="mt-4 divide-y divide-hairline border-b border-hairline">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
