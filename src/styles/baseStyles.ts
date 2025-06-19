
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect - Ridotte le righe e reso più realistico */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02));
    background-size: 100% 6px, 8px 100%;
    pointer-events: none;
    z-index: 1000;
    animation: flicker 0.3s infinite linear alternate;
    opacity: 0.3;
  }
  
  /* Screen curvature effect - Più sottile */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, transparent 0%, transparent 80%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
    z-index: 999;
  }
  
  /* CRT Screen glow */
  #root {
    background: #1a1a1a;
    box-shadow: 
      inset 0 0 100px rgba(0, 255, 153, 0.05),
      0 0 50px rgba(0, 255, 153, 0.1);
    border-radius: 15px;
    margin: 20px;
    min-height: calc(100vh - 40px);
    position: relative;
    overflow: hidden;
  }
  
  /* CRT flicker animation - Più lento e meno invasivo */
  @keyframes flicker {
    0% { opacity: 0.3; }
    100% { opacity: 0.25; }
  }
  
  /* Text glow for CRT effect - Ridotto */
  * {
    text-shadow: 0 0 2px currentColor;
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
