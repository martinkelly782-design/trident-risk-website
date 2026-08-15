import { useEffect, useState } from "react";
import { ArrowDown, X } from "lucide-react";
import ReportAccessForm from "./ReportAccessForm";
import { trackEvent } from "../../lib/analytics";

// Report access CTA. Full report PDFs are gated behind a restrained, editorial
// email-capture panel (no marketing/SaaS aesthetics). Clicking the CTA opens the
// gate; once access is completed in this session the same CTA opens the report
// directly. Keeps the previous DownloadReport API (report/tone/label/className)
// so existing call sites are unchanged.
export default function DownloadReport({
  report,
  tone = "light",
  label = "Download full report",
  className = "",
  sourcePage,
}) {
  const [open, setOpen] = useState(false);
  if (!report) return null;

  const source = sourcePage || (typeof window !== "undefined" ? window.location.pathname : "");
  const analyticsParams = {
    content_type: "report",
    report_id: report.id,
    report_title: report.label,
    region: report.region,
    source_page: source,
  };

  const base =
    tone === "dark"
      ? "border-white/30 text-white hover:border-accent hover:text-accent"
      : "border-ink/25 text-ink hover:border-accent hover:text-accent";

  function handleClick() {
    // Every full-report download goes through the access gate — no session
    // bypass, so a returning visitor is always asked for an email address.
    trackEvent("report_gate_open", analyticsParams);
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`group inline-flex items-center gap-2.5 border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${base} ${className}`}
      >
        {label}
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.75} aria-hidden="true" />
      </button>

      {open && (
        <ReportAccessModal report={report} sourcePage={source} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

// Restrained, editorial modal — square geometry, hairline border, no rounded
// corners / drop shadows / marketing overlay. Closes on Esc, backdrop click and
// the close control; locks background scroll while open.
function ReportAccessModal({ report, sourcePage, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 px-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Access the full report"
    >
      <div
        className="relative w-full max-w-md border border-hairline bg-canvas p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-ink-muted transition-colors hover:text-ink"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
          Full report
        </p>
        <h2 className="mt-3 font-display text-xl font-normal leading-snug text-ink">
          {report.label}
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Enter your email address to access the full report.
        </p>

        <div className="mt-6">
          <ReportAccessForm report={report} sourcePage={sourcePage} autoFocus />
        </div>
      </div>
    </div>
  );
}
