
import React from 'react';

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
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t p-2 md:p-3 z-50" style={{ borderTopColor: 'rgba(0, 255, 153, 0.3)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xs md:text-sm mb-1 font-mono" style={{ color: '#00ff99' }}>
              {currentLang.cookieBanner.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed font-mono">
              {currentLang.cookieBanner.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center md:justify-start">
            <button
              onClick={onAcceptAll}
              className="font-mono text-xs px-3 py-1.5 rounded-md transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#00ff99', color: '#000000' }}
            >
              {currentLang.cookieBanner.acceptAll}
            </button>
            <button
              onClick={onAcceptNecessary}
              className="font-mono text-xs px-3 py-1.5 rounded-md transition-opacity hover:opacity-80"
              style={{ border: '1px solid #00ff99', color: '#00ff99', backgroundColor: 'transparent' }}
            >
              {currentLang.cookieBanner.acceptNecessary}
            </button>
            <button
              onClick={onShowSettings}
              className="font-mono text-xs px-3 py-1.5 rounded-md transition-opacity hover:opacity-80"
              style={{ color: 'rgba(0, 255, 153, 0.6)', backgroundColor: 'transparent', border: 'none' }}
            >
              {currentLang.cookieBanner.settings}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
