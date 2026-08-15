import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsent, setConsent, initConsent, PREFERENCES_EVENT } from "../../lib/consent";

// Cookie-consent mechanism. Appears only when a choice has not yet been made, or
// when reopened via a "Cookie preferences" link. Non-essential analytics (Google
// Analytics) load ONLY on explicit acceptance — never before a choice, never on
// reject. Reject is presented as prominently as Accept; the analytics toggle is
// off by default (not pre-ticked). Restrained Trident styling — no shadow beyond
// a hairline, no rounded card.

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    // Re-apply any prior consent (loads GA for returning visitors who accepted).
    initConsent();
    // Show the banner only if no choice has been recorded.
    if (!getConsent()) setOpen(true);
    // Allow "Cookie preferences" links anywhere to reopen the panel.
    const reopen = () => {
      const current = getConsent();
      setAnalytics(!!(current && current.analytics));
      setManaging(true);
      setOpen(true);
    };
    window.addEventListener(PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(PREFERENCES_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (analyticsGranted) => {
    setConsent({ analytics: analyticsGranted });
    setOpen(false);
    setManaging(false);
  };

  const btnBase =
    "inline-flex items-center justify-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors";

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[10000] border-t border-white/15 bg-image-dark text-white"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-6 lg:px-8">
        {!managing ? (
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Cookies</p>
              <p className="mt-2 text-[14px] leading-6 text-white/75">
                We use only strictly necessary technologies to run this website. With your consent, we also use Google
                Analytics to understand how the site is used. No advertising or marketing cookies are used. See our{" "}
                <Link to="/cookies" className="underline underline-offset-2 hover:text-white">Cookie Policy</Link>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => choose(true)} className={`${btnBase} bg-accent text-white hover:bg-[#a83d26]`}>
                Accept
              </button>
              <button type="button" onClick={() => choose(false)} className={`${btnBase} border border-white/40 text-white hover:border-white/70`}>
                Reject non-essential
              </button>
              <button type="button" onClick={() => setManaging(true)} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 underline underline-offset-4 hover:text-white">
                Manage preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Cookie preferences</p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-4">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white">Strictly necessary</p>
                  <p className="mt-1 text-[13px] leading-6 text-white/60">Required to run the website and remember your cookie choice. Always on.</p>
                </div>
                <span className="mt-1 shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">Always on</span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-6 pb-1">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white">Analytics</p>
                  <p className="mt-1 text-[13px] leading-6 text-white/60">Google Analytics, to understand how the site is used. Loads only if enabled here.</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 accent-[#c0492f]"
                  aria-label="Enable analytics cookies"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => choose(analytics)} className={`${btnBase} bg-accent text-white hover:bg-[#a83d26]`}>
                Save preferences
              </button>
              <button type="button" onClick={() => choose(false)} className={`${btnBase} border border-white/40 text-white hover:border-white/70`}>
                Reject non-essential
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
