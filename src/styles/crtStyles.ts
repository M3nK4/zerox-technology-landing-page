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
        rgba(0, 255, 153, 0.012) 2.0%,
        rgba(255, 255, 255, 0.02) 2.15%,
        rgba(255, 255, 255, 0.025) 2.3%,
        rgba(0, 255, 153, 0.012) 2.55%,
        transparent 2.8%,
        transparent 5.8%,
        rgba(0, 255, 153, 0.015) 5.75%,
        rgba(0, 255, 153, 0.02) 5.85%,
        rgba(0, 255, 153, 0.01) 5.98%,
        transparent 6.1%,
        transparent 9.3%,
        rgba(0, 255, 153, 0.015) 9.2%,
        rgba(255, 255, 255, 0.022) 9.35%,
        rgba(255, 255, 255, 0.028) 9.5%,
        rgba(0, 255, 153, 0.012) 9.75%,
        transparent 10.0%,
        transparent 14.7%,
        rgba(0, 255, 153, 0.018) 14.65%,
        rgba(0, 255, 153, 0.022) 14.75%,
        rgba(0, 255, 153, 0.012) 14.88%,
        transparent 15.05%,
        transparent 19.1%,
        rgba(255, 255, 255, 0.015) 19.15%,
        transparent 19.3%,
        transparent 22.6%,
        rgba(0, 255, 153, 0.015) 22.5%,
        rgba(255, 255, 255, 0.025) 22.65%,
        rgba(255, 255, 255, 0.03) 22.9%,
        rgba(0, 255, 153, 0.015) 23.15%,
        transparent 23.4%,
        transparent 28.4%,
        rgba(0, 255, 153, 0.018) 28.45%,
        transparent 28.6%,
        transparent 33.3%,
        rgba(0, 255, 153, 0.012) 33.2%,
        rgba(255, 255, 255, 0.02) 33.35%,
        rgba(255, 255, 255, 0.025) 33.5%,
        rgba(0, 255, 153, 0.01) 33.7%,
        transparent 33.9%,
        transparent 37.8%,
        rgba(0, 255, 153, 0.02) 37.75%,
        rgba(0, 255, 153, 0.025) 37.85%,
        rgba(0, 255, 153, 0.015) 38.0%,
        transparent 38.2%,
        transparent 43.2%,
        rgba(255, 255, 255, 0.018) 43.25%,
        transparent 43.45%,
        transparent 48.7%,
        rgba(0, 255, 153, 0.015) 48.6%,
        rgba(255, 255, 255, 0.022) 48.75%,
        rgba(255, 255, 255, 0.028) 48.95%,
        rgba(0, 255, 153, 0.012) 49.15%,
        transparent 49.4%,
        transparent 54.1%,
        rgba(0, 255, 153, 0.015) 54.15%,
        transparent 54.3%,
        transparent 59.9%,
        rgba(0, 255, 153, 0.012) 59.8%,
        rgba(255, 255, 255, 0.02) 59.95%,
        rgba(255, 255, 255, 0.025) 60.1%,
        rgba(0, 255, 153, 0.01) 60.3%,
        transparent 60.5%,
        transparent 64.6%,
        rgba(0, 255, 153, 0.018) 64.55%,
        rgba(0, 255, 153, 0.022) 64.65%,
        rgba(0, 255, 153, 0.012) 64.82%,
        transparent 65.0%,
        transparent 70.3%,
        rgba(255, 255, 255, 0.015) 70.35%,
        transparent 70.55%,
        transparent 76.1%,
        rgba(0, 255, 153, 0.015) 76.0%,
        rgba(255, 255, 255, 0.025) 76.15%,
        rgba(255, 255, 255, 0.018) 76.35%,
        transparent 76.55%,
        transparent 81.8%,
        rgba(0, 255, 153, 0.018) 81.85%,
        transparent 82.05%,
        transparent 87.4%,
        rgba(0, 255, 153, 0.012) 87.3%,
        rgba(255, 255, 255, 0.022) 87.45%,
        rgba(255, 255, 255, 0.015) 87.65%,
        transparent 87.85%,
        transparent 93.2%,
        rgba(0, 255, 153, 0.015) 93.25%,
        transparent 93.45%,
        transparent 100%
      );
    animation: interference-scroll 18s linear infinite;
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
    opacity: 0.09;
    animation: noise-shift 0.08s steps(5) infinite;
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
