import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  ServiceMasthead,
  Principle,
  TwoColStatement,
  Chain,
  Deliverables,
  RelatedServices,
  EnquiryBand,
} from "../serviceKit";
import { insightsById } from "../../../data/insights";
import { reportFor } from "../../../data/intelligence";
import DownloadReport from "../../system/DownloadReport";

// Regional Risk Reports — the strongest commercial page because the buyer can
// see Trident's actual published work. The insight leads; the published reports
// are shown as EXAMPLES OF PUBLISHED ANALYSIS (openly published, NOT client case
// studies and not commissioned by clients). Grounded in the canonical record
// (insight, introduction, clientProblem, deliverable).

const FLOW = [
  { label: "Political & security context", line: "A structured read of the political, security and conflict picture in a defined area." },
  { label: "Maritime consequence", line: "How those developments affect shipping, ports, chokepoints and the operating environment." },
  { label: "Operational exposure", line: "What that means for routing, port calls, crew and the vessels or operations concerned." },
  { label: "Commercial relevance", line: "The bearing on contracts, insurance and the decision in front of the reader." },
];

const RECEIVE = [
  { title: "Regional political & security read", body: "One structured view of a defined area, not a news summary." },
  { title: "Maritime & operational consequence", body: "The operational consequences that follow from the regional picture." },
  { title: "Relevance to the vessel, voyage or contract", body: "The picture attached to the specific decision it is meant to inform." },
  { title: "Practical implications", body: "Clear implications for routing, port calls, crew and contractual exposure." },
];

const EXAMPLES = [
  "red-sea-maritime-threat-assessment",
  "voluntary-reporting-area-overview",
  "merchant-shipping-russian-black-sea-region",
  "wildfire-risk-european-cruise-operations",
];

function PublishedAnalysis() {
  const items = EXAMPLES.map((slug) => insightsById[slug]).filter(Boolean);
  if (items.length === 0) return null;
  return (
    <section id="published-analysis" className="scroll-mt-20 bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
              <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
              Examples of published analysis
            </h2>
            <p className="mt-5 max-w-xl font-display text-[1.7rem] font-light leading-[1.14] tracking-tight text-ink sm:text-[2rem]">
              See the standard of the work.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              These reports are published openly by Trident. They are examples of the analytical standard — not client case studies, and not commissioned by clients.
            </p>
          </div>
        </div>

        <div className="mt-4">
          {items.map((it) => {
            const report = reportFor(it.report);
            return (
              <div key={it.slug} className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-ink/15 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{it.category} <span className="text-ink-muted">· {it.dateLabel}</span></p>
                  <Link to={it.path} className="group mt-2 inline-block">
                    <h3 className="font-display text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent sm:text-2xl">{it.displayTitle || it.title}</h3>
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{it.standfirst}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link to={it.path} className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </Link>
                  {report && <DownloadReport report={report} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function RegionalRiskReportsPage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-regional-risk-reports.webp"
        imageAlt="Merchant vessels at anchor in a strategic maritime waterway at sunset"
        objectPosition="50% 45%"
        eyebrow="Geopolitical Analysis / Regional Risk Reports"
        heading="Regional analysis written to inform a specific decision — not to summarise the news."
        standfirst="A structured read of the political, security and conflict picture in a defined area, connected to the operational and commercial consequences that follow — for routing, port calls, crew and contractual exposure."
        primaryLabel="Discuss a regional assessment"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="See published analysis"
        onSecondary={() => scrollTo("published-analysis")}
      />

      <Principle
        statement="Regional risk means little until it is attached to a specific vessel, voyage or contract."
        body="A regional risk report exists to make that attachment — to connect the regional picture to the decision in front of the reader."
      />

      <TwoColStatement
        eyebrow="What makes it useful"
        heading="News is abundant. Relevance is not."
        raised
        paragraphs={[
          "Decision makers need a structured regional view that connects political and security developments to operational consequences.",
          "A regional risk report gives one structured read of a defined area, and connects it to routing, port calls, crew and contractual exposure.",
          "It is written to inform a specific decision, not to summarise the news.",
        ]}
      />

      <Chain
        eyebrow="From context to consequence"
        heading="Context, consequence, exposure, relevance."
        steps={FLOW}
        tone="dark"
      />

      <Deliverables
        eyebrow="What you receive"
        heading="A structured regional risk report."
        intro="Scope and the region are defined for each engagement."
        items={RECEIVE}
      />

      <PublishedAnalysis />

      <RelatedServices ids={service.relatedServiceIds} />

      <EnquiryBand
        id="rrr-enquiries"
        eyebrow="Regional assessment enquiries"
        heading="Discuss a regional assessment."
        body="Tell us the region and the decision it needs to inform. We will confirm the scope and respond directly."
        ctaLabel="Discuss a regional assessment"
        onPrimary={() => onRequest(service.title)}
      />
    </main>
  );
}
