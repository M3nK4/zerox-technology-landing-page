
import React from 'react';

interface HeaderProps {
  currentLang: any;
  onMore: () => void;
  cycleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onMore, cycleLanguage }) => {
  return (
    <div className="header-container">
      <div className="logo-title-container">
        <img src="/lovable-uploads/8fcb2cf1-bd72-44a2-954c-c2e57d5811d5.png" alt="Zerox Lab Logo" className="logo" />
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
        
        {/* Subscribe button ora separato dall'evento di cambio lingua */}
        <div 
          id="subscribe-button" 
          onClick={onMore}
        >
          {currentLang.more}
        </div>
      </div>
    </div>
  );
};

export default Header;
