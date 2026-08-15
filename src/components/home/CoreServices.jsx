import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { servicesById } from "../../data/serviceIndex";
import { disciplinesById } from "../../data/disciplines";
import { servicePath } from "../../routes/routeConfig";
import { trackEvent } from "../../lib/analytics";

// Homepage Core Services — surfaces a small, selective set of Trident's
// commissionable services so a prospective client can see WHAT THEY CAN
// COMMISSION without opening the full /services directory. Distinct from
// "What we do" (which presents the six Expertise areas). Uses existing service
// data only; no invented copy. Bridge Response Officer leads the set as the
// commercially distinctive operational-support offering.

// Selected core services, in display order (BRO first). All are live pages.
const CORE_SERVICE_IDS = [
  "ms-bridge-response-officer",
  "ms-high-risk-area-transit-planning",
  "mi-vessel-affiliation-checks",
  "ms-voyage-vulnerability-assessment",
  "mc-gnss-interference-advisory",
  "ga-regional-risk-reports",
];

const coreServices = CORE_SERVICE_IDS.map((id) => {
  const service = servicesById[id];
  if (!service) return null;
  const discipline = disciplinesById[service.disciplineId];
  return {
    id,
    title: service.title,
    summary: service.summary,
    discipline: discipline?.name || "",
    path: servicePath(service),
  };
}).filter(Boolean);

export default function CoreServices() {
  return (
    <section id="core-services" className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="grid gap-6 border-b border-hairline pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
              How Trident supports clients
            </p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              Services you can commission.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              Selected core services — from pre-fixture vessel intelligence to
              onboard operational support through high-risk transits such as the
              Red Sea and the Strait of Hormuz. Each is delivered to a specific
              vessel, voyage or requirement.
            </p>
          </div>
        </div>

        {/* Core service cards — refined editorial panels, not the full catalogue */}
        <div className="mt-8 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              onClick={() =>
                trackEvent("cta_click", {
                  cta_name: service.title,
                  cta_location: "home_core_services",
                  content_type: "service",
                  service: service.id,
                })
              }
              className="group flex flex-col bg-canvas p-7 transition-colors hover:bg-canvas-raised"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {service.discipline}
              </span>
              <h3 className="mt-3 font-display text-xl font-normal leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">
                {service.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                View service
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Directory link — homepage is selective; /services is the full catalogue */}
        <div className="mt-8 flex justify-end">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent"
          >
            View all services
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
