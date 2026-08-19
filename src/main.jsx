import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initConsent } from "./lib/consent";
import "./index.css";

// Re-apply stored consent at bootstrap (before render) so that, for a returning
// visitor who accepted analytics, the GA tag is initialised before any page
// component's mount effect fires — otherwise content-view events on a directly
// loaded page would be dropped because GA was not yet ready.
initConsent();

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production routes are prerendered to static HTML (scripts/prerender.mjs), so
// the root already has server-rendered markup to hydrate. In dev the shell is
// empty, so mount a fresh root instead.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}