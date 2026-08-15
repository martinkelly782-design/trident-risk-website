// Privacy-safe analytics helper — the SINGLE entry point for GA4 events.
//
// Two hard rules enforced here:
//   1. Nothing is sent unless the visitor has granted analytics consent AND the
//      GA tag has loaded (see lib/consent.js). No consent → no events, ever.
//   2. No personally identifiable information reaches Google Analytics. Event
//      parameters are sanitised: known PII keys are dropped, and any value that
//      looks like an email address is dropped. Identifying data (email,
//      organisation) belongs only in the first-party Web3Forms lead record, never
//      in GA. Keep the two systems separate.
//
// Usage:
//   import { trackEvent } from "../lib/analytics";
//   trackEvent("report_download", { report_id: "red-sea", region: "Red Sea" });

import { getConsent } from "./consent";

// Parameter keys that must never be sent to GA (identifying / free-text).
const PII_KEYS = new Set([
  "email", "e_mail", "mail",
  "name", "full_name", "fullname", "first_name", "last_name",
  "organisation", "organization", "company", "org",
  "phone", "tel", "telephone", "mobile",
  "message", "msg", "comment", "comments", "enquiry", "body",
  "address",
]);

const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/;

// Return true only when analytics consent is granted and gtag is available.
export function analyticsReady() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return false;
  const consent = getConsent();
  return !!(consent && consent.analytics);
}

// Remove any PII keys and any email-looking string values. Defensive net so a
// mistaken call site can never leak identifying data into GA.
function sanitize(params = {}) {
  const clean = {};
  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === "") continue;
    if (PII_KEYS.has(key.toLowerCase())) continue;
    if (typeof value === "string" && EMAIL_RE.test(value)) continue;
    clean[key] = value;
  }
  return clean;
}

// Fire a GA4 event. No-op unless analytics is ready. Never throws.
export function trackEvent(name, params = {}) {
  try {
    if (!name || !analyticsReady()) return;
    window.gtag("event", name, sanitize(params));
  } catch {
    /* analytics must never break the UI */
  }
}

// Fire a manual SPA page_view. GA is configured with send_page_view:false, so
// this is the single source of page views (route tracker + initial load).
export function trackPageView({ path, title } = {}) {
  try {
    if (!analyticsReady()) return;
    window.gtag("event", "page_view", {
      page_path: path || window.location.pathname + window.location.search,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  } catch {
    /* no-op */
  }
}

export default trackEvent;
