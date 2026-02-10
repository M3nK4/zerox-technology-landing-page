
import React, { useState, useEffect, useRef } from 'react';
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

  // Generate static noise texture via canvas
  const noiseRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = noiseRef.current;
    if (!el) return;
    const size = 128;
    const grain = 2;
    const canvas = document.createElement('canvas');
    canvas.width = size * grain;
    canvas.height = size * grain;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const v = Math.floor(Math.random() * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(x * grain, y * grain, grain, grain);
      }
    }
    el.style.backgroundImage = `url(${canvas.toDataURL()})`;
    el.style.backgroundRepeat = 'repeat';
  }, []);

  return (
    <>
      <GlobalStyles />

      {/* CRT background effects — behind everything */}
      <div className="crt-color-fringe" />
      <div className="crt-interference" />
      <div ref={noiseRef} className="crt-noise" />

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
