
import React, { useState } from 'react';
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/hooks/useLanguage";
import { useParticleSystem } from "@/hooks/useParticleSystem";
import CookieBanner from "@/components/CookieBanner";
import CookieSettings from "@/components/CookieSettings";
import Header from "@/components/Header";
import GlobalStyles from "@/components/GlobalStyles";
import Footer from "@/components/Footer";

const Index = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const { hasConsent, acceptAll, acceptNecessary, saveConsent } = useCookieConsent();
  const { currentLang, currentLangKey, setLanguage, languageOrder } = useLanguage();

  useParticleSystem();

  return (
    <>
      <GlobalStyles />

      <Header
        currentLang={currentLang}
        currentLangKey={currentLangKey}
        setLanguage={setLanguage}
        languageOrder={languageOrder}
      />

      {hasConsent === false && (
        <CookieBanner
          currentLang={currentLang}
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onShowSettings={() => setShowCookieSettings(true)}
        />
      )}

      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        onSave={saveConsent}
        currentLang={currentLang}
      />

      <Footer
        currentLang={currentLang}
        onOpenCookieSettings={() => setShowCookieSettings(true)}
      />
    </>
  );
};

export default Index;
