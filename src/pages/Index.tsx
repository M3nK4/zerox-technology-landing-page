
// GitHub Actions deploy trigger - Updated for zerox.technology domain
import React, { useState } from 'react';
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/hooks/useLanguage";
import { useParticleSystem } from "@/hooks/useParticleSystem";
import CookieBanner from "@/components/CookieBanner";
import CookieSettings from "@/components/CookieSettings";
import Header from "@/components/Header";
import EmailModal from "@/components/EmailModal";
import GlobalStyles from "@/components/GlobalStyles";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const { hasConsent, acceptAll, acceptNecessary, saveConsent } = useCookieConsent();
  const { currentLang, currentLangIndex, languageOrder, cycleLanguage } = useLanguage();
  
  // Initialize particle system
  useParticleSystem();

  return (
    <>
      <GlobalStyles />

      <Header 
        currentLang={currentLang}
        onMore={() => setShowModal(true)}
        cycleLanguage={cycleLanguage}
      />

      <EmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        currentLang={currentLang}
        languageOrder={languageOrder}
        currentLangIndex={currentLangIndex}
      />

      {/* Cookie Banner */}
      {!hasConsent && (
        <CookieBanner
          currentLang={currentLang}
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onShowSettings={() => setShowCookieSettings(true)}
        />
      )}

      {/* Cookie Settings Modal */}
      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        onSave={saveConsent}
        currentLang={currentLang}
      />
    </>
  );
};

export default Index;
