
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FONT = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  backText: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title, backText }) => {
  return (
    <div className="min-h-screen bg-black text-green-400" style={{ fontFamily: FONT }}>
      {/* Sticky top bar */}
      <div
        className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 255, 153, 0.15)',
        }}
      >
        <div className="mx-auto max-w-4xl flex items-center h-12 sm:h-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#00ff99', color: '#000', fontWeight: 500 }}
          >
            <ArrowLeft size={14} />
            {backText}
          </Link>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl text-green-400 mb-2" style={{ fontWeight: 400 }}>
            {title}
          </h1>
          <div className="w-full h-px bg-green-500/30"></div>
        </div>

        <div className="max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
