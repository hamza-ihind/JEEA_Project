import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

//translation service
import "./locales/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
