
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
    
    if (savedConsent) {
      setHasConsent(true);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
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
      // Here you would initialize Google Analytics or other tracking
      console.log('Analytics cookies accepted');
    }

    // Initialize marketing if allowed
    if (cookiePrefs.marketing) {
      // Here you would initialize marketing tools
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
