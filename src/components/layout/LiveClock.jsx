import { useEffect, useState } from "react";

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

const pad = (value) => String(value).padStart(2, "0");

function formatUTC(date) {
  const time = `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())} UTC`;
  const day = `${pad(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  return { time, day };
}

// Client-only clock. State starts empty and is populated inside useEffect so the
// first render is deterministic (no build/prerender or hydration mismatch), then
// it ticks once a minute.
export default function LiveClock({ dark = false }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    // Display is minute-precision, so only re-render when the value actually
    // changes rather than on every tick.
    const tick = () =>
      setNow((prev) => {
        const next = formatUTC(new Date());
        if (prev && prev.time === next.time && prev.day === next.day) {
          return prev;
        }
        return next;
      });
    tick();
    const interval = setInterval(tick, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`hidden text-right leading-tight sm:block ${dark ? "text-white" : "text-[#0f1b2d]"}`}
      aria-live="off"
      suppressHydrationWarning
    >
      <div className="text-[11px] font-semibold tracking-[0.14em] tabular-nums">
        {now ? now.time : "—:— UTC"}
      </div>
      <div className={`text-[10px] font-medium tracking-[0.14em] tabular-nums ${dark ? "text-white/55" : "text-slate-500"}`}>
        {now ? now.day : ""}
      </div>
    </div>
  );
}
