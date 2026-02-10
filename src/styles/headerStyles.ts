
export const headerStyles = `
  /* Header */
  .header-container {
    position: absolute;
    top: 2%;
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
  }

  .logo {
    max-width: min(500px, 55vw);
    margin-bottom: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .company-title {
    color: #00ff99;
    text-transform: uppercase;
    letter-spacing: 22px;
    font-size: clamp(1.2rem, 3.5vw, 2.6rem);
    margin-top: -10px;
    margin-bottom: 0;
    text-shadow: 0 0 15px rgba(0,255,153,0.4), 0 0 30px rgba(0,255,153,0.15);
    font-weight: 300;
    font-family: 'Courier New', monospace;
    text-align: center;
    padding-left: 22px;
  }

  .logo-title-container {
    margin-bottom: 2vh;
    text-align: center;
  }

  .description-container {
    padding: 0;
    margin-bottom: 3vh;
  }

  .company-description {
    color: rgba(255, 255, 255, 0.65);
    font-size: clamp(0.7rem, 1.4vw, 1rem);
    line-height: 1.65;
    margin: 0;
    white-space: pre-line;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }

  /* Language selector */
  .language-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
  }

  .language-btn {
    background: none;
    border: none;
    padding: 4px 8px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    font-family: 'Courier New', monospace;
    transition: color 0.2s, text-shadow 0.2s;
    letter-spacing: 1px;
  }

  .language-btn:hover {
    color: rgba(0, 255, 153, 0.6);
  }

  .language-btn-active {
    color: #00ff99;
    text-shadow: 0 0 8px rgba(0, 255, 153, 0.5);
  }

  .language-separator {
    color: rgba(255, 255, 255, 0.15);
    font-size: 0.7rem;
    user-select: none;
  }

  /* Action buttons container */
  .action-buttons-container {
    display: flex;
    gap: 45px;
    z-index: 3;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 1.5vh;
  }

  /* Shared action button style */
  .action-button {
    background: rgba(0, 255, 153, 0.1);
    color: #00ff99;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid #00ff99;
    box-shadow: 0 0 6px 1px rgba(0, 255, 153, 0.3);
    z-index: 3;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-family: 'Courier New', monospace;
  }

  .action-button:hover {
    background: rgba(0, 255, 153, 0.2);
    box-shadow: 0 0 8px 1px rgba(0, 255, 153, 0.7);
  }

  .action-icon {
    font-size: 1.8rem;
    line-height: 1;
    text-shadow: 0 0 8px rgba(0, 255, 153, 0.6);
    font-family: 'Segoe UI Symbol', 'Apple Symbols', 'Noto Sans Symbols 2', sans-serif;
    font-variant-emoji: text;
  }
`;
