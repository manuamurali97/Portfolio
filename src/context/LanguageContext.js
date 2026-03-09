import { createContext, useContext, useState, useEffect } from "react";
import en from "../i18n/en.json";
import de from "../i18n/de.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "de" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const translations = language === "en" ? en : de;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);