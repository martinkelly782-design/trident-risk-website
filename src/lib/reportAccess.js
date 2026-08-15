// Report-access lead capture. Submits the visitor's email (and optional
// organisation) to Web3Forms so Trident can provide the report and understand
// interest in its analysis. Identifying data lives ONLY here / in Web3Forms —
// never in Google Analytics (see lib/analytics.js).
//
// Session-unlock is a non-identifying boolean per report in sessionStorage; the
// visitor's email is never stored client-side.

import { email as CONTACT_EMAIL } from "../config/contact";

// Existing Web3Forms access key already configured for report/download leads.
const ACCESS_KEY = "8cc96b46-afd6-440c-8948-e1879af37c25";
const ENDPOINT = "https://api.web3forms.com/submit";
const SESSION_PREFIX = "trident-report-access:";

export const contactEmail = CONTACT_EMAIL;

// Whether this browser tab already completed access for a report this session.
export function isReportUnlocked(reportId) {
  if (!reportId || typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(SESSION_PREFIX + reportId) === "1";
  } catch {
    return false;
  }
}

// Record (non-identifying) that access was completed this session.
export function markReportUnlocked(reportId) {
  if (!reportId || typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SESSION_PREFIX + reportId, "1");
  } catch {
    /* storage unavailable — visitor just re-enters email next time */
  }
}

// Trigger a same-origin download/open of the report PDF without opening a popup
// window (which browsers block after an async submit).
export function openReport(report) {
  if (!report || !report.href || typeof document === "undefined") return;
  const a = document.createElement("a");
  a.href = report.href;
  a.download = report.href.split("/").pop() || "";
  a.rel = "noopener";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Submit a report-access lead. Resolves { success: boolean }. Never throws.
export async function submitReportAccess({ email, organisation, report, sourcePage }) {
  const payload = {
    access_key: ACCESS_KEY,
    subject: `Report access: ${report?.label || report?.id || "Trident report"}`,
    from_name: "Trident Risk Website",
    // Identifying fields (Web3Forms only — never sent to GA):
    email,
    organisation: organisation || "",
    // Non-sensitive context to make leads searchable:
    lead_type: "report_access",
    asset: report?.id || "",
    report_id: report?.id || "",
    report_title: report?.label || "",
    source_page: sourcePage || (typeof window !== "undefined" ? window.location.pathname : ""),
    botcheck: "",
  };
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    return { success: res.ok && data.success === true };
  } catch {
    return { success: false };
  }
}
