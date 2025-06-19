
import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');
    
    // Se non c'è consenso salvato, hasConsent rimane false (banner deve apparire)
    if (savedConsent === 'true') {
      setHasConsent(true);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    } else {
      // Assicuriamoci che hasConsent sia false se non c'è consenso
      setHasConsent(false);
    }
  }, []);

  const saveConsent = (newPreferences: Record<string, boolean>) => {
    const cookiePrefs: CookiePreferences = {
      necessary: true, // Always true
      analytics: newPreferences.analytics || false,
      marketing: newPreferences.marketing || false
    };

    setPreferences(cookiePrefs);
    setHasConsent(true);
    
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePrefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Initialize analytics if allowed
    if (cookiePrefs.analytics) {
      console.log('Analytics cookies accepted');
    }

    // Initialize marketing if allowed
    if (cookiePrefs.marketing) {
      console.log('Marketing cookies accepted');
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-preferences');
    localStorage.removeItem('cookie-consent-date');
    setHasConsent(false);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  return {
    hasConsent,
    preferences,
    saveConsent,
    acceptAll,
    acceptNecessary,
    resetConsent
  };
};
