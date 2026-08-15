import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../system/Breadcrumbs";
import SectionHeader from "../system/SectionHeader";
import DisciplineHero from "../discipline/DisciplineHero";
import DisciplineOverview from "../discipline/DisciplineOverview";
import ServiceListGrid from "../discipline/ServiceListGrid";
import RelatedAnalysis from "../discipline/RelatedAnalysis";
import DisciplineCta from "../discipline/DisciplineCta";

// Reusable, data-driven discipline page template (Phase 9).
// Composes the eight approved sections. Sections 5 (client lifecycle) and 7
// (related disciplines) are implemented inline here; every other section is a
// dedicated component or a reused shared primitive.

// Canonical Trident arc stages. Labels are fixed; bodies are authored in the
// approved voice and grounded in each discipline's `positioning` and its
// services' `operationalApplication`. Only credible stages are listed per
// discipline — stages are not forced where they do not apply.
const STAGE_LABELS = {
  preFixture: "Pre-fixture & pre-engagement",
  operational: "Operational decision support",
  incident: "Incident response & escalation",
  evidence: "Evidence, claims & disputes",
};

const LIFECYCLE = {
  "maritime-intelligence": [
    {
      key: "preFixture",
      body: "Vessel affiliation, sanctions exposure and behavioural intelligence established before fixture, financing, insurance placement or entry into a high risk area.",
    },
    {
      key: "operational",
      body: "Point-in-time threat assessments that inform routing, transit and go or no-go decisions.",
    },
  ],
  "maritime-security": [
    {
      key: "preFixture",
      body: "Port and voyage vulnerability assessment before calling at an exposed port or committing to a transit.",
    },
    {
      key: "operational",
      body: "High risk area transit planning and onboard advisory that set routing, watchkeeping and escalation before and during a passage.",
    },
    {
      key: "incident",
      body: "Crisis response and incident management support during boardings, detention, port closure or rapid regional escalation.",
    },
  ],
  "maritime-cyber": [
    {
      key: "preFixture",
      body: "Vessel OT and cyber risk assessments that establish exposure across vessels, fleets and connected operations.",
    },
    {
      key: "operational",
      body: "GNSS interference and resilient tracking advisory for vessels operating in, or planning transits through, affected areas.",
    },
    {
      key: "incident",
      body: "Cyber incident response during suspected or confirmed compromise of vessel or shore systems.",
    },
  ],
  "geopolitical-analysis": [
    {
      key: "preFixture",
      body: "Forward-looking scenarios and sanctions forecasting to prepare for change before it constrains operations.",
    },
    {
      key: "operational",
      body: "Regional risk reporting and conflict impact assessment that inform routing and commercial decisions in a region.",
    },
  ],
  "market-entry": [
    {
      key: "preFixture",
      body: "Country, regulatory, partner and infrastructure risk assessed before entry, investment or mobilisation.",
    },
    {
      key: "operational",
      body: "Security framework design for new offices, sites, port operations and project teams as operations stand up.",
    },
  ],
  "legal-evidence": [
    {
      key: "operational",
      body: "War risk and real danger assessments informing operational decisions and coverage questions.",
    },
    {
      key: "evidence",
      body: "Expert witness opinion, standard of care analysis and evidential support for court and arbitration proceedings.",
    },
  ],
};

const LG_COLS = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

function ClientLifecycle({ discipline }) {
  const stages = LIFECYCLE[discipline.id] || [];
  if (stages.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader
          title="Across the client lifecycle"
          supporting="How Trident applies this discipline along the wider arc."
        />

        <div
          className={`mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            LG_COLS[Math.min(stages.length, 4)]
          }`}
        >
          {stages.map((stage, index) => (
            <div key={stage.key} className="flex flex-col border border-hairline p-6">
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
                Stage {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-display text-lg font-normal leading-snug text-ink">
                {STAGE_LABELS[stage.key]}
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink-soft">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedDisciplines({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader
          title="Related disciplines"
          supporting="Adjacent capabilities that connect to this discipline."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group flex flex-col border border-hairline p-6 transition-colors hover:bg-canvas-raised"
            >
              <h3 className="font-display text-xl font-normal leading-snug text-ink">
                {item.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">
                {item.homepageSummary}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                Explore
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DisciplinePage({
  discipline,
  services,
  meta,
  breadcrumbs,
  relatedDisciplines,
  onRequest,
}) {
  return (
    <main className="bg-canvas text-ink">
      {/* 1. Breadcrumbs */}
      <div className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 2. Hero */}
      <DisciplineHero discipline={discipline} meta={meta} />

      {/* 3. Overview & positioning */}
      <DisciplineOverview discipline={discipline} />

      {/* 4. Service index */}
      <ServiceListGrid discipline={discipline} services={services} />

      {/* 5. Client lifecycle */}
      <ClientLifecycle discipline={discipline} />

      {/* 6. Related analysis (renders only where genuine analysis exists) */}
      <RelatedAnalysis discipline={discipline} />

      {/* 7. Related disciplines / adjacent capabilities */}
      <RelatedDisciplines items={relatedDisciplines} />

      {/* 8. Discipline CTA */}
      <DisciplineCta discipline={discipline} onRequest={onRequest} />
    </main>
  );
}
