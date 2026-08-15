import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/site";

// Service CTA (Phase 10).
// Restrained dark band aligned to the footer / discipline-CTA treatment. The
// primary action preserves the request flow: onRequest(service.title) sets the
// requested service and routes to /request. Gold is used only as a subtle accent
// for Legal & Evidence; every other discipline uses the red accent.
export default function ServiceCta({ service, discipline, onRequest }) {
  const isLegalEvidence = discipline.id === "legal-evidence";
  const buttonColor = isLegalEvidence
    ? "bg-gold hover:bg-[#a07a33]"
    : "bg-accent hover:bg-[#a83c25]";
  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `${service.title} enquiry`
  )}`;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 pb-14 lg:px-8 lg:pb-16">
        <div className="bg-image-dark px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-14">
            <div className="max-w-xl">
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                  isLegalEvidence ? "text-gold" : "text-accent"
                }`}
              >
                {discipline.name}
              </p>

              <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-white">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                {service.summary}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <button
                type="button"
                onClick={() => onRequest(service.title)}
                className={`inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${buttonColor}`}
              >
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>

              <a
                href={mailHref}
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60"
              >
                Speak to an analyst
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
