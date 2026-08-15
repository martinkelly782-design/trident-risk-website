// One editorial column in the Latest Intelligence grid.
// Presentational only — matches the section background so the grid's 1px
// gap renders as a continuous thin-grey divider between columns.
export default function IntelligenceCard({ item }) {
  const { category, time, title, date, readTime, image, alt } = item;

  return (
    <article className="group flex flex-col bg-canvas">
      {/* Image across the upper portion, dark maritime treatment */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          style={{ filter: "grayscale(0.25) brightness(0.72) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-image-dark/35" />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-6 pt-4">
        {/* Metadata line: category (with minimal red accent) + UTC timestamp */}
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
            {category}
          </span>
          <span className="shrink-0 text-[10px] font-medium tracking-[0.12em] text-ink-soft tabular-nums">
            {time}
          </span>
        </div>

        {/* Headline */}
        <h3 className="mt-3 font-display text-[17px] font-medium leading-snug text-ink">
          {title}
        </h3>

        {/* Date · reading time */}
        <div className="mt-auto pt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft">
          {date} <span className="text-slate-300">·</span> {readTime}
        </div>
      </div>
    </article>
  );
}
