import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  currentLang: {
    footer: {
      company: string;
      allRightsReserved: string;
      privacyPolicy: string;
      cookiePolicy: string;
      terms: string;
      legalNotice: string;
    };
    cookieSettings: {
      title: string;
    };
    htmlLang: string;
  };
  onOpenCookieSettings: () => void;
}

const Footer: React.FC<FooterProps> = ({ currentLang, onOpenCookieSettings }) => {
  const currentYear = new Date().getFullYear();
  const lang = currentLang.htmlLang;

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-company">
            {currentLang.footer.company}
          </span>
        </div>
        <div className="footer-links">
          <Link to={`/privacy?lang=${lang}`} className="footer-link">
            {currentLang.footer.privacyPolicy}
          </Link>
          <span className="footer-dot">&middot;</span>
          <Link to={`/cookies?lang=${lang}`} className="footer-link">
            {currentLang.footer.cookiePolicy}
          </Link>
          <span className="footer-dot">&middot;</span>
          <Link to={`/terms?lang=${lang}`} className="footer-link">
            {currentLang.footer.terms}
          </Link>
          <span className="footer-dot">&middot;</span>
          <Link to={`/legal-notice?lang=${lang}`} className="footer-link">
            {currentLang.footer.legalNotice}
          </Link>
          <span className="footer-dot">&middot;</span>
          <button
            onClick={onOpenCookieSettings}
            className="footer-link footer-cookie-btn"
          >
            {currentLang.cookieSettings.title}
          </button>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} {currentLang.footer.company}. {currentLang.footer.allRightsReserved}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
