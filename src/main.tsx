import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// i18n
import "./locales/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
