# Trident website analytics

Internal reference (not public website content) for the privacy-safe analytics on
tridentrisk.org. Two complementary systems, deliberately kept separate:

- **Google Analytics 4** — anonymous *behavioural* data (pages, topics, regions,
  services, reports, journeys, conversion rates). Contains **no PII**.
- **Web3Forms lead records** — *identifying* commercial interest (email, optional
  organisation, report requested, source context) delivered to Trident by email.

The only link between them is context (report + time + source page). Emails are
**never** sent to GA and are never stored in the browser.

## GA property

- GA4 Measurement ID: `G-5HWW9CEKW4` (defined in `src/lib/consent.js`).
- Config: `anonymize_ip: true`, `send_page_view: false` (page views are sent
  manually so SPA routes are counted exactly once).

## Consent model

- GA is **not** in `index.html`. It is injected only after the visitor grants
  analytics consent (`src/lib/consent.js` → `loadGoogleAnalytics`).
- All events go through `trackEvent()` / `trackPageView()` in
  `src/lib/analytics.js`, which are **no-ops unless** analytics consent is granted
  *and* the tag has loaded. There are no scattered direct `gtag` calls in
  components.
- Rejecting analytics (or not choosing) → zero GA network requests and zero
  events. Choice is stored in `localStorage` (`trident-cookie-consent`).

## PII rule (hard)

`trackEvent()` sanitises every event: it drops known PII keys
(`email`, `name`, `organisation`, `company`, `phone`, `message`, …) and drops any
value that looks like an email address. Never pass identifying data to
`trackEvent`. Identifying data belongs only in the Web3Forms submission
(`src/lib/reportAccess.js`).

## Page views

`AnalyticsRouteTracker` (`src/components/system/AnalyticsRouteTracker.jsx`,
mounted in `App.jsx`) fires one `page_view` per SPA navigation. The initial
/consent-time page view is fired once from `consent.js`. Together: exactly one
page view per route, covering all page families (home, six Expertise pages, each
flagship Service, each Intelligence note, each Insight, Contact/Request, legal).

## Event taxonomy

| Event | Fires when | Key parameters |
|-------|-----------|----------------|
| `page_view` | every route change / initial load | `page_path`, `page_title`, `page_location` |
| `service_view` | a flagship Service page opens | `service`, `content_title`, `expertise` |
| `intelligence_view` | an Intelligence note opens | `content_slug`, `content_title`, `region`, `category` |
| `insight_view` | an Insight (incl. Iran) opens | `content_slug`, `content_title`, `region` |
| `report_gate_open` | report access panel opens | `report_id`, `report_title`, `region`, `source_page` |
| `report_access_submit` | access form submits successfully | `report_id`, `report_title`, `region`, `source_page` |
| `report_download` | report PDF is opened | `report_id`, `report_title`, `region`, `source_page` |
| `cta_click` | a shared Service CTA is clicked | `cta_name`, `cta_location` |
| `contact_click` | a Contact-page email link is clicked | `cta_name`, `cta_location` |
| `request_support_start` | `/request` opens | `service` (optional) |
| `request_support_submit` | `/request` form submits | `service` (optional) |

### Parameter vocabulary (all non-PII)

`content_type`, `content_slug`, `content_title`, `expertise`, `service`,
`region`, `report_id`, `report_title`, `cta_name`, `cta_location`,
`source_page`, `category`.

**Never** as a parameter: `email`, `name`, `organisation`/`company`, `phone`,
free-text message.

## Report funnel

For each report, the sequence gives a full conversion funnel:

```
insight_view / intelligence_view   (report reader)
        → report_gate_open         (intent)
        → report_access_submit     (email lead captured)
        → report_download          (PDF opened)
```

Answers: which reports attract the most readers; which generate the most email
leads; reader→lead conversion rate; which `source_page` drives downloads; which
`region` creates the most interest.

## Service funnel

```
(discipline) page_view  →  service_view  →  cta_click  →  request_support_start/submit
```

Answers: which services get the most views; which generate the most CTA clicks;
which Expertise/Intelligence/Insight pages feed which Service (via `source_page`
and journey order).

## Suggested GA4 Explorations

1. **Content performance** — Free-form. Dimension: `page_path` / `content_type`.
   Metrics: views, engaged sessions, event count (`cta_click`).
2. **Report funnel** — Funnel exploration: `report_gate_open` → `report_access_submit`
   → `report_download`, breakdown by `report_id`.
3. **Service funnel** — Funnel exploration: `service_view` → `cta_click`
   (→ `request_support_submit`), breakdown by `service`.
4. **Regional interest** — Free-form. Dimension: `region`. Metric: event count
   across `intelligence_view` / `insight_view` / `report_download`.
5. **Journeys** — Path exploration from `intelligence_view` / `service_view`.

## Recommended custom dimensions (register in GA4 admin if useful)

Event-scoped, **non-PII only**: `content_type`, `content_slug`, `expertise`,
`service`, `region`, `report_id`, `report_title`, `cta_name`, `cta_location`,
`source_page`, `category`.

**Do not** register `email`, `name`, or `organisation` as custom dimensions.

## UTM / acquisition

Standard GA acquisition (`source`, `medium`, `campaign`, `referrer`) is preserved.
The site safely supports `utm_source` / `utm_medium` / `utm_campaign` campaign
URLs (e.g. LinkedIn, email briefings). Do not put client or individual names into
UTMs. No PII is introduced through tracked query strings — `page_path` is derived
from the router pathname + search, and `trackEvent` strips email-like values.
