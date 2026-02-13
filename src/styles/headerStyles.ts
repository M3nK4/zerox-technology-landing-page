export const headerStyles = `
  /* Header — logo at top, content centered in remaining space */
  .header-container {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 3;
    width: 92%;
    max-width: 900px;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    height: 100dvh;
    padding-top: 3vh;
    padding-bottom: 240px;
    gap: 0;
    box-sizing: border-box;
  }

  .logo {
    margin-bottom: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .company-title {
    color: #00ff99;
    text-transform: uppercase;
    letter-spacing: 22px;
    font-size: clamp(1.4rem, 4vw, 3.4rem);
    margin-top: -10px;
    margin-bottom: 0;
    text-shadow: 0 0 10px rgba(0,255,153,0.5), 0 0 25px rgba(0,255,153,0.3), 0 0 50px rgba(0,255,153,0.15);
    font-weight: 300;
    font-family: 'Courier New', monospace;
    text-align: center;
    padding-left: 22px;
  }

  /* Logo+title stay at top */
  .logo-title-container {
    text-align: center;
    flex-shrink: 0;
  }

  /* Language stays near logo at top */
  .language-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    flex-shrink: 0;
    margin-top: 2vh;
  }

  /* Description centered in remaining space */
  .description-container {
    padding: 0 8%;
    padding-bottom: 8vh;
    flex-shrink: 0;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
    overflow: hidden;
  }

  .company-description {
    color: rgba(255, 255, 255, 0.82);
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    line-height: 2.4;
    margin: 0;
    white-space: pre-line;
    text-shadow: 0 0 2px rgba(255, 255, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.4);
  }

  /* Buttons fixed position — never shifts with text changes */
  .action-buttons-container {
    display: flex;
    gap: 42px;
    z-index: 3;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 22%;
    left: 50%;
    transform: translateX(-50%);
  }

  .language-btn {
    background: none;
    border: none;
    padding: 4px 8px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    transition: color 0.2s, text-shadow 0.2s, border-bottom 0.2s;
    letter-spacing: 1px;
  }

  .language-btn:hover {
    color: rgba(0, 255, 153, 0.7);
  }

  .language-btn-active {
    color: #00ff99;
    text-shadow: 0 0 10px rgba(0, 255, 153, 0.6);
    border-bottom: 1px solid rgba(0, 255, 153, 0.5);
    padding-bottom: 2px;
  }

  .language-separator {
    color: rgba(255, 255, 255, 0.15);
    font-size: 0.7rem;
    user-select: none;
  }

  /* Shared action button style */
  .action-button {
    background: rgba(0, 255, 153, 0.08);
    color: #00ff99;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    border: 1.5px solid rgba(0, 255, 153, 0.6);
    box-shadow: 0 0 6px 1px rgba(0, 255, 153, 0.2);
    z-index: 3;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Courier New', monospace;
  }

  .action-button:hover {
    background: rgba(0, 255, 153, 0.15);
    border-color: #00ff99;
    box-shadow: 0 0 8px 1px rgba(0, 255, 153, 0.5);
  }

  .action-icon {
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 700;
    text-shadow: 0 0 8px rgba(0, 255, 153, 0.6);
    font-family: 'Courier New', monospace;
  }

  /* Description dissolve/emerge */
  .company-description {
    transition: opacity 0.12s ease, filter 0.12s ease;
  }

  .desc-visible {
    opacity: 1;
    filter: blur(0) brightness(1);
  }

  .desc-dissolve {
    opacity: 0;
    filter: blur(8px) brightness(3);
  }`;
