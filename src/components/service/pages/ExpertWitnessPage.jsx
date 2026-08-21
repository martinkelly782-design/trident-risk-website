import {
  ServiceMasthead,
  TwoColStatement,
  Chain,
  BulletList,
  Principle,
  RelatedServices,
  RelatedIntelligence,
  EnquiryBand,
  Faq,
} from "../serviceKit";
import { insightsById } from "../../../data/insights";

// Restrained FAQ — visible question/answer prose using approved capability only.
// Adds the natural vocabulary (maritime expert witness, charterparty, maritime
// arbitration, Red Sea, Strait of Hormuz) without keyword insertion, and makes no
// promise of appointment or admissibility.
const FAQ = [
  {
    q: "What does a maritime expert witness do?",
    a: "A maritime expert witness provides independent expert opinion to assist a court or arbitral tribunal on operational or technical questions in dispute. Trident's expertise is the maritime-security environment — exposure, vessel targeting risk and the reasonableness of the operational decisions taken at the relevant time. The expert's duty is to the tribunal or court, not to the instructing party.",
  },
  {
    q: "Can Trident provide expert evidence in charterparty disputes?",
    a: "Where the issue falls within maritime-security expertise — for example war-risk, “real danger” and unsafe-port questions arising under a charterparty, or the security conditions on a route at a particular time. Trident provides independent expert opinion on those security and operational questions, not legal advice or advocacy.",
  },
  {
    q: "Can Trident assess the maritime-security environment at a historic date?",
    a: "Yes. Establishing the threat and operating conditions prevailing at the relevant time is central to the opinion, and draws on contemporaneous intelligence, official maritime guidance and the operational record for the route and period in question.",
  },
  {
    q: "Does Trident give expert evidence on Red Sea or Strait of Hormuz war risk?",
    a: "These are areas of genuine specialism. Trident can address the war-risk and targeting environment in the Red Sea, Bab el-Mandeb, Gulf of Aden and the Strait of Hormuz, and how a specific vessel or voyage was exposed at the relevant time, in charterparty disputes and maritime arbitration.",
  },
  {
    q: "What material is reviewed when preparing an expert opinion?",
    a: "Typically the relevant operational, intelligence and documentary material for the vessel, voyage and period — routing, reporting, communications, official guidance and contemporaneous threat reporting. The issues and material are confirmed for each instruction.",
  },
];

// Expert Witness — Legal & Evidence. Deliberately different in character and the
// only flagship page using restrained GOLD. Independence-led. Grounded in the
// canonical record (insight, introduction, clientProblem, scope, limits) and the
// approved Legal & Evidence areas. CRITICAL: presents independent expert opinion,
// NOT legal advice or advocacy; the expert's duty is to the tribunal / court. No
// jurisdictions, case names or court appointments are invented.

const PROCESS = [
  { label: "Operational context", line: "Establishing the operating conditions and maritime-security environment prevailing at the relevant time." },
  { label: "Evidence review", line: "Review of the relevant operational, intelligence and documentary material." },
  { label: "Expert analysis", line: "Independent analysis of exposure, targeting risk and the reasonableness of the decisions taken." },
  { label: "Opinion", line: "A written expert opinion, prepared to be tested under cross-examination." },
];

const ISSUES = [
  "War risk and the threshold for real danger to a vessel or voyage.",
  "Vessel targeting risk, and how a vessel may be perceived by a threat actor.",
  "The reasonableness of maritime-security decisions taken at the time.",
  "Voyage exposure and the operating environment on the relevant route.",
  "Operational response to a developing maritime-security situation.",
  "The standard of care in maritime-security decision-making.",
];

const NOT = [
  "Independent expert opinion — not legal advice.",
  "Not advocacy for the instructing party; the duty is to the tribunal or court.",
  "Not a substitute for legal counsel.",
];

export default function ExpertWitnessPage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  // Restrained related-analysis feed: the strongest supporting Insights from the
  // maritime expert witness authority cluster (newest-first is applied for us by
  // the order below). Kept to a handful — this is a service page, not a blog index.
  const relatedAnalysis = [
    "maritime-expert-witnesses-in-charterparty-war-risk-disputes",
    "what-is-real-danger-in-a-maritime-war-risk-dispute",
    "safe-port-war-risk-and-force-majeure-the-evidence-behind-maritime-disputes",
    "how-a-maritime-security-expert-assesses-whether-a-voyage-was-dangerous",
    "red-sea-war-risk-evidence-in-charterparty-disputes",
    "strait-of-hormuz-war-risk-safe-passage-and-charterparty-disputes",
  ]
    .map((slug) => insightsById[slug])
    .filter(Boolean);

  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-expert-witness.webp"
        imageAlt="Maritime expert evidence presented in a commercial shipping dispute setting"
        objectPosition="center"
        eyebrow="Legal & Evidence / Expert Witness"
        heading="Independent expert opinion, grounded in operational maritime-security experience."
        standfirst="When maritime-security exposure, targeting risk or the reasonableness of an operational decision becomes a matter of dispute, Trident provides independent expert opinion — prepared to the standard required of an expert whose duty is to the tribunal or court."
        primaryLabel="Discuss an instruction"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="Speak to us"
        onSecondary={() => scrollTo("ew-enquiries")}
        gold
      />

      <TwoColStatement
        eyebrow="The question"
        heading="When operational maritime decisions later become matters of dispute or evidence."
        gold
        paragraphs={[
          "Maritime-security and operational questions in disputes require independent expert opinion grounded in operational experience.",
          "The question is rarely only technical. It turns on what was known, what was reasonable, and what a competent operator should have done in the conditions prevailing at the time.",
          "Trident's opinion is grounded in operational and intelligence experience, and written to be tested under cross-examination.",
        ]}
      />

      <Principle
        gold
        statement="An expert's responsibility is to assist the tribunal, not the instructing party."
        body="That independence is the value of the opinion. It is offered without advocacy, and it holds whichever party instructs it."
      />

      <Chain
        eyebrow="From evidence to opinion"
        heading="How an instruction is approached."
        intro="A structured approach, adapted to the matter — not a fixed procedure."
        steps={PROCESS}
        tone="light"
        gold
      />

      <BulletList
        eyebrow="Typical issues"
        heading="Where an opinion is most often sought."
        intro="Genuine areas of maritime-security expertise. The relevant issues are confirmed for each instruction."
        items={ISSUES}
        tone="dark"
        gold
      />

      <BulletList
        eyebrow="What the service is not"
        heading="Independent opinion, clearly bounded."
        items={NOT}
        tone="light"
        gold
      />

      <RelatedIntelligence heading="Related analysis" analysis={relatedAnalysis} />

      <Faq
        heading="Maritime expert witness — common questions."
        items={FAQ}
        gold
      />

      <RelatedServices ids={service.relatedServiceIds} />

      <EnquiryBand
        id="ew-enquiries"
        eyebrow="Expert witness enquiries"
        heading="Discuss an instruction."
        body="Tell us the matter, the forum and the issues in dispute. We will confirm whether independent expert opinion is appropriate and respond directly."
        ctaLabel="Discuss an instruction"
        onPrimary={() => onRequest(service.title)}
        gold
      />
    </main>
  );
}
