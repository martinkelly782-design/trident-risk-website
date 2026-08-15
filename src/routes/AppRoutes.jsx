import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import DisciplinePageRoute from "../pages/DisciplinePageRoute";
import ServicePageRoute from "../pages/ServicePageRoute";
import ExpertiseIndex from "../pages/ExpertiseIndex";
import ServicesIndex from "../pages/ServicesIndex";
import IntelligenceIndex from "../pages/IntelligenceIndex";
import IntelligenceDetailPage from "../pages/IntelligenceDetailPage";
import InsightsIndex from "../pages/InsightsIndex";
import InsightArticlePage from "../pages/InsightArticlePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsPage from "../pages/TermsPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";
import IranLegalBriefingPage from "../IranLegalBriefingPage";
import Seo from "../components/seo/Seo";
import { services } from "../data/serviceIndex";
import { servicePath, isServiceRouteLive } from "./routeConfig";
import { RequestPage } from "../App.jsx";

// Central route system (Phase 8; discipline routes migrated in Phase 9; service
// routes added in Phase 10). Owns the site's <Routes> table and the per-route
// document head via a single <Seo> driven by the current location. Discipline
// landing pages and the implemented service pages render shared, data-driven
// templates. A catch-all renders the 404 page with no redirect, so unknown or
// not-yet-implemented service slugs 404 rather than resolving to a discipline.

// The six discipline landing routes. Legal & Evidence is now canonical at
// "/legal-evidence"; "/legal" is preserved below as a redirect.
const DISCIPLINE_ROUTES = [
  { path: "/maritime-intelligence", disciplineId: "maritime-intelligence" },
  { path: "/maritime-security", disciplineId: "maritime-security" },
  { path: "/maritime-cyber", disciplineId: "maritime-cyber" },
  { path: "/geopolitical-analysis", disciplineId: "geopolitical-analysis" },
  { path: "/market-entry", disciplineId: "market-entry" },
  { path: "/legal-evidence", disciplineId: "legal-evidence" },
];

// Implemented service routes (Phase 10A: the six reference services).
const SERVICE_ROUTES = services.filter((service) => isServiceRouteLive(service));

export default function AppRoutes({
  onHome,
  onOpenPage,
  onRequest,
  requestedService,
}) {
  const location = useLocation();

  return (
    <>
      {/* One head manager for every route, including the 404 fallback. */}
      <Seo pathname={location.pathname} />

      <Routes>
        <Route path="/" element={<HomePage onOpenPage={onOpenPage} />} />

        {/* Primary-nav index routes (IA correction). */}
        <Route path="/expertise" element={<ExpertiseIndex />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/intelligence" element={<IntelligenceIndex />} />
        <Route path="/intelligence/:slug" element={<IntelligenceDetailPage />} />
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/:slug" element={<InsightArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />

        <Route
          path="/iran-maritime-legal-risk-briefing"
          element={<IranLegalBriefingPage />}
        />

        {DISCIPLINE_ROUTES.map(({ path, disciplineId }) => (
          <Route
            key={path}
            path={path}
            element={
              <DisciplinePageRoute
                disciplineId={disciplineId}
                onRequest={onRequest}
              />
            }
          />
        ))}

        {/* Preserve the legacy legal path as a redirect to the canonical route. */}
        <Route path="/legal" element={<Navigate to="/legal-evidence" replace />} />

        {SERVICE_ROUTES.map((service) => (
          <Route
            key={service.id}
            path={servicePath(service)}
            element={
              <ServicePageRoute serviceId={service.id} onRequest={onRequest} />
            }
          />
        ))}

        <Route
          path="/request"
          element={<RequestPage service={requestedService} onBack={onHome} />}
        />

        {/* Catch-all: render the 404 page, no automatic redirect. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
