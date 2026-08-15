import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../system/SectionHeader";
import { getRoute } from "../../routes/routeConfig";

// Related analysis (Phase 9).
// Only genuine, published analysis is shown. The single existing analysis is the
// Iran maritime legal risk briefing, referenced by id in the discipline data
// model. Title and description are reused from the Phase 8 route table — nothing
// is invented. Any id without a real, routed analysis is skipped, and if nothing
// resolves the section does not render at all.

const KNOWN_ANALYSES = {
  "iran-maritime-legal-risk-briefing": {
    path: "/iran-maritime-legal-risk-briefing",
    displayTitle: "Iran Maritime Legal Risk Briefing",
    kicker: "Briefing",
  },
};

function stripBrand(description) {
  return description || "";
}

function resolveAnalyses(relatedAnalysisIds = []) {
  return relatedAnalysisIds
    .map((id) => {
      const known = KNOWN_ANALYSES[id];
      if (!known) return null;
      const route = getRoute(known.path);
      if (!route) return null;
      return {
        id,
        path: known.path,
        title: known.displayTitle,
        kicker: known.kicker,
        description: stripBrand(route.description),
      };
    })
    .filter(Boolean);
}

export default function RelatedAnalysis({ discipline }) {
  const analyses = resolveAnalyses(discipline.relatedAnalysisIds);
  if (analyses.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Related Analysis" />

        <ul className="mt-4 divide-y divide-hairline border-b border-hairline">
          {analyses.map((analysis) => (
            <li key={analysis.id}>
              <Link
                to={analysis.path}
                className="group grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
              >
                <div className="min-w-0">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
                    {analysis.kicker}
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-light leading-snug tracking-tight text-ink">
                    {analysis.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
                    {analysis.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                  Read briefing
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
