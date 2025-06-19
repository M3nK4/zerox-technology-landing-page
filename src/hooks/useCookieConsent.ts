
import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const useCookieConsent = () => {
  // Inizializziamo con null per indicare che non abbiamo ancora controllato
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');
    
    console.log('Checking cookie consent:', savedConsent); // Debug log
    
    if (savedConsent === 'true') {
      setHasConsent(true);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    } else {
      // Impostiamo esplicitamente a false solo se non c'è consenso
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

    console.log('Cookie consent saved:', cookiePrefs); // Debug log

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
    console.log('Accepting all cookies'); // Debug log
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const acceptNecessary = () => {
    console.log('Accepting necessary cookies only'); // Debug log
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
