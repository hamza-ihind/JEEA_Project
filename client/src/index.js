import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ApolloProvider from "./ApolloProvider";

//translation service
import "./locales/i18n";

//context
import ThemeModeContextProvider from "./contexts/ThemeModeContext";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeModeContextProvider>
      <BrowserRouter>
        <AuthProvider>{ApolloProvider}</AuthProvider>
      </BrowserRouter>
    </ThemeModeContextProvider>
  </React.StrictMode>
);
