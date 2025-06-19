
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect - Linee più grosse e effetto più forte */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 6px 100%;
    pointer-events: none;
    z-index: 1000;
    animation: flicker 0.2s infinite linear alternate;
    opacity: 0.5;
  }
  
  /* Screen curvature effect - Più forte */
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
  
  /* CRT Screen glow - Rimosso bordo */
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
  
  /* CRT flicker animation - Più veloce e forte */
  @keyframes flicker {
    0% { opacity: 0.5; }
    100% { opacity: 0.4; }
  }
  
  /* Text glow for CRT effect - Più forte */
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
