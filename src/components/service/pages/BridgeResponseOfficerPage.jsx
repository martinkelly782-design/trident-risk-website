import {
  ServiceMasthead,
  TwoColStatement,
  Chain,
  Deliverables,
  BulletList,
  Principle,
  RelatedServices,
  RelatedIntelligence,
  EnquiryBand,
} from "../serviceKit";
import { insightsById } from "../../../data/insights";
import { getPublishedIntelligenceBySlug } from "../../../data/intelligence";

// Bridge Response Officer — deliberately the most OPERATIONAL of the flagship
// pages: an around-the-transit BEFORE / DURING / AFTER rhythm rather than a
// consultancy-report structure. All content grounded in the canonical service
// record (introduction, clientProblem, scope, deliverables, limits, insight).

const AROUND_TRANSIT = [
  { label: "Before", line: "Master, bridge-team and crew briefing before entry; a vessel-specific threat and passage review; and onboard security and emergency-response drills." },
  { label: "During", line: "Continuous liaison with the Trident GSOC ashore, operational updates and escalation support, and advisory assistance during developing security incidents." },
  { label: "After", line: "Post-transit observations and recommendations — a clear record of what was done and what to carry forward to the next passage." },
];

const RECEIVE = [
  { title: "Pre-transit operational briefing", body: "For the Master, bridge team and crew before entry into the high-risk area." },
  { title: "Vessel-specific transit review", body: "Threat and passage review tailored to the vessel and voyage." },
  { title: "Onboard operational advisory support", body: "Embedded advice through the transit, alongside the Master and bridge team." },
  { title: "Liaison with the Trident GSOC", body: "A continuous link to the Global Security Operations Centre ashore throughout the deployment." },
  { title: "Post-transit observations", body: "Observations and recommendations following the deployment or transit." },
];

const NOT = [
  "Advisory only — not armed security, an armed guard team or an embarked military detachment.",
  "Not a riding squad or technical riding team.",
  "Does not replace the Master or assume command of the vessel.",
  "Does not replace the Company Security Officer or the vessel's ISPS responsibilities.",
  "Does not transfer the vessel's duty of care.",
  "Provides onboard advisory, coordination and escalation support only.",
];

export default function BridgeResponseOfficerPage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const redSea = insightsById["red-sea-maritime-threat-assessment"];
  const hormuz = getPublishedIntelligenceBySlug("strait-of-hormuz-commercial-traffic-suppressed");

  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-bridge-response-officer.webp"
        imageAlt="Maritime security adviser briefing a merchant vessel bridge team before transit"
        objectPosition="66% 50%"
        eyebrow="Maritime Security / Bridge Response Officer"
        heading="Experienced maritime-security support, on the bridge and through the transit."
        standfirst="A Bridge Response Officer works alongside the Master and bridge team through a high-risk-area transit — strengthening preparedness, response and decision-making, with continuous liaison to the Trident Global Security Operations Centre ashore."
        primaryLabel="Discuss a transit"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="Speak to an analyst"
        onSecondary={() => scrollTo("bro-enquiries")}
      />

      <TwoColStatement
        eyebrow="The operating problem"
        heading="Preparing, responding and deciding — while still navigating."
        paragraphs={[
          "Vessels entering high-risk areas must brief crews, rehearse response, apply mitigation measures and manage developing incidents while maintaining safe navigation.",
          "Often this has to be done without dedicated onboard security support, or without a direct line to shore-based monitoring.",
          "A Bridge Response Officer provides that support in place — embedded operational advice, not a protective detail, and not a change to how the vessel is manned or commanded.",
        ]}
      />

      <Chain
        eyebrow="Around the transit"
        heading="Support before, during and after."
        intro="The deployment is built around the passage. The exact scope is agreed during operational planning and reflects the vessel, voyage and the client's requirements."
        steps={AROUND_TRANSIT}
        tone="dark"
      />

      <Deliverables
        eyebrow="What you receive"
        heading="Operational support you can rely on."
        intro="A typical deployment brings together the following. Scope is confirmed for each engagement."
        items={RECEIVE}
      />

      <BulletList
        eyebrow="What it is not"
        heading="Advisory support — clearly bounded."
        intro="The role is defined as much by what it is not as by what it is."
        items={NOT}
        tone="dark"
      />

      <Principle
        statement="The most important decisions affecting a high-risk transit are usually made before the vessel reaches the area of concern."
        body="A Bridge Response Officer exists to make those decisions earlier, better-informed and better-rehearsed — and to keep the vessel connected to shore when the environment changes."
      />

      <RelatedServices ids={service.relatedServiceIds} />

      <RelatedIntelligence
        analysis={[redSea].filter(Boolean)}
        intel={[hormuz].filter(Boolean)}
      />

      <EnquiryBand
        id="bro-enquiries"
        eyebrow="Bridge Response Officer enquiries"
        heading="Discuss a transit."
        body="Tell us the vessel, route and timing. We will identify the right onboard support for the transit and respond directly."
        ctaLabel="Discuss a transit"
        onPrimary={() => onRequest(service.title)}
      />
    </main>
  );
}
