import {
  ServiceMasthead,
  TwoColStatement,
  Principle,
  ConvergeFramework,
  Deliverables,
  BulletList,
  RelatedServices,
  EnquiryBand,
} from "../serviceKit";

// Country Entry Risk Assessment — commercial and strategic, with obvious
// maritime/commercial relevance. Exposure framework resolves into the entry
// decision (commit / delay / mitigate / reconsider), framed as decisions the
// analysis may INFORM, not automatic recommendations. Grounded in the canonical
// record (insight, introduction, clientProblem, scope, deliverable). No local
// networks or regulatory/legal capabilities are claimed.

const FACTORS = [
  { label: "Political", line: "Governance, stability and the direction of policy that bears on the market." },
  { label: "Security", line: "The security environment for people, assets and operations." },
  { label: "Counterparty", line: "Partners, agents and counterparties, and the exposure they carry." },
  { label: "Regulatory & operating constraints", line: "Regulatory conditions and the practical constraints on operating." },
  { label: "Reputational", line: "Reputational exposure associated with the market and its counterparties." },
  { label: "Commercial", line: "Where commercial exposure would sit once operations begin." },
];

const RECEIVE = [
  { title: "Political & security read", body: "A structured view of the political and security environment before entry." },
  { title: "Regulatory & reputational exposure", body: "Regulatory conditions and reputational exposure relevant to the market." },
  { title: "Implications for entry & mobilisation", body: "What the environment means for the entry and mobilisation decision." },
  { title: "Where exposure would sit", body: "A clear view of where exposure would sit once operations begin." },
];

const NOT = [
  "Informs the entry decision — which remains the client's to make.",
  "Analysis that may inform commit, delay, mitigate or reconsider — not an automatic recommendation.",
  "Not local-country networks or on-the-ground representation.",
  "Not regulatory or legal advice.",
];

export default function CountryEntryPage({ service, discipline, onRequest }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <main className="bg-canvas text-ink">
      <ServiceMasthead
        discipline={discipline}
        service={service}
        image="/service-country-entry.webp"
        imageAlt="A container ship alongside a commercial port terminal at dusk"
        objectPosition="50% 50%"
        eyebrow="Market Entry / Country Entry Risk Assessment"
        heading="Understand a market's exposure before you commit to it."
        standfirst="A country entry risk assessment examines the political, security, regulatory and reputational conditions of a market before capital, people or assets are committed — and sets out where exposure would sit once operations begin."
        primaryLabel="Discuss market entry"
        onPrimary={() => onRequest(service.title)}
        secondaryLabel="Speak to an analyst"
        onSecondary={() => scrollTo("cera-enquiries")}
      />

      <TwoColStatement
        eyebrow="The decision"
        heading="Before people, capital, operations and counterparties are committed."
        paragraphs={[
          "Entry decisions are often committed before the political, security and regulatory environment is fully understood.",
          "By the time exposure is visible in operations, it is expensive to unwind.",
          "A country entry risk assessment is built to shape the decision while it can still be changed.",
        ]}
      />

      <Principle
        statement="Market exposure is cheapest to shape before entry and most expensive to unwind after it."
        body="The assessment exists to put exposure in front of the decision-maker while entry, structure and counterparties can still be changed."
      />

      <ConvergeFramework
        eyebrow="Exposure framework"
        heading="Six exposures, one decision."
        intro="Each exposure is assessed for the specific market and commitment, and weighed together."
        items={FACTORS}
        converge={{
          label: "The entry decision",
          caption: "Decisions the analysis may inform — not automatic recommendations.",
          chips: ["Commit", "Delay", "Mitigate", "Reconsider"],
        }}
      />

      <Deliverables
        eyebrow="What you receive"
        heading="A country entry risk assessment."
        intro="Scope and the market are defined for each engagement."
        items={RECEIVE}
      />

      <BulletList
        eyebrow="What it is not"
        heading="Analysis that informs the decision."
        items={NOT}
        tone="dark"
      />

      <RelatedServices ids={service.relatedServiceIds} />

      <EnquiryBand
        id="cera-enquiries"
        eyebrow="Market entry enquiries"
        heading="Discuss market entry."
        body="Tell us the market and the commitment you are weighing. We will confirm the scope and respond directly."
        ctaLabel="Discuss market entry"
        onPrimary={() => onRequest(service.title)}
      />
    </main>
  );
}
