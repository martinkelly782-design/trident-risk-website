import {
  ServiceMasthead,
  Principle,
  TwoColStatement,
  CapabilityWall,
  Deliverables,
  BulletList,
  RelatedServices,
  RelatedIntelligence,
  EnquiryBand,
} from "../serviceKit";
import { insightsById } from "../../../data/insights";
import { getPublishedIntelligenceBySlug } from "../../../data/intelligence";

// GNSS Interference Advisory — technically maritime, not generic cyber. The
// approved insight leads. The service proposition is evergreen; current VRA
// figures appear only in a restrained related-intelligence context. Grounded in
// the canonical record (insight, introduction, clientProblem, scope,
// deliverable). No technical remediation capabilities are implied.

const COVERS = [
  { title: "Interference picture", body: "Where and how position and timing are being degraded on the route — persistent jamming, deliberate spoofing or intermittent loss." },
  { title: "Position & navigation impact", body: "What degraded or false GNSS means for navigation, ECDIS and time-stamped records." },
  { title: "Independent cross-checks", body: "Using RADAR, AIS behaviour and other independent sources to recognise a false position." },
  { title: "Bridge-team precautions", body: "Practical precautions a bridge team can take before and during transit." },
];

const RECEIVE = [
  { title: "Route interference advisory", body: "Where and how interference is affecting the specific route." },
  { title: "Practical mitigating measures", body: "Measures the vessel can take to protect position integrity." },
  { title: "Operational implications", body: "What the interference picture means for the transit and the bridge team." },
];

const NOT = [
  "Advisory on interference and its operational implications — not equipment supply or technical remediation.",
  "Informs navigation-integrity decisions; it does not replace the bridge team's judgement or the vessel's navigation.",
];

export default function GnssInterferencePage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const vra = insightsById["voluntary-reporting-area-overview"];
  const gnss = getPublishedIntelligenceBySlug("gnss-disruption-three-maritime-corridors");

  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-gnss-interference.webp"
        imageAlt="GNSS and AIS interference visual showing anomalous vessel positioning in a strategic maritime corridor"
        objectPosition="center"
        eyebrow="Maritime Cyber / GNSS Interference Advisory"
        heading="Know where a bridge is being fed a false position — and what to do about it."
        standfirst="GNSS interference advisory sets out where and how a vessel's position and timing are being degraded on a route — jamming, spoofing or loss of signal — and the practical precautions a bridge team can take before and during transit."
        primaryLabel="Discuss GNSS exposure"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="Speak to an analyst"
        onSecondary={() => scrollTo("gnss-enquiries")}
      />

      <Principle
        statement="The real danger in GNSS interference is not the signal a bridge loses, but the false position it keeps trusting."
        body="GNSS interference advisory converts a technical interference picture into the practical precautions a vessel can take — so a false position is recognised, not trusted."
      />

      <TwoColStatement
        eyebrow="The problem"
        heading="The risk is not a lost signal. It is a confident, wrong one."
        paragraphs={[
          "GNSS jamming and spoofing can degrade or falsify position, creating navigational and safety risk in affected areas.",
          "A jammed signal is obvious. A spoofed one is not — the bridge may hold a plausible but wrong position, and time-stamped records with it.",
          "The advisory makes that risk visible for the specific route and bridge team.",
        ]}
      />

      <CapabilityWall
        eyebrow="What the advisory covers"
        heading="From the interference picture to the bridge."
        intro="Advisory in nature: it converts the technical picture into precautions the vessel can act on."
        items={COVERS}
      />

      <Deliverables
        eyebrow="What you receive"
        heading="Interference, made actionable."
        intro="Delivered as an advisory on GNSS interference and mitigating measures for the route."
        items={RECEIVE}
      />

      <BulletList
        eyebrow="What it is not"
        heading="Advisory — clearly bounded."
        items={NOT}
        tone="dark"
      />

      <RelatedIntelligence
        heading="Current context & intelligence"
        analysis={[vra].filter(Boolean)}
        intel={[gnss].filter(Boolean)}
      />

      <RelatedServices ids={service.relatedServiceIds} />

      <EnquiryBand
        id="gnss-enquiries"
        eyebrow="GNSS advisory enquiries"
        heading="Discuss GNSS exposure."
        body="Tell us the route and the vessel. We will set out where interference is affecting the passage and what to do about it."
        ctaLabel="Discuss GNSS exposure"
        onPrimary={() => onRequest(service.title)}
      />
    </main>
  );
}
