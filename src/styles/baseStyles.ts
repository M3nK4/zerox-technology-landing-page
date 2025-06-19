
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect - Effetto flickering più intenso */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.08), rgba(0, 255, 0, 0.04), rgba(0, 0, 255, 0.08));
    background-size: 100% 6px, 8px 100%;
    pointer-events: none;
    z-index: 1000;
    animation: intense-flicker 0.1s infinite linear alternate;
    opacity: 0.6;
  }
  
  /* Screen curvature effect */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
    z-index: 999;
  }
  
  /* CRT Screen glow */
  #root {
    background: #1a1a1a;
    box-shadow: 
      inset 0 0 150px rgba(0, 255, 153, 0.08),
      0 0 80px rgba(0, 255, 153, 0.15);
    margin: 0;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  /* CRT flicker animation - Molto più intenso e veloce */
  @keyframes intense-flicker {
    0% { 
      opacity: 0.6; 
      filter: brightness(1) contrast(1.2);
    }
    25% { 
      opacity: 0.4; 
      filter: brightness(0.8) contrast(1.5);
    }
    50% { 
      opacity: 0.7; 
      filter: brightness(1.3) contrast(0.9);
    }
    75% { 
      opacity: 0.3; 
      filter: brightness(0.7) contrast(1.8);
    }
    100% { 
      opacity: 0.8; 
      filter: brightness(1.1) contrast(1.1);
    }
  }
  
  /* Text glow for CRT effect */
  * {
    text-shadow: 0 0 4px currentColor;
  }
  
  /* Hide Lovable banner completely */
  div[data-lovable-badge],
  div[class*="lovable"],
  iframe[src*="lovable"],
  .lovable-badge,
  [id*="lovable-badge"],
  [class*="lovable-badge"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }
`;
