// Cookie / analytics consent — the single source of truth for whether the
// non-essential Google Analytics tag may load. GA is NOT present in index.html;
// it is injected here ONLY after the user grants analytics consent. The consent
// choice itself is stored in localStorage (a strictly-necessary technology).

const STORAGE_KEY = "trident-cookie-consent";
const GA_ID = "G-PJHP6CHR1Q";

// Read the stored consent object, or null if the user has not chosen yet.
export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Persist a consent choice ({ analytics: boolean }) and apply it immediately.
export function setConsent(prefs) {
  const record = { analytics: !!prefs.analytics, ts: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable — consent simply won't persist */
  }
  applyConsent(record);
  return record;
}

// Apply a consent record: load GA if (and only if) analytics is granted.
export function applyConsent(prefs) {
  if (prefs && prefs.analytics) loadGoogleAnalytics();
}

let gaLoaded = false;
function loadGoogleAnalytics() {
  if (gaLoaded || typeof window === "undefined" || typeof document === "undefined") return;
  gaLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  // send_page_view:false — the SPA route tracker (lib/analytics trackPageView)
  // is the single source of page views, so route changes are counted exactly
  // once. We fire the initial page view here for the page GA loaded on (first
  // visit for a returning consenter, or the page where consent was just given).
  gtag("config", GA_ID, { anonymize_ip: true, send_page_view: false });
  gtag("event", "page_view", {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    page_location: window.location.href,
  });
}

// On app start, re-apply any previously stored consent (so GA loads for
// returning visitors who accepted, and never loads for those who didn't).
export function initConsent() {
  const stored = getConsent();
  if (stored) applyConsent(stored);
}

// Event used by "Cookie preferences" links to reopen the consent panel.
export const PREFERENCES_EVENT = "trident:cookie-preferences";
export function openCookiePreferences() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(PREFERENCES_EVENT));
}
