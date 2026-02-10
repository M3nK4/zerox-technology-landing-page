
export const responsiveStyles = `
  /* Large desktops (1440px+) */
  @media (min-width: 1440px) {
    .header-container {
      max-width: 1000px;
    }
    .logo {
      max-width: 560px;
    }
    .company-title {
      letter-spacing: 26px;
      padding-left: 26px;
    }
    .action-button {
      width: 80px;
      height: 80px;
    }
    .action-icon {
      font-size: 2rem;
    }
    .action-buttons-container {
      gap: 50px;
    }
  }

  /* Small laptops / tablets landscape (768px - 1023px) */
  @media (max-width: 1023px) {
    .header-container {
      width: 92%;
    }
    .company-title {
      letter-spacing: 18px;
      padding-left: 18px;
    }
  }

  /* Tablets portrait (768px) */
  @media (max-width: 768px) {
    .header-container {
      width: 94%;
    }
    .company-title {
      letter-spacing: 14px;
      padding-left: 14px;
    }
    .action-buttons-container {
      gap: 35px;
    }
    .action-button {
      width: 65px;
      height: 65px;
    }
    .action-icon {
      font-size: 1.7rem;
    }
  }

  /* Large phones (481px - 640px) */
  @media (max-width: 640px) {
    .header-container {
      width: 95%;
    }
    .company-title {
      letter-spacing: 10px;
      padding-left: 10px;
    }
    .company-description {
      font-size: clamp(0.72rem, 1.6vw, 0.95rem);
    }
    .language-btn {
      font-size: 0.72rem;
      padding: 3px 6px;
    }
    .action-buttons-container {
      gap: 28px;
    }
    .action-button {
      width: 58px;
      height: 58px;
    }
    .action-icon {
      font-size: 1.5rem;
    }
  }

  /* Standard phones (376px - 480px) */
  @media (max-width: 480px) {
    .header-container {
      width: 96%;
    }
    .company-title {
      letter-spacing: 8px;
      padding-left: 8px;
      margin-top: -6px;
    }
    .company-description {
      font-size: clamp(0.74rem, 1.8vw, 0.92rem);
    }
    .language-btn {
      font-size: 0.65rem;
      padding: 2px 5px;
    }
    .language-selector {
      gap: 5px;
    }
    .action-buttons-container {
      gap: 22px;
    }
    .action-button {
      width: 52px;
      height: 52px;
      border-radius: 10px;
    }
    .action-icon {
      font-size: 1.3rem;
    }
  }

  /* Small phones (375px and below) */
  @media (max-width: 375px) {
    .company-title {
      letter-spacing: 6px;
      padding-left: 6px;
    }
    .company-description {
      font-size: 0.75rem;
    }
    .language-btn {
      font-size: 0.58rem;
      padding: 2px 4px;
    }
    .language-selector {
      gap: 3px;
    }
    .action-buttons-container {
      gap: 18px;
    }
    .action-button {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      border-width: 1.5px;
    }
    .action-icon {
      font-size: 1.2rem;
    }
  }

  /* Very small phones (320px) */
  @media (max-width: 320px) {
    .action-buttons-container {
      gap: 14px;
    }
    .action-button {
      width: 42px;
      height: 42px;
    }
    .action-icon {
      font-size: 1rem;
    }
  }

  /* ---- HEIGHT-BASED QUERIES ---- */

  /* Short viewports (< 700px height) */
  @media (max-height: 700px) {
    .header-container {
      top: 1%;
    }
    .logo {
      max-width: min(400px, 45vw);
    }
    .logo-title-container {
      margin-bottom: 1vh;
    }
    .company-title {
      margin-top: -8px;
    }
    .description-container {
      margin-bottom: 2vh;
    }
    .action-button {
      width: 60px;
      height: 60px;
    }
    .action-icon {
      font-size: 1.5rem;
    }
  }

  /* Very short viewports (< 600px height) */
  @media (max-height: 600px) {
    .logo {
      max-width: min(320px, 40vw);
    }
    .company-title {
      margin-top: -6px;
    }
    .description-container {
      margin-bottom: 1.5vh;
    }
    .language-selector {
      margin-top: 1vh;
    }
    .action-button {
      width: 54px;
      height: 54px;
    }
    .action-buttons-container {
      gap: 25px;
    }
    .action-icon {
      font-size: 1.3rem;
    }
  }

  /* Extra short viewports (< 500px height) - landscape phones etc. */
  @media (max-height: 500px) {
    .header-container {
      top: 1%;
    }
    .logo {
      max-width: min(250px, 30vw);
    }
    .logo-title-container {
      margin-bottom: 0.5vh;
    }
    .company-title {
      margin-top: -5px;
    }
    .description-container {
      margin-bottom: 1vh;
    }
    .language-selector {
      margin-top: 0.5vh;
    }
    .action-button {
      width: 46px;
      height: 46px;
    }
    .action-buttons-container {
      gap: 20px;
    }
    .action-icon {
      font-size: 1.2rem;
    }
  }
`;
