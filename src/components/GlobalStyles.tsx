
import React from 'react';
import { baseStyles } from '@/styles/baseStyles';
import { particleStyles } from '@/styles/particleStyles';
import { headerStyles } from '@/styles/headerStyles';
import { responsiveStyles } from '@/styles/responsiveStyles';

const GlobalStyles: React.FC = () => {
  const combinedStyles = `
    ${baseStyles}
    ${particleStyles}
    ${headerStyles}
    ${responsiveStyles}
  `;

  return <style>{combinedStyles}</style>;
};

export default GlobalStyles;
