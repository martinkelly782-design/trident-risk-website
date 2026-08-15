import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";
import { servicesById } from "../../data/serviceIndex";
import { isServiceRouteLive, servicePath } from "../../routes/routeConfig";
import { email, emailHref } from "../../config/contact";
import { trackEvent } from "../../lib/analytics";

// Wrap a CTA handler so a (PII-free) cta_click event fires before the original
// action. Used by the shared service CTAs so every flagship page is instrumented
// from one place.
function withCtaTracking(name, location, fn) {
  return (e) => {
    trackEvent("cta_click", { cta_name: name, cta_location: location, content_type: "service" });
    if (fn) fn(e);
  };
}

// Shared building blocks for the flagship Service pages. Each page composes a
// DIFFERENT selection and order of these, with service-specific content, so the
// pages share the approved visual system (deep navy / warm off-white, Newsreader
// + Inter, restrained red, gold only for Legal & Evidence, thin rules, square
// geometry, no rounded cards / shadows / gradients) without feeling cloned.

function acc(gold) {
  return gold ? "text-gold" : "text-accent";
}
function accBg(gold) {
  return gold ? "bg-gold" : "bg-accent";
}
function primaryBtn(gold) {
  return gold ? "bg-gold hover:bg-[#a07a33]" : "bg-accent hover:bg-[#a83d26]";
}

