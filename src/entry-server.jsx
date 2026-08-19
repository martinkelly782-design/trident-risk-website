import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

// Server/prerender entry. Renders the app's body HTML for a given URL at build
// time (no browser, no analytics, no effects). The document head is injected
// separately by scripts/prerender.mjs from the same route table used at runtime,
// so the prerendered head matches what <Seo> produces on the client. The tree
// mirrors the client entry (StrictMode > Router > App) so hydration lines up.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
