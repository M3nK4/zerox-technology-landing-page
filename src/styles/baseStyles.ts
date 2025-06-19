
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect - Scanlines */
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
    background-size: 100% 6px, 12px 100%;
    pointer-events: none;
    z-index: 1000;
    opacity: 0.7;
  }
  
  /* Electrical interference overlay */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, transparent 98%, rgba(255,255,255,0.9) 98.5%, rgba(255,255,255,0.9) 99%, transparent 99.5%);
    pointer-events: none;
    z-index: 1001;
    opacity: 0;
    animation: electrical-interference 4s ease-in-out infinite;
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
    animation: content-flicker 6s ease-in-out infinite;
  }
  
  /* Electrical interference animation */
  @keyframes electrical-interference {
    0%, 85%, 100% { 
      opacity: 0;
      background: linear-gradient(45deg, transparent 0%, transparent 98%, rgba(255,255,255,0.9) 98.5%, rgba(255,255,255,0.9) 99%, transparent 99.5%);
    }
    87% { 
      opacity: 1;
      background: 
        linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.8) 20%, transparent 25%),
        linear-gradient(90deg, transparent 60%, rgba(0,255,255,0.9) 65%, transparent 70%),
        linear-gradient(45deg, transparent 30%, rgba(255,255,0,0.7) 35%, transparent 40%);
    }
    89% { 
      opacity: 0.3;
      background: 
        linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 10%),
        linear-gradient(270deg, transparent 80%, rgba(255,0,255,0.8) 85%, transparent 90%);
    }
    91% { 
      opacity: 0.8;
      background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 5%, transparent 10%);
    }
  }
  
  /* Content flicker - makes everything disappear and reappear */
  @keyframes content-flicker {
    0%, 82%, 100% { 
      opacity: 1;
      filter: brightness(1) contrast(1.1);
    }
    83% { 
      opacity: 0.1;
      filter: brightness(0.3) contrast(2);
    }
    84% { 
      opacity: 0.8;
      filter: brightness(1.5) contrast(0.8);
    }
    85% { 
      opacity: 0.2;
      filter: brightness(0.1) contrast(3);
    }
    86% { 
      opacity: 1;
      filter: brightness(1.2) contrast(1.1);
    }
    87% { 
      opacity: 0.05;
      filter: brightness(0.05) contrast(5);
    }
    88% { 
      opacity: 0.9;
      filter: brightness(1.3) contrast(0.9);
    }
    90% { 
      opacity: 1;
      filter: brightness(1) contrast(1.1);
    }
  }
  
  /* Header specific interference */
  .header-container {
    animation: header-interference 8s ease-in-out infinite;
  }
  
  @keyframes header-interference {
    0%, 78%, 100% { 
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
      filter: brightness(1);
    }
    80% { 
      opacity: 0.1;
      transform: translateX(-50%) translateY(2px);
      filter: brightness(0.2);
    }
    81% { 
      opacity: 0.8;
      transform: translateX(-50%) translateY(-1px);
      filter: brightness(1.5);
    }
    82% { 
      opacity: 0.05;
      transform: translateX(-50%) translateY(1px);
      filter: brightness(0.1);
    }
    84% { 
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
      filter: brightness(1);
    }
  }
  
  /* Logo specific glitching */
  .logo {
    animation: logo-glitch 7s ease-in-out infinite;
  }
  
  @keyframes logo-glitch {
    0%, 79%, 100% { 
      opacity: 1;
      filter: brightness(1) hue-rotate(0deg);
    }
    81% { 
      opacity: 0.2;
      filter: brightness(0.3) hue-rotate(180deg);
    }
    82% { 
      opacity: 0.9;
      filter: brightness(1.4) hue-rotate(-90deg);
    }
    83% { 
      opacity: 0.1;
      filter: brightness(0.1) hue-rotate(90deg);
    }
    85% { 
      opacity: 1;
      filter: brightness(1) hue-rotate(0deg);
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
