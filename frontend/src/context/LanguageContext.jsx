import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultLanguage,
  languageOptions,
  translations,
} from "@/lib/translations";

const STORAGE_KEY = "prithvix-language";

const LanguageContext = createContext(null);

const getBrowserLanguage = () => {
  if (typeof window === "undefined") return defaultLanguage;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;

  const browserLanguage = (window.navigator.language || "").toLowerCase();
  if (browserLanguage.startsWith("hi")) return "hi";
  if (browserLanguage.startsWith("gu")) return "gu";
  return defaultLanguage;
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getBrowserLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
      languageOptions,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
