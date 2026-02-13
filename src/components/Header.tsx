import React, { useRef, useEffect, useCallback } from 'react';
import { LanguageKey } from '@/data/languages';

interface Language {
  descriptions: string[];
  label: string;
  email: string;
  whatsapp: string;
  whatsappMessage: string;
  voiceAgent: string;
}

interface HeaderProps {
  currentLang: Language;
  currentLangKey: LanguageKey;
  setLanguage: (key: LanguageKey) => void;
  languageOrder: readonly LanguageKey[];
  descriptionIndex: number;
  isTransitioning: boolean;
  flashRef: React.RefObject<HTMLDivElement>;
  onClickDescription: () => void;
  onClickEmail: () => void;
}

const langLabels: Record<LanguageKey, string> = {
  en: 'EN',
  it: 'IT',
  es: 'ES',
  zh: '中',
};

const Header: React.FC<HeaderProps> = ({ currentLang, currentLangKey, setLanguage, languageOrder, descriptionIndex, isTransitioning, flashRef, onClickDescription, onClickEmail }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const syncLogoWidth = useCallback(() => {
    const title = titleRef.current;
    const logo = logoRef.current;
    if (!title || !logo) return;
    // Collapse logo so it doesn't inflate the container before measuring
    logo.style.width = '0px';
    // Force layout recalc, then measure the title's natural width
    const titleWidth = title.scrollWidth;
    logo.style.width = titleWidth + 'px';
  }, []);

  useEffect(() => {
    syncLogoWidth();
    const ro = new ResizeObserver(syncLogoWidth);
    if (titleRef.current) ro.observe(titleRef.current);
    window.addEventListener('resize', syncLogoWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncLogoWidth);
    };
  }, [syncLogoWidth]);

  return (
    <div className="header-container">
      <div className="logo-title-container">
        <img ref={logoRef} src="/assets/zerox-logo.png" alt="zerox.technology" className="logo" />
        <h1 ref={titleRef} className="company-title">TECHNOLOGY</h1>
      </div>

      <div className="language-selector">
        {languageOrder.map((key, i) => (
          <React.Fragment key={key}>
            {i > 0 && <span className="language-separator">&middot;</span>}
            <button
              className={`language-btn ${key === currentLangKey ? 'language-btn-active' : ''}`}
              onClick={() => setLanguage(key)}
            >
              {langLabels[key]}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div className="description-container">
        <div ref={flashRef} className="crt-text-flash" />
        <p className={`company-description ${isTransitioning ? 'desc-dissolve' : 'desc-visible'}`} onClick={onClickDescription} style={{ cursor: 'pointer' }}>
          {currentLang.descriptions[descriptionIndex]}
        </p>
      </div>

      <div className="action-buttons-container">
        <div
          id="email-button"
          className="action-button"
          title={currentLang.email}
          onClick={onClickEmail}
          style={{ cursor: 'pointer' }}
        >
          <span className="action-icon" style={{ fontWeight: 200 }}>@</span>
        </div>

        <a
          id="whatsapp-button"
          className="action-button"
          href={`https://wa.me/393505392924?text=${encodeURIComponent(currentLang.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={currentLang.whatsapp}
        >
          <span className="action-icon" style={{ fontWeight: 200 }}>t</span>
        </a>

        <div
          id="voice-agent-button"
          className="action-button"
          title={currentLang.voiceAgent}
        >
          <span className="action-icon" style={{ fontSize: '2em', lineHeight: 1 }}>○</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
