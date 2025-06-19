
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CookieBannerProps {
  currentLang: {
    cookieBanner: {
      title: string;
      description: string;
      acceptAll: string;
      acceptNecessary: string;
      settings: string;
      privacyPolicy: string;
    };
  };
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
  onShowSettings: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  currentLang,
  onAcceptAll,
  onAcceptNecessary,
  onShowSettings
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    onAcceptAll();
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    onAcceptNecessary();
    setIsVisible(false);
  };

  const handleShowSettings = () => {
    onShowSettings();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-green-500/30 p-3 md:p-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Header e descrizione */}
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-sm md:text-base mb-1 md:mb-2 font-mono">
              {currentLang.cookieBanner.title}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-mono">
              {currentLang.cookieBanner.description}
            </p>
          </div>
          
          {/* Pulsanti */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <Button
              onClick={handleAcceptAll}
              className="bg-green-500 hover:bg-green-600 text-black font-mono text-xs md:text-sm px-4 py-2 h-auto"
            >
              {currentLang.cookieBanner.acceptAll}
            </Button>
            <Button
              onClick={handleAcceptNecessary}
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono text-xs md:text-sm px-4 py-2 h-auto"
            >
              {currentLang.cookieBanner.acceptNecessary}
            </Button>
            <Button
              onClick={handleShowSettings}
              variant="ghost"
              className="text-gray-400 hover:text-green-400 font-mono text-xs md:text-sm px-4 py-2 h-auto"
            >
              {currentLang.cookieBanner.settings}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
