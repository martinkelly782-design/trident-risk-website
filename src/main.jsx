import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initConsent } from "./lib/consent";
import "./index.css";

// Re-apply stored consent at bootstrap (before render) so that, for a returning
// visitor who accepted analytics, the GA tag is initialised before any page
// component's mount effect fires — otherwise content-view events on a directly
// loaded page would be dropped because GA was not yet ready.
initConsent();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);