
import React from 'react';

const GlobalStyles: React.FC = () => {
  return (
    <style>{`
      body {
        margin: 0;
        background: #1a1a1a;
        overflow: hidden;
        font-family: 'Courier New', monospace;
      }
      
      /* Particles */
      .ascii-object {
        position: absolute;
        font-size: 20px;
        line-height: 20px;
        color: #00ff99;
        text-shadow: 0 0 5px rgba(0,255,153,0.6);
        z-index: 2;
        will-change: transform;
        transition: opacity 0.5s ease-out;
      }
      
      .bitcoin-symbol {
        color: rgb(255,153,0);
        text-shadow: 0 0 5px rgba(255,153,0,0.6);
      }
      
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
      
      /* Subscribe button */
      #subscribe-button {
        position: absolute;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
        background: rgba(0, 255, 153, 0.15);
        color: #00ff99;
        padding: 15px 40px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.1rem;
        border: 2px solid #00ff99;
        box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
        z-index: 3;
      }
      
      #subscribe-button:hover {
        background: rgba(0, 255, 153, 0.25);
        box-shadow: 0 0 20px rgba(0, 255, 153, 0.6);
        transform: translate(-50%, -50%) scale(1.05);
      }
      
      /* Modal */
      .email-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .email-modal-content {
        background: #1a1a1a;
        padding: 30px;
        border: 2px solid #00ff99;
        border-radius: 15px;
        text-align: center;
        color: #00ff99;
        width: 350px;
      }
      
      .modal-input {
        padding: 14px;
        margin: 12px 0;
        background: #1a1a1a;
        border: 2px solid #00ff99;
        color: #00ff99;
        width: 85%;
        font-family: 'Courier New', monospace;
        font-size: 1rem;
        border-radius: 5px;
      }
      
      .modal-button {
        background: #00ff99;
        color: #1a1a1a;
        padding: 14px;
        width: 85%;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
        font-family: 'Courier New', monospace;
        letter-spacing: 1px;
        margin-top: 12px;
        border-radius: 5px;
        font-size: 1.1rem;
      }
      
      .modal-button:hover {
        opacity: 0.8;
      }
      
      .modal-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .header-container {
          top: 5%;
          width: 90%;
        }
        .logo {
          max-width: 280px;
        }
        .company-title {
          font-size: 1.6rem;
          letter-spacing: 10px;
          margin-top: -5px;
          margin-bottom: 15px;
        }
        .description-container {
          padding: 12px;
          margin-top: 20px;
        }
        .company-description {
          font-size: 1rem;
        }
        #subscribe-button {
          top: 75%;
          padding: 12px 30px;
          font-size: 1rem;
        }
        .email-modal-content {
          width: 80%;
          max-width: 320px;
        }
      }
      
      @media (max-width: 480px) {
        .header-container {
          top: 4%;
        }
        .logo {
          max-width: 280px;
        }
        .company-title {
          font-size: 1.5rem;
          letter-spacing: 10px;
          margin-top: -5px;
          margin-bottom: 12px;
        }
        .description-container {
          padding: 10px;
          margin-top: 15px;
        }
        .company-description {
          font-size: 0.9rem;
          line-height: 1.4;
        }
        #subscribe-button {
          padding: 10px 25px;
          font-size: 0.9rem;
        }
      }
    `}</style>
  );
};

export default GlobalStyles;
