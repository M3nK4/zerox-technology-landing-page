
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  backText: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title, backText }) => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            {backText}
          </Link>
          <h1 className="text-3xl font-bold text-green-400 mb-2">
            {title}
          </h1>
          <div className="w-full h-px bg-green-500/30"></div>
        </div>
        
        <div className="prose prose-invert prose-green max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
