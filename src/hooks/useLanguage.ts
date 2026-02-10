
import { useState, useEffect } from 'react';
import { languages, languageOrder, LanguageKey } from '@/data/languages';

export const useLanguage = () => {
  // Start with Italian (index 1)
  const [currentLangIndex, setCurrentLangIndex] = useState(1);
  const currentLangKey = languageOrder[currentLangIndex];
  const currentLang = languages[currentLangKey];

  const setLanguage = (key: LanguageKey) => {
    const index = languageOrder.indexOf(key);
    if (index !== -1) {
      setCurrentLangIndex(index);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", currentLang.htmlLang);
  }, [currentLang]);

  return {
    currentLang,
    currentLangKey,
    setLanguage,
    languageOrder
  };
};
