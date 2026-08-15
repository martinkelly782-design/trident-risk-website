import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bookmark, Menu, X } from "lucide-react";
import { navItems } from "../../data/homeContent";
import LiveClock from "./LiveClock";

// The header supports two visual treatments. "light" is the default used on
// interior pages. "dark" is used where the page opens with a dark hero, so the
// masthead merges into the hero as one continuous dark band. Behaviour is
// identical in both. Every primary-nav item now routes to a genuine
// destination (IA correction) via react-router Link.
export default function Header({ onHome, variant = "light" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dark = variant === "dark";

  const closeMenu = () => setMobileMenuOpen(false);

  const headerClass = dark
    ? "sticky top-0 z-[9999] border-b border-white/10 bg-image-dark"
    : "sticky top-0 z-[9999] border-b border-hairline bg-canvas-raised";
  const navClass = dark
    ? "rounded-sm py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
    : "rounded-sm py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink";
  const iconClass = dark
    ? "hidden rounded-sm p-1.5 text-white/60 transition-colors hover:text-white sm:block"
    : "hidden rounded-sm p-1.5 text-ink-muted transition-colors hover:text-ink sm:block";
  const dividerClass = dark ? "hidden h-8 w-px bg-white/15 sm:block" : "hidden h-8 w-px bg-hairline sm:block";
  const menuToggleClass = dark
    ? "-mr-2 rounded-sm p-2 text-white lg:hidden"
    : "-mr-2 rounded-sm p-2 text-ink lg:hidden";

  return (
    <header className={headerClass}>
      <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-8">
        {/* Logo — inverted to white on the dark homepage treatment */}
        <button
          type="button"
          onClick={onHome}
          className="flex shrink-0 items-center"
          aria-label="Trident Risk and Advisory — home"
        >
          <img
            src="/logo.png"
            alt="Trident Risk and Advisory"
            className="h-10 w-auto lg:h-11"
            style={dark ? { filter: "brightness(0) invert(1)" } : undefined}
          />
        </button>

        {/* Centred navigation */}
        <nav className="pointer-events-none absolute inset-x-0 hidden justify-center lg:flex">
          <ul className="pointer-events-auto flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to} onClick={closeMenu} className={navClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-4">
          <button type="button" aria-label="Search" className={iconClass}>
            <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>

          <button type="button" aria-label="Saved briefings" className={iconClass}>
            <Bookmark className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>

          <div className={dividerClass} />

          <LiveClock dark={dark} />

          {/* Mobile / tablet menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className={menuToggleClass}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className={
            dark
              ? "border-t border-white/10 bg-image-dark px-5 py-4 lg:hidden"
              : "border-t border-hairline bg-canvas-raised px-5 py-4 lg:hidden"
          }
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  className={
                    dark
                      ? "block w-full border-b border-white/10 py-3 text-left text-xs font-medium uppercase tracking-[0.16em] text-white/70 last:border-b-0"
                      : "block w-full border-b border-hairline py-3 text-left text-xs font-medium uppercase tracking-[0.16em] text-ink-soft last:border-b-0"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
