
import React from 'react';

interface Language {
  description: string;
  label: string;
  more: string;
  whatsapp: string;
}

interface HeaderProps {
  currentLang: Language;
  onMore: () => void;
  cycleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onMore, cycleLanguage }) => {
  return (
    <div className="header-container">
      <div className="logo-title-container">
        <img src="/assets/zerox-logo.png" alt="Zerox Technology Logo" className="logo" />
        <h1 className="company-title">TECHNOLOGY</h1>
      </div>

      <div className="description-container">
        <div onClick={cycleLanguage} className="cursor-pointer">
          <p className="company-description">
            {currentLang.description}
          </p>
          <button className="language-toggle" onClick={cycleLanguage} title="Change language">
            {currentLang.label}
          </button>
        </div>
        
        {/* Action buttons container */}
        <div className="action-buttons-container">
          <div
            id="subscribe-button"
            onClick={onMore}
          >
            {currentLang.more}
          </div>

          <a
            id="whatsapp-button"
            href="https://wa.me/393505392924"
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentLang.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
