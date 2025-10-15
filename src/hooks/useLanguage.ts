
import { useState, useEffect } from 'react';
import { languages, languageOrder, type LanguageKey } from '@/data/languages';

export const useLanguage = () => {
  // Start with Italian (index 1)
  const [currentLangIndex, setCurrentLangIndex] = useState(1);
  const currentLang = languages[languageOrder[currentLangIndex]];

  const cycleLanguage = () => {
    setCurrentLangIndex((prev) => (prev + 1) % languageOrder.length);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", currentLang.htmlLang);
  }, [currentLang]);

  return {
    currentLang,
    currentLangIndex,
    languageOrder,
    cycleLanguage
  };
};
