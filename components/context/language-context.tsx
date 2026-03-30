"use client";

//* Libraries imports
import React, { createContext, useContext, useState } from "react";

//* Utils imports
import { i18n, type Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: (typeof i18n)[Lang];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: i18n.en,
  toggle: () => {},
});

export const LanguageProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((l) => (l === "en" ? "pt" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: i18n[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
