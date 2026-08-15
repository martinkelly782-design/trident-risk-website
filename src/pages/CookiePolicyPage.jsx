import LegalPage from "../components/legal/LegalPage";
import { email } from "../config/contact";

// Cookie Policy reflecting the actual technology audit: the site sets no cookies
// of its own; it stores a consent choice in localStorage (strictly necessary),
// and loads Google Analytics ONLY after consent. Google Fonts and some images
// load from third parties (IP only, no cookies). No advertising/marketing.

const UPDATED = "15 August 2026";

const sections = [
  {
    id: "about",
    heading: "About cookies and similar technologies",
    blocks: [
      "Cookies are small text files placed on your device by a website. Similar technologies — such as local storage in your browser — can store information in comparable ways. In this policy we refer to all of these as \"cookies and similar technologies\".",
      "They can be strictly necessary (needed to run the site or remember a choice you have made) or non-essential (for example, analytics).",
    ],
  },
  {
    id: "approach",
    heading: "Our approach",
    blocks: [
      "By default, this website uses only strictly necessary technologies. It does not use advertising or marketing cookies, and it does not track you across other websites.",
      "Non-essential analytics (Google Analytics) load only if you choose to accept them. Nothing non-essential is loaded before you make a choice, or if you decline.",
    ],
  },
  {
    id: "what-we-use",
    heading: "What this website uses",
    blocks: [
      {
        table: {
          head: ["Name", "Provider", "Purpose", "Type", "Duration"],
          rows: [
            ["trident-cookie-consent", "This website", "Remembers your cookie choice so we do not ask again", "Strictly necessary (browser local storage)", "Until you clear it or change your choice"],
            ["_ga", "Google Analytics", "Distinguishes visitors to measure how the site is used", "Analytics — loads only with consent", "Up to 2 years"],
            ["_ga_G-5HWW9CEKW4", "Google Analytics", "Maintains analytics state for this website", "Analytics — loads only with consent", "Up to 2 years"],
          ],
        },
      },
      "The consent choice is stored in your browser's local storage rather than as a cookie, but is included here for transparency. The Google Analytics cookies are set only if you accept analytics.",
    ],
  },
  {
    id: "third-party-resources",
    heading: "Third-party resources",
    blocks: [
      "Some resources are loaded from third parties to display the website:",
      { list: [
        "Google Fonts — provides the site's typefaces. Google receives your IP address to deliver the fonts; this does not set cookies.",
        "Images — some pages load images hosted by third-party providers, which receive your IP address to deliver the image. These do not set advertising or tracking cookies.",
      ] },
    ],
  },
  {
    id: "managing",
    heading: "Managing your choices",
    blocks: [
      "You can change your analytics choice at any time using the button below.",
      { action: "cookie-preferences" },
      "You can also control or delete cookies and local storage through your browser settings, and you can opt out of Google Analytics using Google's browser add-on. Clearing your browser storage will remove your saved choice, and we will ask again on your next visit.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    blocks: [
      "We may update this policy if the technologies we use change. The date at the top of this page shows when it was last updated.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      `For any question about cookies on this website, contact us at ${email}.`,
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated={UPDATED}
      intro="How this website uses cookies and similar storage technologies, and how to control them."
      sections={sections}
    />
  );
}
