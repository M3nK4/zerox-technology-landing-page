
export const headerStyles = `
  /* Header */
  .header-container {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 3;
    width: 80%;
    max-width: 800px;
    pointer-events: auto;
  }
  
  .logo {
    max-width: 340px;
    margin-bottom: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .company-title {
    color: #00ff99;
    text-transform: uppercase;
    letter-spacing: 15px;
    font-size: 1.8rem;
    margin-top: -10px;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(0,255,153,0.6);
    font-weight: 300;
    font-family: 'Courier New', monospace;
    text-align: center;
  }
  
  .logo-title-container {
    margin-bottom: 40px;
    text-align: center;
  }
  
  .description-container {
    background: rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(0, 255, 153, 0.3);
    backdrop-filter: blur(3px);
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
    margin-top: 20px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    position: relative;
    margin-bottom: 60px;
  }
  
  .company-description {
    color: #cccccc;
    font-size: 1.15rem;
    line-height: 1.6;
    margin: 0;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Language toggle */
  .language-toggle {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background: none;
    padding: 0;
    font-size: 0.9rem;
    color: #00ff99;
    cursor: pointer;
    user-select: none;
    pointer-events: auto;
    font-family: 'Courier New', monospace;
  }
  
  .language-toggle:hover {
    text-shadow: 0 0 8px rgba(0, 255, 153, 0.8);
  }
  
  /* Action buttons container */
  .action-buttons-container {
    position: absolute;
    left: 50%;
    top: calc(100% + 80px);
    transform: translateX(-50%);
    display: flex;
    gap: 40px;
    z-index: 3;
    flex-wrap: nowrap;
    width: max-content;
  }

  /* Subscribe button */
  #subscribe-button {
    background: rgba(0, 255, 153, 0.15);
    color: #00ff99;
    padding: 15px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.1rem;
    border: 2px solid #00ff99;
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
    z-index: 3;
    white-space: nowrap;
    flex-shrink: 0;
    width: 220px;
    text-align: center;
  }

  #subscribe-button:hover {
    background: rgba(0, 255, 153, 0.25);
    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6);
    transform: scale(1.05);
  }

  /* WhatsApp button - identico al subscribe button */
  #whatsapp-button {
    background: rgba(0, 255, 153, 0.15);
    color: #00ff99;
    padding: 15px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.1rem;
    border: 2px solid #00ff99;
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
    z-index: 3;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    flex-shrink: 0;
    width: 220px;
    text-align: center;
  }

  #whatsapp-button:hover {
    background: rgba(0, 255, 153, 0.25);
    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6);
    transform: scale(1.05);
  }
`;
