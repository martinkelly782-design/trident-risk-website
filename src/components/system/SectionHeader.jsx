import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

// Shared compact editorial section header: eyebrow title (left), optional
// supporting line, optional right-aligned link. Used by the homepage sections
// and reused across page templates in later phases.
export default function SectionHeader({
  title,
  supporting,
  linkLabel,
  linkAriaLabel,
  onLinkClick,
}) {
  function handleLink(event) {
    event.preventDefault();
    onLinkClick?.(event);
  }

  return (
    <div className="flex flex-col gap-2 border-b border-hairline pb-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <Eyebrow as="h2">{title}</Eyebrow>
        {supporting && <p className="text-xs text-ink-soft">{supporting}</p>}
      </div>

      {linkLabel && (
        <a
          href="#"
          onClick={handleLink}
          aria-label={linkAriaLabel || linkLabel}
          className="inline-flex shrink-0 items-center gap-2 rounded-sm py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-accent"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      )}
    </div>
  );
}
