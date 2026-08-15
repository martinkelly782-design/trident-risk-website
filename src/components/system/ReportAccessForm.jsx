import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import {
  submitReportAccess,
  markReportUnlocked,
  openReport,
  contactEmail,
} from "../../lib/reportAccess";
import { trackEvent } from "../../lib/analytics";

// Shared report-access form. Collects EMAIL (required) and ORGANISATION
// (optional) before releasing a full report PDF. Used both inside the modal gate
// (DownloadReport) and inline on the Iran briefing page. On success it submits
// the lead to Web3Forms, opens the report, and fires the (PII-free) analytics
// funnel events. Identifying fields are never sent to analytics.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full border border-hairline bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

export default function ReportAccessForm({ report, sourcePage, onSuccess, autoFocus = false }) {
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | error | success

  const analyticsParams = {
    content_type: "report",
    report_id: report?.id,
    report_title: report?.label,
    region: report?.region,
    source_page: sourcePage,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const { success } = await submitReportAccess({
      email: email.trim(),
      organisation: organisation.trim(),
      report,
      sourcePage,
    });
    if (!success) {
      setStatus("error");
      return;
    }
    markReportUnlocked(report?.id);
    trackEvent("report_access_submit", analyticsParams);
    openReport(report);
    trackEvent("report_download", analyticsParams);
    setStatus("success");
    if (onSuccess) onSuccess();
  }

  if (status === "success") {
    return (
      <div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-ink">Your report is downloading.</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">
              If it did not open,{" "}
              <button
                type="button"
                onClick={() => openReport(report)}
                className="underline underline-offset-2 hover:text-accent"
              >
                open the report
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
        placeholder="Email address"
        required
        autoFocus={autoFocus}
        className={inputClass}
      />
      <input
        type="text"
        name="organisation"
        value={organisation}
        onChange={(e) => setOrganisation(e.target.value)}
        aria-label="Organisation (optional)"
        placeholder="Organisation (optional)"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#a83d26] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Access report"}
        {status === "submitting" ? (
          <ArrowDown className="h-4 w-4 animate-pulse" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="text-xs leading-5 text-accent">
          We couldn&rsquo;t process the request. Please check your email address and try again, or contact us at{" "}
          <a href={`mailto:${contactEmail}`} className="underline underline-offset-2">
            {contactEmail}
          </a>
          .
        </p>
      )}

      <p className="text-xs leading-5 text-ink-muted">
        Your details will be used to provide the report and understand interest in Trident&rsquo;s analysis. See our{" "}
        <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-accent">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
