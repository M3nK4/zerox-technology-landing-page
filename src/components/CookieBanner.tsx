
import React from 'react';
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
  const handleAcceptAll = () => {
    onAcceptAll();
  };

  const handleAcceptNecessary = () => {
    onAcceptNecessary();
  };

  const handleShowSettings = () => {
    onShowSettings();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t p-2 md:p-3 z-50" style={{ borderTopColor: 'rgba(0, 255, 153, 0.3)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 md:gap-3">
          {/* Header e descrizione */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xs md:text-sm mb-1 font-mono" style={{ color: 'rgb(0, 255, 153)' }}>
              {currentLang.cookieBanner.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed font-mono">
              {currentLang.cookieBanner.description}
            </p>
          </div>
          
          {/* Pulsanti */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center md:justify-start">
            <Button
              onClick={handleAcceptAll}
              className="text-black font-mono text-xs px-3 py-1 h-auto hover:opacity-80"
              style={{ backgroundColor: 'rgb(0, 255, 153)' }}
            >
              {currentLang.cookieBanner.acceptAll}
            </Button>
            <Button
              onClick={handleAcceptNecessary}
              variant="outline"
              className="font-mono text-xs px-3 py-1 h-auto"
              style={{ 
                borderColor: 'rgb(0, 255, 153)', 
                color: 'rgb(0, 255, 153)',
                backgroundColor: 'transparent'
              }}
            >
              {currentLang.cookieBanner.acceptNecessary}
            </Button>
            <Button
              onClick={handleShowSettings}
              variant="ghost"
              className="text-gray-400 font-mono text-xs px-3 py-1 h-auto"
              style={{ color: 'rgb(0, 255, 153)' }}
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
