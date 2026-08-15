import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Visible breadcrumb trail (Phase 8), styled with the approved design tokens.
// Pure presentation: it renders the trail it is given — the matching
// BreadcrumbList structured data is emitted separately by Seo.jsx from the same
// route-table trail, so the two never drift.
//
// `items` is an ordered list of { name, path } segments (root first). The final
// segment renders as the current page (not a link). Renders nothing for a trail
// of fewer than two segments (e.g. the homepage).
export default function Breadcrumbs({ items = [], className = "" }) {
  if (!Array.isArray(items) || items.length < 2) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={crumb.path} className="flex items-center gap-x-2">
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-hairline"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span className="text-ink" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="transition-colors hover:text-accent"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
