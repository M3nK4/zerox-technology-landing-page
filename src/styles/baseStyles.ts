
export const baseStyles = `
  body {
    margin: 0;
    background: #1a1a1a;
    overflow: hidden;
    font-family: 'Courier New', monospace;
  }

  /* Footer */
  .footer-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(0, 255, 153, 0.15);
    padding: 8px 16px;
    z-index: 40;
    font-family: 'Courier New', monospace;
  }

  .footer-inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .footer-top {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-company {
    color: #00ff99;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.35);
    font-size: 0.65rem;
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.5px;
  }

  .footer-link:hover {
    color: #00ff99;
  }

  .footer-dot {
    color: rgba(255, 255, 255, 0.2);
    font-size: 0.65rem;
  }

  .footer-copyright {
    color: rgba(255, 255, 255, 0.25);
    font-size: 0.6rem;
    letter-spacing: 0.5px;
  }

  .footer-cookie-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: 'Courier New', monospace;
  }

  /* Footer responsive */
  @media (max-width: 480px) {
    .footer-container {
      padding: 6px 10px;
    }
    .footer-top {
      gap: 5px;
    }
    .footer-company {
      font-size: 0.65rem;
    }
    .footer-link {
      font-size: 0.56rem;
    }
    .footer-dot {
      font-size: 0.56rem;
    }
    .footer-copyright {
      font-size: 0.52rem;
    }
  }

  @media (max-width: 375px) {
    .footer-container {
      padding: 5px 8px;
    }
  }
`;