export function ServiceBreadcrumbs({ discipline, service, tone = "dark" }) {
  const base = tone === "dark" ? "text-white/50" : "text-ink-muted";
  const hover = tone === "dark" ? "hover:text-white" : "hover:text-ink";
  const cur = tone === "dark" ? "text-white" : "text-ink";
  const chev = tone === "dark" ? "text-white/30" : "text-ink-muted/60";
  return (
    <nav aria-label="Breadcrumb" className={`text-[11px] font-medium uppercase tracking-[0.16em] ${base}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li><Link to="/" className={`transition-colors ${hover}`}>Home</Link></li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className={`h-3.5 w-3.5 ${chev}`} strokeWidth={1.75} aria-hidden="true" />
          <Link to={`/${discipline.slug}`} className={`transition-colors ${hover}`}>{discipline.name}</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className={`h-3.5 w-3.5 ${chev}`} strokeWidth={1.75} aria-hidden="true" />
          <span className={cur} aria-current="page">{service.shortTitle || service.title}</span>
        </li>
      </ol>
    </nav>
  );
}

// Self-healing service hero image. Always references the canonical path; fades
// the photo in over a restrained dark placeholder on load, and stays on the
// placeholder if the file is absent — so a page with a missing canonical asset
// shows the dark masthead and the image appears automatically once dropped in.
export function ServiceHeroImage({ src, alt, objectPosition = "center", className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-image-dark ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_25%,rgba(255,255,255,0.05),transparent_60%)]" />
      {src && (
        <img
          src={src}
          alt={alt || ""}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ objectPosition }}
        />
      )}
    </div>
  );
}

// Split service masthead: editorial content left (~54%), large hero image right
// (~46%, bleeding to the viewport edge) on desktop; text + CTAs first then a
// substantial 16:9 image band on mobile. Two CTAs: a specific primary
// (commission) and a restrained secondary (scroll to enquiries). No rounded
// card, shadow, gradient panel or heavy overlay — only a seam blend at the split.
export function ServiceMasthead({ discipline, service, eyebrow, heading, standfirst, primaryLabel, onPrimary, secondaryLabel, onSecondary, gold, image, imageAlt, objectPosition }) {
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_12%_0%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-white/10" />

      {/* Desktop hero image — right, bleeds to the viewport edge */}
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <ServiceHeroImage src={image} alt={imageAlt} objectPosition={objectPosition} className="h-full w-full" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-image-dark via-image-dark/40 to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-accent/40" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <ServiceBreadcrumbs discipline={discipline} service={service} />
        <div className="grid items-center py-12 lg:min-h-[480px] lg:py-20">
          <div className="max-w-xl lg:max-w-[47%]">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
            <h1 className="mt-6 font-display text-[2rem] font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem]">{heading}</h1>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/72">{standfirst}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button type="button" onClick={withCtaTracking(primaryLabel, "service_masthead", onPrimary)} className={`inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${primaryBtn(gold)}`}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
              {secondaryLabel && (
                <button type="button" onClick={withCtaTracking(secondaryLabel, "service_masthead_secondary", onSecondary)} className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70">
                  {secondaryLabel}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile hero image band — after the text and CTAs */}
        {image && (
          <div className="-mx-5 pb-1 lg:hidden">
            <ServiceHeroImage src={image} alt={imageAlt} objectPosition={objectPosition} className="aspect-[16/9] w-full" />
          </div>
        )}
      </div>
    </section>
  );
}

// Two-column editorial statement (light). Heading left, paragraphs right.
export function TwoColStatement({ eyebrow, heading, paragraphs, gold, raised }) {
  return (
    <section className={raised ? "bg-canvas-raised" : "bg-canvas"}>
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">{heading}</h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:pt-3">
            {paragraphs.map((p, i) => (
              <p key={i} className="max-w-xl text-[15px] leading-7 text-ink-soft">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Horizontal stepped chain (before → during → after, or a method). tone light/dark.
export function Chain({ eyebrow, heading, intro, steps, tone = "dark", gold }) {
  const dark = tone === "dark";
  const bg = dark ? "bg-image-dark text-white" : "bg-canvas";
  const rule = dark ? "border-white/15" : "border-ink/15";
  const num = dark ? "text-white/35" : "text-ink-muted";
  const head = dark ? "text-white" : "text-ink";
  const body = dark ? "text-white/60" : "text-ink-soft";
  const introC = dark ? "text-white/60" : "text-ink-soft";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
          <h2 className={`mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem] ${head}`}>{heading}</h2>
          {intro && <p className={`mt-5 text-sm leading-7 ${introC}`}>{intro}</p>}
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:items-stretch">
          {steps.map((s, i) => (
            <div key={s.label} className="contents">
              <div className={`flex-1 border-t pt-6 md:border-t-0 md:pt-0 ${rule}`}>
                <div className="flex items-center gap-3">
                  <span className={`font-display text-lg font-light tabular-nums ${num}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className={`h-px w-6 ${accBg(gold)}`} />
                </div>
                <h3 className={`mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] ${head}`}>{s.label}</h3>
                <p className={`mt-3 max-w-[16rem] text-sm leading-6 ${body}`}>{s.line}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex items-center justify-start py-3 md:justify-center md:px-1 md:py-0 ${acc(gold)}`}>
                  <ArrowDown className="h-4 w-4 md:hidden" strokeWidth={1.75} aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" strokeWidth={1.75} aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Factors resolving into a synthesis node (dark). Optional decision chips.
export function ConvergeFramework({ eyebrow, heading, intro, items, converge, gold }) {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">{heading}</h2>
          {intro && <p className="mt-5 text-sm leading-7 text-white/60">{intro}</p>}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {items.map((f, i) => (
              <div key={f.label} className="flex flex-col bg-image-dark p-6 lg:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-light text-white/35 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className={`h-px w-6 ${accBg(gold)}`} />
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">{f.label}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-white/70">{f.line}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center bg-image-dark p-7 lg:col-span-4 lg:p-9">
            <ArrowRight className={`h-5 w-5 ${acc(gold)}`} strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">Resolves into</p>
            <p className="mt-2 font-display text-[1.7rem] font-normal leading-tight text-white">{converge.label}</p>
            {converge.caption && <p className="mt-4 text-sm leading-6 text-white/60">{converge.caption}</p>}
            {converge.chips && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 pt-5">
                {converge.chips.map((c) => (
                  <span key={c} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">{c}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Capability wall — dark-header cards (what we assess / what the advisory covers).
export function CapabilityWall({ eyebrow, heading, intro, items, raised = true }) {
  return (
    <section className={raised ? "bg-canvas-raised" : "bg-canvas"}>
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
              <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
              {eyebrow}
            </h2>
            <p className="mt-5 max-w-xl font-display text-[1.7rem] font-light leading-[1.14] tracking-tight text-ink sm:text-[2rem]">{heading}</p>
          </div>
          {intro && <div className="lg:col-span-6 lg:pt-2"><p className="max-w-xl text-[15px] leading-7 text-ink-soft">{intro}</p></div>}
        </div>
        <div className="mt-10 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.title} className="flex flex-col border-b border-r border-ink/15 bg-canvas">
              <div className="relative flex min-h-[120px] flex-col justify-between bg-image-dark p-6 lg:p-7">
                <span className="font-display text-sm font-light text-white/35 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="h-px w-8 bg-accent" />
                  <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">{item.title}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <p className="text-sm leading-[1.6] text-ink-soft">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Numbered deliverables list (light).
export function Deliverables({ eyebrow, heading, intro, items, gold }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">{heading}</h2>
            {intro && <p className="mt-6 max-w-md text-[15px] leading-7 text-ink-soft">{intro}</p>}
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {items.map((o, i) => (
                <div key={o.title} className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-b border-ink/15 py-6">
                  <span className="font-display text-sm font-light text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-normal leading-snug text-ink">{o.title}</h3>
                    {o.body && <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft">{o.body}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bulleted trigger / list section (tone light or dark).
export function BulletList({ eyebrow, heading, intro, items, tone = "dark", gold }) {
  const dark = tone === "dark";
  const bg = dark ? "bg-image-dark text-white" : "bg-canvas-raised";
  const rule = dark ? "border-white/15" : "border-ink/15";
  const head = dark ? "text-white" : "text-ink";
  const body = dark ? "text-white/75" : "text-ink-soft";
  const introC = dark ? "text-white/60" : "text-ink-soft";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
            <h2 className={`mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.5rem] ${head}`}>{heading}</h2>
            {intro && <p className={`mt-6 max-w-md text-[15px] leading-7 ${introC}`}>{intro}</p>}
          </div>
          <div className="lg:col-span-7">
            <ul className={`border-t ${rule}`}>
              {items.map((item) => (
                <li key={item} className={`flex gap-4 border-b py-5 text-[15px] leading-7 ${rule} ${body}`}>
                  <span aria-hidden="true" className={`mt-3 h-px w-5 shrink-0 ${accBg(gold)}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prominent editorial principle statement (dark).
export function Principle({ statement, body, gold }) {
  return (
    <section className="border-t border-white/10 bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className={`h-px w-16 ${accBg(gold)}`} />
          <p className="mt-8 font-display text-[1.7rem] font-light leading-[1.22] tracking-tight sm:text-3xl lg:text-[2.5rem]">{statement}</p>
          {body && <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/70">{body}</p>}
        </div>
      </div>
    </section>
  );
}

// Related services — canonical set only, capability-wall cards (light).
export function RelatedServices({ ids }) {
  const related = (ids || []).map((id) => servicesById[id]).filter(Boolean);
  if (related.length === 0) return null;
  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-ink/15 pb-5">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Related services
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel, i) => {
            const live = isServiceRouteLive(rel);
            const inner = (
              <>
                <div className="relative flex min-h-[120px] flex-col justify-between bg-image-dark p-6 lg:p-7">
                  <span className="font-display text-sm font-light text-white/35 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="h-px w-8 bg-accent" />
                    <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">{rel.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <p className="text-sm leading-[1.6] text-ink-soft">{rel.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {live ? "View service" : "Enquire"}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </span>
                </div>
              </>
            );
            const cardClass = "group flex flex-col border-b border-r border-ink/15 bg-canvas transition-colors hover:bg-canvas-raised";
            return live ? (
              <Link key={rel.id} to={servicePath(rel)} aria-label={`${rel.title} — view service`} className={cardClass}>{inner}</Link>
            ) : (
              <a key={rel.id} href={emailHref} aria-label={`${rel.title} — enquire`} className={cardClass}>{inner}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Related intelligence & analysis links (light). `intel` and `analysis` are
// arrays of resolved records; `reports` are resolved report objects.
export function RelatedIntelligence({ heading = "Related intelligence", intel = [], analysis = [] }) {
  if (intel.length === 0 && analysis.length === 0) return null;
  const fmt = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
  };
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-ink/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            {heading}
          </h2>
          <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Intelligence feed
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="mt-2">
          {analysis.map((it) => (
            <Link key={it.slug} to={it.path} className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-ink/15 py-6 sm:grid-cols-[170px_1fr] sm:items-baseline">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{it.category} <span className="text-ink-muted">· {it.dateLabel}</span></div>
              <h3 className="max-w-3xl font-display text-lg font-normal leading-snug text-ink transition-colors group-hover:text-accent sm:text-xl">{it.displayTitle || it.title}</h3>
            </Link>
          ))}
          {intel.map((it) => (
            <Link key={it.id} to={`/intelligence/${it.slug}`} className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-ink/15 py-6 sm:grid-cols-[170px_1fr] sm:items-baseline">
              <div className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted tabular-nums">{fmt(it.eventDate || it.publishedAt)}</div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{it.category}</p>
                <h3 className="mt-1 max-w-3xl font-display text-lg font-normal leading-snug text-ink transition-colors group-hover:text-accent sm:text-xl">{it.headline}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Conversion band (light). Service-specific CTA copy; preserves service context.
export function EnquiryBand({ id, eyebrow, heading, body, ctaLabel, onPrimary, gold }) {
  return (
    <section id={id} className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${acc(gold)}`}>{eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">{heading}</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">{body}</p>
          <button type="button" onClick={withCtaTracking(ctaLabel, "enquiry_band", onPrimary)} className={`mt-9 inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${primaryBtn(gold)}`}>
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
          <div className="mt-6">
            <a href={emailHref} className="text-sm text-ink-soft transition-colors hover:text-accent">{email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mid-page restrained contextual CTA (light hairline band).
export function MidCta({ prompt, label, onClick, gold }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-4 border-y border-ink/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-xl font-light leading-snug text-ink sm:text-2xl">{prompt}</p>
          <button type="button" onClick={withCtaTracking(label, "mid_cta", onClick)} className={`group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${acc(gold)}`}>
            {label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
