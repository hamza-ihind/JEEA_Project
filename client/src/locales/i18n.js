// i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// locales
import enLocales from "./en.json";
import frLocales from "./fr.json";

// use
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      EN: { translations: enLocales },
      FR: { translations: frLocales },
    },
    lng: "EN",
    fallbackLng: "FR",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
