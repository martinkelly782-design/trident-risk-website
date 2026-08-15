import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { openCookiePreferences } from "../../lib/consent";

// Shared shell for the three legal pages (Privacy, Terms, Cookies). Trident
// styling: dark restrained masthead, warm off-white article body, Newsreader
// headings, Inter body, thin rules, a numbered table of contents. Readability
// first — no cards, gradients, shadows, icons or legal clichés. Content is
// data-driven: `sections` is an array of { id, heading, blocks } where each
// block is a string (paragraph), { subhead }, { list }, { table } or
// { action: "cookie-preferences" }.

function Block({ block }) {
  if (typeof block === "string") {
    return <p className="mt-4 text-[15px] leading-8 text-ink-soft first:mt-0">{block}</p>;
  }
  if (block.subhead) {
    return <h3 className="mt-7 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">{block.subhead}</h3>;
  }
  if (block.list) {
    return (
      <ul className="mt-4 space-y-2.5">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-7 text-ink-soft">
            <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
            <span className="min-w-0 break-words">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.table) {
    return (
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-[13px] leading-6">
          <thead>
            <tr className="border-b border-ink/25">
              {block.table.head.map((h) => (
                <th key={h} className="py-3 pr-4 align-top text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-ink/12 align-top">
                {row.map((cell, ci) => (
                  <td key={ci} className="py-3 pr-4 text-ink-soft"><span className="break-words">{cell}</span></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.action === "cookie-preferences") {
    return (
      <button
        type="button"
        onClick={openCookiePreferences}
        className="mt-6 inline-flex items-center gap-2 border border-ink/25 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Cookie preferences
      </button>
    );
  }
  return null;
}

export default function LegalPage({ eyebrow = "Legal", title, updated, intro, sections }) {
  return (
    <main className="bg-canvas text-ink">
      {/* Dark masthead */}
      <section className="relative overflow-hidden bg-image-dark text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[900px] px-5 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-white" aria-current="page">{title}</span>
              </li>
            </ol>
          </nav>
          <div className="py-14 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl">{title}</h1>
            {intro && <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/72">{intro}</p>}
            {updated && <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">Last updated: {updated}</p>}
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="border-b border-ink/12 bg-canvas-raised">
        <div className="mx-auto max-w-[900px] px-5 py-10 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">Contents</p>
          <ol className="mt-5 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.id} className="flex gap-3 text-[14px] leading-6">
                <span className="font-display text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <a href={`#${s.id}`} className="text-ink-soft transition-colors hover:text-accent">{s.heading}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[900px] px-5 py-14 lg:px-8 lg:py-20">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-t border-ink/12 py-10 first:border-t-0 first:pt-0">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-light text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-2xl font-normal leading-snug text-ink sm:text-[1.9rem]">{s.heading}</h2>
              </div>
              <div className="mt-5 sm:pl-8">
                {s.blocks.map((b, bi) => (
                  <Block key={bi} block={b} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
