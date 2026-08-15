import LegalPage from "../components/legal/LegalPage";
import { email } from "../config/contact";

// Website Terms of Use for tridentrisk.org — governing use of the public website
// and public content only (NOT client engagement terms). Preserves Trident's
// approved disclaimer principle: content supports situational awareness and
// risk-informed decision-making but is not navigational, legal, insurance or
// financial advice, and is no substitute for vessel-/voyage-specific analysis.
//
// GOVERNING LAW: no approved jurisdiction exists in the repository, so the
// governing-law clause is deliberately omitted and flagged for owner
// confirmation rather than invented. This note is not shown to the public.

const UPDATED = "15 August 2026";

const sections = [
  {
    id: "about-terms",
    heading: "About these terms",
    blocks: [
      "These terms govern your use of the public website at tridentrisk.org (the \"website\") and the information published on it. By using the website, you accept these terms. If you do not accept them, please do not use the website.",
      "These are website terms only. They do not form part of, or replace, any separate agreement under which Trident provides services to a client.",
    ],
  },
  {
    id: "about-trident",
    heading: "About Trident",
    blocks: [
      "The website is operated by Trident FZC LLC, trading as Trident Risk & Advisory (\"Trident\"), a maritime, geopolitical and legal risk advisory business. Trident is not a law firm, and using the website does not create any adviser–client, solicitor–client or other professional relationship.",
    ],
  },
  {
    id: "using-the-website",
    heading: "Using the website",
    blocks: [
      "You may use the website and view its content for your own legitimate, lawful and informational purposes. You must not use the website in any way that is unlawful, or that could damage, disable or impair it or interfere with anyone else's use of it.",
    ],
  },
  {
    id: "content",
    heading: "Intelligence, Insights and reports",
    blocks: [
      "The Intelligence, Insights, assessments and reports published on the website are provided for general information and situational awareness. They describe developments and analysis as understood at the time of writing and are not continuously updated.",
      "They are selected, public material. More detailed, current or vessel-specific analysis is provided to clients directly under a separate engagement.",
    ],
  },
  {
    id: "no-advice",
    heading: "No navigational, legal, insurance or financial advice",
    blocks: [
      "Information on the website supports maritime-security awareness and risk-informed decision-making. It does not constitute, and must not be relied on as:",
      { list: [
        "navigational advice or a routing recommendation;",
        "operational direction or instruction;",
        "a legal attribution of responsibility or a determination of liability;",
        "legal, insurance or financial advice.",
      ] },
      "Decisions about a specific vessel, voyage, port, route or transaction remain the responsibility of the operator, owner, master or other decision-maker.",
    ],
  },
  {
    id: "no-substitute",
    heading: "No substitute for vessel- or voyage-specific assessment",
    blocks: [
      "Public website content is general and is not a substitute for vessel-specific or voyage-specific analysis, or for professional legal, insurance or financial advice appropriate to your circumstances. If you need advice on a specific situation, contact us to discuss a commissioned assessment.",
    ],
  },
  {
    id: "legal-evidence",
    heading: "Legal and evidence content",
    blocks: [
      "Content relating to Legal & Evidence, including Expert Witness services, is technical and expert opinion and operational analysis. It is not legal advice and does not amount to legal representation.",
      "Where Trident provides expert witness support, it does so as independent expert opinion within the scope of a specific instruction, and an expert's duty is to the tribunal or court rather than to the instructing party.",
    ],
  },
  {
    id: "accuracy",
    heading: "Accuracy and currency",
    blocks: [
      "We take reasonable care in preparing website content, but we do not warrant that it is complete, accurate or current. Situations can change quickly, and content may become out of date. To the extent permitted by law, the website is provided \"as is\" and \"as available\" without warranties of any kind.",
    ],
  },
  {
    id: "third-party",
    heading: "Third-party information and links",
    blocks: [
      "Some content draws on, or refers to, third-party sources. Where a source is identified, that attribution and the underlying rights remain with the original source. The website may also link to third-party websites, which we do not control and are not responsible for.",
    ],
  },
  {
    id: "ip",
    heading: "Intellectual property",
    blocks: [
      "Unless otherwise stated, the website and its content — including the Trident name and branding, text, analysis, graphics, reports and original analytical frameworks — are owned by Trident or used under licence, and are protected by intellectual property rights.",
      "We do not claim ownership of third-party material identified as such on the website, including government publications, UKMTO or other reporting-mechanism material, third-party reports and third-party photography, which remain the property of their respective owners.",
      "You may not copy, reproduce, republish or exploit website content for commercial purposes without our permission, except as expressly permitted in these terms or by law.",
    ],
  },
  {
    id: "reports",
    heading: "Downloadable reports",
    blocks: [
      "Where reports are made available to download, copyright in those reports remains with Trident unless otherwise stated. You may download and view them for your own legitimate internal and informational use.",
      "You must not alter, misrepresent or remove attribution from the reports, and any third-party source attribution stated in a report must be preserved.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    blocks: [
      { list: [
        "Do not use the website for any unlawful purpose or in breach of these terms.",
        "Do not attempt to gain unauthorised access to, disrupt or overload the website or its infrastructure.",
        "Do not systematically extract, scrape or harvest content except as expressly permitted.",
        "Do not misrepresent your affiliation with Trident.",
      ] },
    ],
  },
  {
    id: "availability",
    heading: "Availability of the website",
    blocks: [
      "We aim to keep the website available but do not guarantee that it will be uninterrupted or error-free. We may change, suspend or withdraw all or part of the website at any time without notice.",
    ],
  },
  {
    id: "liability",
    heading: "Liability and reliance",
    blocks: [
      "To the fullest extent permitted by law, Trident is not liable for any loss or damage arising from your use of, or reliance on, the website or its content. You use the website and its content at your own risk.",
      "Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      `For any question about these terms, contact us at ${email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Website Terms of Use"
      updated={UPDATED}
      intro="The terms that govern use of this website and its public content."
      sections={sections}
    />
  );
}
