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
    htmlLang: string;
  };
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const currentYear = new Date().getFullYear();
  const lang = currentLang.htmlLang;

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t py-3 px-4 z-40"
      style={{ borderTopColor: 'rgba(0, 255, 153, 0.2)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          {/* Company info */}
          <div className="text-gray-400 font-mono">
            © {currentYear} {currentLang.footer.company}. {currentLang.footer.allRightsReserved}.
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              to={`/legal-notice?lang=${lang}`}
              className="text-gray-400 hover:text-green-400 transition-colors font-mono"
            >
              {currentLang.footer.legalNotice}
            </Link>
            <Link
              to={`/privacy?lang=${lang}`}
              className="text-gray-400 hover:text-green-400 transition-colors font-mono"
            >
              {currentLang.footer.privacyPolicy}
            </Link>
            <Link
              to={`/cookies?lang=${lang}`}
              className="text-gray-400 hover:text-green-400 transition-colors font-mono"
            >
              {currentLang.footer.cookiePolicy}
            </Link>
            <Link
              to={`/terms?lang=${lang}`}
              className="text-gray-400 hover:text-green-400 transition-colors font-mono"
            >
              {currentLang.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
