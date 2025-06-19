
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    z-index: 1000;
    animation: flicker 0.15s infinite linear alternate;
  }
  
  /* Screen curvature effect */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
    z-index: 999;
  }
  
  /* CRT Screen glow */
  #root {
    background: #1a1a1a;
    box-shadow: 
      inset 0 0 100px rgba(0, 255, 153, 0.1),
      0 0 50px rgba(0, 255, 153, 0.2);
    border-radius: 15px;
    margin: 20px;
    min-height: calc(100vh - 40px);
    position: relative;
    overflow: hidden;
  }
  
  /* CRT flicker animation */
  @keyframes flicker {
    0% { opacity: 1; }
    100% { opacity: 0.98; }
  }
  
  /* Scanlines effect */
  @keyframes scanlines {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  
  /* Text glow for CRT effect */
  * {
    text-shadow: 0 0 5px currentColor;
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
