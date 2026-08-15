import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../lib/analytics";

// Fires a GA4 page_view on SPA route changes. GA is configured with
// send_page_view:false and the initial page view is emitted by lib/consent when
// the tag loads, so this tracker skips its first render (the landing page) to
// avoid double-counting and then reports every subsequent navigation. A no-op
// unless analytics consent has been granted.
export default function AnalyticsRouteTracker() {
  const { pathname, search } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // Defer one tick so document.title (updated by <Seo>) is current.
    const id = setTimeout(() => trackPageView({ path: pathname + search }), 0);
    return () => clearTimeout(id);
  }, [pathname, search]);

  return null;
}
