import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { services } from "../data/serviceIndex";
import { disciplines, disciplinesById } from "../data/disciplines";
import { isServiceRouteLive, servicePath } from "../routes/routeConfig";
import { emailHref } from "../config/contact";
import TransitSupportSignpost from "../components/service/TransitSupportSignpost";

// Services index (/services) — the ONE place the full catalogue belongs. All 49
// canonical services, filterable by expertise area. Reuses the approved
// capability-card system (dark header band + light body, hairline grid, no
// rounded corners). A card links to its dedicated page when live, otherwise to a
// direct enquiry — never "in development". The `?area=<slug>` query pre-selects a
// filter (used by the Expertise-page signposts).

function ServiceCard({ service }) {
  const live = isServiceRouteLive(service);
  const discipline = disciplinesById[service.disciplineId];
  const gold = service.disciplineId === "legal-evidence";
  const accentText = gold ? "text-gold" : "text-accent";
  const accentBar = gold ? "bg-gold" : "bg-accent";

  const inner = (
    <>
      <div className="relative flex min-h-[150px] flex-col justify-between bg-image-dark p-6 lg:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
          {discipline?.name}
        </p>
        <div>
          <div className={`h-px w-8 ${accentBar}`} />
          <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-sm leading-[1.6] text-ink-soft">{service.summary}</p>
        <span className={`mt-auto inline-flex items-center gap-1.5 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentText}`}>
          {live ? "View service" : "Enquire"}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
        </span>
      </div>
    </>
  );
  const cardClass = "group flex flex-col border-b border-r border-ink/15 bg-canvas transition-colors hover:bg-canvas-raised";
  return live ? (
    <Link to={servicePath(service)} aria-label={`${service.title} — view service`} className={cardClass}>{inner}</Link>
  ) : (
    <a href={emailHref} aria-label={`${service.title} — enquire`} className={cardClass}>{inner}</a>
  );
}

export default function ServicesIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("area");
  const validInitial = disciplines.some((d) => d.slug === initial) ? initial : "all";
  const [area, setArea] = useState(validInitial);

  function selectArea(next) {
    setArea(next);
    if (next === "all") setSearchParams({}, { replace: true });
    else setSearchParams({ area: next }, { replace: true });
  }

  const filtered = area === "all" ? services : services.filter((s) => disciplinesById[s.disciplineId]?.slug === area);
  const filters = [{ slug: "all", name: "All" }, ...disciplines.map((d) => ({ slug: d.slug, name: d.name }))];

  return (
    <main className="bg-canvas text-ink">
      {/* Dark hero band */}
      <section className="relative overflow-hidden bg-image-dark text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-white" aria-current="page">Services</span>
              </li>
            </ol>
          </nav>
          {/* Reduced-height hero — high intent, so the catalogue/filters sit
              near the top of the first screen. */}
          <div className="py-9 lg:py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Services</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.6rem]">
              Commissionable maritime intelligence, security and advisory support.
            </h1>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]">
                Speak to an analyst
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <p className="max-w-md text-[13px] leading-6 text-white/55">
                The full catalogue — browse by area of expertise below, or ask us to scope the right support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-20 border-b border-ink/15 bg-canvas-raised/95 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <div className="flex gap-x-6 gap-y-2 overflow-x-auto py-4">
            {filters.map((f) => {
              const active = area === f.slug;
              return (
                <button
                  key={f.slug}
                  type="button"
                  onClick={() => selectArea(f.slug)}
                  className={`whitespace-nowrap border-b-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    active ? "border-accent text-ink" : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  {f.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-canvas-raised">
        <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-16">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            {filtered.length} {filtered.length === 1 ? "service" : "services"}
          </p>
          <div className="grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Red Sea / Strait of Hormuz transit-support proposition. */}
      <TransitSupportSignpost />
    </main>
  );
}
