
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
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const { hasConsent, acceptAll, acceptNecessary, saveConsent, resetConsent } = useCookieConsent();
  const { currentLang, currentLangIndex, languageOrder, cycleLanguage } = useLanguage();
  
  // Initialize particle system
  useParticleSystem();

  console.log('Cookie consent status:', hasConsent); // Debug log

  return (
    <>
      <GlobalStyles />

      {/* Pulsante temporaneo per testare il reset del consenso */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={resetConsent}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1"
        >
          Reset Cookie Consent (Test)
        </Button>
      </div>

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

      {/* Cookie Banner - mostra solo quando hasConsent è esplicitamente false */}
      {hasConsent === false && (
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
