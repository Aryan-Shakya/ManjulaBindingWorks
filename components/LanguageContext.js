"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // Default to English as requested

  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'mr')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = (newLang) => {
    const targetLang = newLang || (lang === 'en' ? 'mr' : 'en');
    setLang(targetLang);
    localStorage.setItem('app_lang', targetLang);
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      lang: 'en',
      toggleLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}
