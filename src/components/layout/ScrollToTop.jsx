import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Navigation-behaviour fix: every NEW route navigation must open at the top of
// the destination page (so the hero is always shown), while intentional
// same-page scrolling is left untouched.
//
// - Keyed to `pathname` only. In-page actions (hero buttons, EXPLORE SERVICES,
//   enquiry-section scrolls) use scrollIntoView WITHOUT changing the pathname,
//   so they never trigger a reset.
// - Skips POP (browser Back/Forward), letting the browser's native scroll
//   restoration return the user to their prior position when it can.
// - useLayoutEffect resets before paint, so there is no visible jump.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") return;
    // "instant" forces a true jump. The site sets a global
    // `html { scroll-behavior: smooth }`, and per the CSSOM spec `behavior:
    // "auto"` defers to that property — which would animate the reset and flash
    // the destination mid-page on every navigation. "instant" overrides it here
    // only, leaving intentional in-page anchor scrolls smooth as designed.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, navigationType]);

  return null;
}
