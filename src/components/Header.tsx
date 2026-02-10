import React from 'react';
import { LanguageKey } from '@/data/languages';

interface Language {
  description: string;
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
}

const langLabels: Record<LanguageKey, string> = {
  en: 'EN',
  it: 'IT',
  es: 'ES',
  zh: '\u4e2d',
};

const Header: React.FC<HeaderProps> = ({ currentLang, currentLangKey, setLanguage, languageOrder }) => {
  return (
    <div className="header-container">
      <div className="logo-title-container">
        <img src="/assets/zerox-logo.png" alt="zerox.technology" className="logo" />
        <h1 className="company-title">TECHNOLOGY</h1>
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
        <p className="company-description">
          {currentLang.description}
        </p>
      </div>

      <div className="action-buttons-container">
        <div
          id="email-button"
          className="action-button"
          title={currentLang.email}
        >
          <span className="action-icon">@</span>
        </div>

        <a
          id="whatsapp-button"
          className="action-button"
          href={`https://wa.me/393505392924?text=${encodeURIComponent(currentLang.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={currentLang.whatsapp}
        >
          <span className="action-icon">&gt;</span>
        </a>

        <div
          id="voice-agent-button"
          className="action-button"
          title={currentLang.voiceAgent}
        >
          <span className="action-icon">~</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
