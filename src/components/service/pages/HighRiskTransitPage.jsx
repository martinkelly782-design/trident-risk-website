import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  ServiceMasthead,
  ServiceHeroImage,
  TwoColStatement,
  ConvergeFramework,
  Chain,
  Deliverables,
  BulletList,
  RelatedServices,
  RelatedIntelligence,
  EnquiryBand,
} from "../serviceKit";
import { insightsById } from "../../../data/insights";
import { getPublishedIntelligenceBySlug } from "../../../data/intelligence";

// High Risk Area Transit Planning — strategically important. Carries the Red Sea
// and Strait of Hormuz transit-support proposition in full. Wording is careful:
// no guarantee of safe passage, no naval protection, no claim to control
// military coordination, no universal coverage, route arrangements treated as
// context-dependent (not embedded as permanent capability). Grounded in the
// canonical record (introduction, clientProblem, scope, deliverables) plus the
// owner-required Red Sea / Strait of Hormuz visibility.

const AREAS = [
  {
    title: "Red Sea",
    sub: "Bab el-Mandeb · Gulf of Aden",
    line: "Voyage-specific threat assessment, vessel affiliation exposure, route and context assessment and pre-transit preparation for merchant shipping operating through the Red Sea, Bab el-Mandeb and the Gulf of Aden. Where appropriate, coordination with recognised maritime and military shipping-support mechanisms.",
  },
  {
    title: "Strait of Hormuz",
    sub: "Transit planning · Decision support",
    line: "Transit planning and operational decision support for the Strait of Hormuz — route and context assessment, and vessel-specific support, with coordination with relevant maritime authorities and recognised shipping-support mechanisms where applicable. Route arrangements are treated as context-dependent, not permanent.",
  },
];

const SHAPES = [
  { label: "Vessel & cargo", line: "Vessel profile, cargo and operating characteristics relevant to the corridor." },
  { label: "Affiliation exposure", line: "How the vessel may be perceived within the relevant threat environment." },
  { label: "Route & chokepoints", line: "The specific corridor, chokepoints and points of exposure along the passage." },
  { label: "Threat environment", line: "Current threat activity, targeting behaviour and escalation indicators." },
  { label: "Reporting & coordination", line: "Reporting requirements and coordination with recognised shipping-support mechanisms." },
];

const PREP = [
  { label: "Before entry", line: "Routing, reporting and watchkeeping arrangements, and escalation triggers, set before the vessel enters the corridor." },
  { label: "During transit", line: "Operational awareness and updates as the environment changes, with coordination and escalation support maintained through the passage." },
  { label: "If it escalates", line: "A clear, pre-agreed basis for escalation and response, coordinated with the vessel and relevant mechanisms." },
];

const RECEIVE = [
  { title: "Transit plan", body: "Routing, reporting, watchkeeping and escalation triggers for the specific voyage." },
  { title: "Pre-entry preparation", body: "Preparation set before the vessel enters the exposed corridor." },
  { title: "Reporting & coordination arrangements", body: "Reporting requirements and coordination with recognised shipping-support mechanisms where applicable." },
  { title: "Escalation & response readiness", body: "A clear basis for escalation and response maintained through the transit." },
];

const LIMITS = [
  "Voyage-specific support and planning — not a guarantee of safe passage.",
  "Not naval protection, an armed guard team or an embarked detachment.",
  "Trident does not control or direct military coordination.",
  "Route arrangements are context-dependent and confirmed for the specific voyage, not offered as permanent.",
  "Does not replace the Master's command of, or responsibility for, the vessel.",
];

