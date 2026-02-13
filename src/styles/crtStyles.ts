export const crtStyles = `
  /* CRT scanlines — behind everything */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    background:
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.38) 0px,
        rgba(0, 0, 0, 0.30) 3px,
        transparent 3px,
        transparent 5px
      ),
      repeating-linear-gradient(
        0.4deg,
        transparent 0px,
        transparent 2px,
        rgba(0, 0, 0, 0.22) 2px,
        rgba(0, 0, 0, 0.15) 5px,
        transparent 5px,
        transparent 11px
      ),
      repeating-linear-gradient(
        -0.3deg,
        transparent 0px,
        transparent 1px,
        rgba(0, 0, 0, 0.26) 1px,
        rgba(0, 0, 0, 0.18) 5px,
        transparent 5px,
        transparent 17px
      ),
      repeating-linear-gradient(
        0.15deg,
        rgba(0, 0, 0, 0.12) 0px,
        transparent 2px,
        transparent 4px,
        rgba(0, 0, 0, 0.16) 5px,
        rgba(0, 0, 0, 0.08) 8px,
        transparent 9px,
        transparent 29px
      ),
      repeating-linear-gradient(
        -0.2deg,
        transparent 0px,
        rgba(0, 0, 0, 0.14) 2px,
        transparent 4px,
        transparent 8px,
        rgba(0, 0, 0, 0.10) 9px,
        transparent 12px,
        transparent 43px
      ),
      repeating-linear-gradient(
        0.5deg,
        transparent 0px,
        transparent 5px,
        rgba(0, 0, 0, 0.12) 5px,
        rgba(0, 0, 0, 0.06) 10px,
        transparent 10px,
        transparent 53px
      );
    animation: scanline-flicker 0.05s steps(6) infinite, scanline-drift 2s ease-in-out infinite;
  }

  /* Vignette */
  body::after {
    content: '';
    position: fixed;
    top: -2%;
    left: -2%;
    width: 104%;
    height: 104%;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 20%,
      rgba(0, 0, 0, 0.25) 40%,
      rgba(0, 0, 0, 0.6) 55%,
      rgba(0, 0, 0, 0.85) 68%,
      rgba(0, 0, 0, 0.95) 78%,
      rgb(0, 0, 0) 88%
    );
    animation: vignette-pulse 5s ease-in-out infinite;
  }

  /* CRT color fringing / chromatic aberration */
  .crt-color-fringe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    background:
      linear-gradient(90deg, rgba(255, 0, 0, 0.04) 0%, transparent 6%, transparent 94%, rgba(0, 100, 255, 0.04) 100%),
      linear-gradient(0deg, rgba(0, 255, 0, 0.03) 0%, transparent 5%, transparent 95%, rgba(255, 0, 100, 0.03) 100%);
    animation: fringe-shift 6s ease-in-out infinite;
  }

  /* Horizontal interference bands */
  .crt-interference {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    pointer-events: none;
    z-index: 0;
    background:
      linear-gradient(
        to bottom,
        transparent 0%,
        transparent 2.1%,
        rgba(0, 255, 153, 0.12) 2.15%,
        rgba(0, 255, 153, 0.16) 2.3%,
        rgba(0, 255, 153, 0.10) 2.5%,
        transparent 2.8%,
        transparent 5.8%,
        rgba(255, 255, 255, 0.04) 5.85%,
        rgba(255, 255, 255, 0.05) 5.95%,
        transparent 6.1%,
        transparent 9.3%,
        rgba(255, 255, 255, 0.07) 9.35%,
        rgba(255, 255, 255, 0.10) 9.5%,
        rgba(255, 255, 255, 0.06) 9.7%,
        transparent 10.0%,
        transparent 14.7%,
        rgba(0, 255, 153, 0.11) 14.75%,
        rgba(0, 255, 153, 0.14) 14.85%,
        rgba(0, 255, 153, 0.08) 15.0%,
        transparent 15.2%,
        transparent 19.1%,
        rgba(255, 255, 255, 0.035) 19.15%,
        transparent 19.3%,
        transparent 22.6%,
        rgba(0, 255, 153, 0.14) 22.65%,
        rgba(0, 255, 153, 0.18) 22.85%,
        rgba(0, 255, 153, 0.11) 23.1%,
        transparent 23.4%,
        transparent 28.4%,
        rgba(255, 255, 255, 0.05) 28.45%,
        transparent 28.6%,
        transparent 33.3%,
        rgba(255, 255, 255, 0.08) 33.35%,
        rgba(255, 255, 255, 0.11) 33.5%,
        rgba(255, 255, 255, 0.06) 33.7%,
        transparent 33.9%,
        transparent 37.8%,
        rgba(0, 255, 153, 0.08) 37.85%,
        rgba(0, 255, 153, 0.11) 37.95%,
        rgba(0, 255, 153, 0.06) 38.1%,
        transparent 38.3%,
        transparent 43.2%,
        rgba(255, 255, 255, 0.04) 43.25%,
        transparent 43.45%,
        transparent 48.7%,
        rgba(0, 255, 153, 0.10) 48.75%,
        rgba(0, 255, 153, 0.14) 48.9%,
        rgba(0, 255, 153, 0.08) 49.1%,
        transparent 49.4%,
        transparent 54.1%,
        rgba(255, 255, 255, 0.06) 54.15%,
        rgba(255, 255, 255, 0.08) 54.25%,
        transparent 54.4%,
        transparent 59.9%,
        rgba(255, 255, 255, 0.035) 59.95%,
        transparent 60.1%,
        transparent 64.6%,
        rgba(0, 255, 153, 0.09) 64.65%,
        rgba(0, 255, 153, 0.12) 64.8%,
        rgba(0, 255, 153, 0.07) 65.0%,
        transparent 65.2%,
        transparent 70.3%,
        rgba(255, 255, 255, 0.05) 70.35%,
        transparent 70.55%,
        transparent 76.1%,
        rgba(0, 255, 153, 0.15) 76.15%,
        rgba(0, 255, 153, 0.20) 76.35%,
        rgba(0, 255, 153, 0.12) 76.55%,
        transparent 76.8%,
        transparent 81.8%,
        rgba(255, 255, 255, 0.07) 81.85%,
        rgba(255, 255, 255, 0.10) 81.95%,
        transparent 82.1%,
        transparent 87.4%,
        rgba(0, 255, 153, 0.08) 87.45%,
        rgba(0, 255, 153, 0.11) 87.55%,
        transparent 87.75%,
        transparent 93.2%,
        rgba(255, 255, 255, 0.035) 93.25%,
        transparent 93.45%,
        transparent 100%
      );
    transition: opacity 0.3s ease-out;
  }

  /* Noise overlay — canvas generated */
  .crt-noise {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.18;
    image-rendering: pixelated;
    animation: noise-shift 0.08s steps(5) infinite;
  }

  /* Text change flash — positioned relative to description container */
  .crt-text-flash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.05) 60%, transparent 80%);
    opacity: 0;
    border-radius: 50%;
  }


  /* --- Animations --- */

  @keyframes scanline-flicker {
    0% { opacity: 1; }
    16% { opacity: 0.68; }
    33% { opacity: 0.92; }
    50% { opacity: 0.72; }
    66% { opacity: 0.96; }
    83% { opacity: 0.75; }
    100% { opacity: 0.88; }
  }

  @keyframes scanline-drift {
    0% { transform: translateY(0px); }
    15% { transform: translateY(2.5px); }
    30% { transform: translateY(-1px); }
    50% { transform: translateY(3px); }
    70% { transform: translateY(-1.5px); }
    85% { transform: translateY(1px); }
    100% { transform: translateY(0px); }
  }

  @keyframes vignette-pulse {
    0% { opacity: 1; }
    30% { opacity: 0.88; }
    50% { opacity: 0.95; }
    70% { opacity: 0.85; }
    100% { opacity: 1; }
  }

  @keyframes fringe-shift {
    0% { opacity: 0.5; transform: scale(1); }
    25% { opacity: 1; transform: scale(1.002); }
    50% { opacity: 0.6; transform: scale(0.998); }
    75% { opacity: 0.9; transform: scale(1.002); }
    100% { opacity: 0.5; transform: scale(1); }
  }

  @keyframes interference-scroll {
    0% { transform: translateY(0%); }
    8% { transform: translateY(-6%); }
    15% { transform: translateY(-4%); }
    22% { transform: translateY(-16%); }
    30% { transform: translateY(-13%); }
    38% { transform: translateY(-28%); }
    42% { transform: translateY(-25%); }
    50% { transform: translateY(-35%); }
    55% { transform: translateY(-38%); }
    63% { transform: translateY(-44%); }
    68% { transform: translateY(-42%); }
    75% { transform: translateY(-52%); }
    82% { transform: translateY(-56%); }
    88% { transform: translateY(-54%); }
    95% { transform: translateY(-63%); }
    100% { transform: translateY(-66.67%); }
  }

  @keyframes noise-shift {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-7%, -10%); }
    50% { transform: translate(4%, 6%); }
    75% { transform: translate(-3%, 8%); }
    100% { transform: translate(6%, -4%); }
  }
`;
