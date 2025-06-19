
export const baseStyles = `
  body {
    margin: 0;
    background: #000;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    position: relative;
  }
  
  /* CRT Monitor Effect - Random interference spots */
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
    background-size: 100% 8px, 12px 100%;
    pointer-events: none;
    z-index: 1000;
    opacity: 0.7;
  }
  
  /* Random interference spots */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 2px, transparent 2px),
      radial-gradient(circle at 80% 70%, rgba(0,255,153,0.4) 1px, transparent 1px),
      radial-gradient(circle at 60% 20%, rgba(255,0,0,0.2) 3px, transparent 3px),
      radial-gradient(circle at 10% 90%, rgba(255,255,255,0.2) 1px, transparent 1px),
      radial-gradient(circle at 90% 10%, rgba(0,255,153,0.3) 2px, transparent 2px),
      radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
    z-index: 999;
    animation: random-interference 3s ease-in-out infinite;
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
  
  /* Random interference animation */
  @keyframes random-interference {
    0% { 
      background: 
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 2px, transparent 2px),
        radial-gradient(circle at 80% 70%, rgba(0,255,153,0.4) 1px, transparent 1px),
        radial-gradient(circle at 60% 20%, rgba(255,0,0,0.2) 3px, transparent 3px),
        radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    }
    25% { 
      background: 
        radial-gradient(circle at 70% 80%, rgba(255,255,255,0.4) 1px, transparent 1px),
        radial-gradient(circle at 30% 20%, rgba(0,255,153,0.3) 2px, transparent 2px),
        radial-gradient(circle at 90% 50%, rgba(255,0,0,0.3) 2px, transparent 2px),
        radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    }
    50% { 
      background: 
        radial-gradient(circle at 10% 60%, rgba(255,255,255,0.2) 3px, transparent 3px),
        radial-gradient(circle at 85% 15%, rgba(0,255,153,0.5) 1px, transparent 1px),
        radial-gradient(circle at 40% 90%, rgba(255,0,0,0.2) 2px, transparent 2px),
        radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    }
    75% { 
      background: 
        radial-gradient(circle at 50% 10%, rgba(255,255,255,0.3) 2px, transparent 2px),
        radial-gradient(circle at 20% 85%, rgba(0,255,153,0.2) 3px, transparent 3px),
        radial-gradient(circle at 80% 40%, rgba(255,0,0,0.4) 1px, transparent 1px),
        radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
    }
    100% { 
      background: 
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 2px, transparent 2px),
        radial-gradient(circle at 80% 70%, rgba(0,255,153,0.4) 1px, transparent 1px),
        radial-gradient(circle at 60% 20%, rgba(255,0,0,0.2) 3px, transparent 3px),
        radial-gradient(ellipse at center, transparent 0%, transparent 75%, rgba(0,0,0,0.6) 100%);
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
