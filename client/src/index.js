import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ApolloProvider from "./ApolloProvider";

//translation service
import "./locales/i18n";

//context
import ThemeModeContextProvider from "./contexts/ThemeModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeModeContextProvider>
      <BrowserRouter>{ApolloProvider}</BrowserRouter>
    </ThemeModeContextProvider>
  </React.StrictMode>
);