function TransitAreas() {
  return (
    <section id="transit-support" className="scroll-mt-20 bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">High-risk transit support</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight sm:text-[2.6rem]">
              Red Sea.<br />Strait of Hormuz.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/65">
              Voyage-specific intelligence and operational support for vessels navigating high-risk maritime environments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Related intelligence
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 sm:grid-cols-2 lg:col-span-8 lg:border-t-0">
            {AREAS.map((a) => (
              <div key={a.title} className="flex flex-col bg-image-dark p-6 lg:p-8">
                <div className="h-px w-8 bg-accent" />
                <h3 className="mt-5 font-display text-2xl font-normal leading-tight text-white">{a.title}</h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">{a.sub}</p>
                <p className="mt-5 text-sm leading-7 text-white/70">{a.line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strait of Hormuz secondary editorial visual (owner-approved). Substantial
            but not a hero; restrained square presentation — no card, radius, shadow,
            overlay or text on the image. Supports the Strait of Hormuz copy above. */}
        <div className="mt-12 overflow-hidden border border-white/10">
          <ServiceHeroImage
            src="/service-hra-strait-of-hormuz.webp"
            alt="Iranian patrol craft operating near merchant shipping in the Strait of Hormuz"
            objectPosition="center"
            className="aspect-[16/9] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default function HighRiskTransitPage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const redSea = insightsById["red-sea-maritime-threat-assessment"];
  const vra = insightsById["voluntary-reporting-area-overview"];
  const jwla = getPublishedIntelligenceBySlug("jwla-034-saudi-red-sea-transits-listed-area");
  const hormuz = getPublishedIntelligenceBySlug("strait-of-hormuz-commercial-traffic-suppressed");
  const gnss = getPublishedIntelligenceBySlug("gnss-disruption-three-maritime-corridors");

  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-high-risk-transit.webp"
        imageAlt="Merchant vessel transiting under naval escort in a high-risk maritime corridor"
        objectPosition="50% 42%"
        eyebrow="Maritime Security / High Risk Area Transit Planning"
        heading="Plan and support vessel transits through high-risk maritime corridors."
        standfirst="Preparation and operational support for vessels entering exposed maritime corridors — routing, reporting, watchkeeping and escalation set before entry, and support maintained through the transit."
        primaryLabel="Discuss a transit"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="Red Sea & Hormuz support"
        onSecondary={() => scrollTo("transit-support")}
      />

      <TwoColStatement
        eyebrow="The operating problem"
        heading="Exposed-corridor transits are decided before entry."
        paragraphs={[
          "Transits of exposed corridors require preparation across routing, reporting and response that must be set before the vessel enters the area.",
          "The operating environment can change during the passage, so preparation has to be matched by monitoring and a clear basis for escalation.",
          "Trident supports both — the plan before entry, and the operational picture through the transit.",
        ]}
      />

      <TransitAreas />

      <ConvergeFramework
        eyebrow="What shapes the transit assessment"
        heading="Five inputs into one plan."
        intro="The plan is built for the specific vessel and voyage, not the corridor in general."
        items={SHAPES}
        converge={{ label: "The transit plan", caption: "Routing, reporting, watchkeeping and escalation, set for the specific voyage." }}
      />

      <Chain
        eyebrow="Preparation and support"
        heading="Before entry, through the transit, and if it escalates."
        steps={PREP}
        tone="light"
      />

      <Deliverables
        eyebrow="What you receive"
        heading="A plan the bridge can act on."
        intro="Delivered as a transit plan covering routing, reporting and escalation, with supporting preparation and coordination."
        items={RECEIVE}
      />

      <BulletList
        eyebrow="Limitations"
        heading="What this service does not do."
        intro="Stated plainly, so the support is not mistaken for something it is not."
        items={LIMITS}
        tone="dark"
      />

      <RelatedIntelligence
        heading="Related intelligence & reports"
        analysis={[redSea, vra].filter(Boolean)}
        intel={[jwla, hormuz, gnss].filter(Boolean)}
      />

      <RelatedServices ids={service.relatedServiceIds} />

      <EnquiryBand
        id="hra-enquiries"
        eyebrow="High-risk transit enquiries"
        heading="Discuss a transit."
        body="Tell us the vessel, corridor and timing — including Red Sea, Bab el-Mandeb, Gulf of Aden or Strait of Hormuz transits. We will identify the right support and respond directly."
        ctaLabel="Discuss a transit"
        onPrimary={() => onRequest(service.title)}
      />
    </main>
  );
}
