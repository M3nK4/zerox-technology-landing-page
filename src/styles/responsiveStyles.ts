export const responsiveStyles = `
  /* Large desktops (1440px+) */
  @media (min-width: 1440px) {
    .header-container {
      max-width: 1000px;
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
      font-size: clamp(1.6rem, 4.5vw, 3rem);
      letter-spacing: 18px;
      padding-left: 18px;
    }
    .company-description {
      font-size: 1.3rem;
    }
  }

  /* Tablets portrait (641px - 768px) */
  @media (max-width: 768px) {
    .header-container {
      width: 94%;
    }
    .company-title {
      font-size: clamp(1.5rem, 4.5vw, 2.6rem);
      letter-spacing: 14px;
      padding-left: 14px;
    }
    .company-description {
      font-size: 1.25rem;
    }
    .action-buttons-container {
      gap: 35px;
      bottom: 20%;
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
      padding-bottom: 80px;
      padding-top: 4vh;
    }
    .company-title {
      letter-spacing: 10px;
      padding-left: 10px;
    }
    .company-description {
      font-size: 1.2rem;
      line-height: 2;
    }
    .description-container {
      padding: 0 8%;
      margin-top: auto;
      margin-bottom: auto;
      padding-bottom: 34vh;
    }
    .language-btn {
      font-size: 0.75rem;
      padding: 4px 7px;
    }
    .action-buttons-container {
      gap: 32px;
      bottom: 30%;
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
      padding-top: 4vh;
      padding-bottom: 70px;
    }
    .company-title {
      letter-spacing: 8px;
      padding-left: 8px;
      margin-top: -6px;
    }
    .company-description {
      font-size: 1.15rem;
      line-height: 2;
    }
    .description-container {
      padding: 0 6%;
      margin-top: auto;
      margin-bottom: auto;
      padding-bottom: 34vh;
    }
    .language-btn {
      font-size: 0.7rem;
      padding: 3px 6px;
    }
    .language-selector {
      gap: 6px;
    }
    .action-buttons-container {
      gap: 28px;
      bottom: 29%;
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
    .header-container {
      padding-top: 3.5vh;
      padding-bottom: 60px;
    }
    .company-title {
      letter-spacing: 6px;
      padding-left: 6px;
    }
    .company-description {
      font-size: 1.1rem;
      line-height: 1.9;
    }
    .description-container {
      padding: 0 2%;
      padding-bottom: 30vh;
    }
    .language-btn {
      font-size: 0.65rem;
      padding: 3px 5px;
    }
    .language-selector {
      gap: 4px;
    }
    .action-buttons-container {
      gap: 24px;
      bottom: 26%;
    }
    .action-button {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      border-width: 1px;
    }
    .action-icon {
      font-size: 1.2rem;
    }
  }

  /* Very small phones (320px) */
  @media (max-width: 320px) {
    .header-container {
      padding-bottom: 50px;
    }
    .company-description {
      font-size: 1.05rem;
    }
    .action-buttons-container {
      gap: 18px;
      bottom: 24%;
    }
    .action-button {
      width: 42px;
      height: 42px;
    }
    .action-icon {
      font-size: 1rem;
    }
  }

  /* Tall phones (narrow + tall viewport, e.g. iPhone Pro Max) */
  @media (max-width: 480px) and (min-height: 800px) {
    .company-title {
      font-size: clamp(1.8rem, 6.5vw, 2.6rem);
      letter-spacing: 10px;
      padding-left: 10px;
    }
    .description-container {
      padding-bottom: 18vh;
    }
    .action-buttons-container {
      bottom: 16%;
    }
  }

  @media (max-width: 640px) and (min-height: 800px) {
    .company-title {
      font-size: clamp(2rem, 6vw, 3rem);
      letter-spacing: 12px;
      padding-left: 12px;
    }
    .description-container {
      padding-bottom: 18vh;
    }
    .action-buttons-container {
      bottom: 16%;
    }
  }

  /* ---- HEIGHT-BASED QUERIES ---- */

  /* Short viewports (< 700px height) */
  @media (max-height: 700px) {
    .header-container {
      padding-top: 1.5vh;
    }
    .company-title {
      margin-top: -8px;
    }
    .company-description {
      font-size: 1.15rem;
    }
    .action-button {
      width: 60px;
      height: 60px;
    }
    .action-icon {
      font-size: 1.5rem;
    }
    .action-buttons-container {
      bottom: 25%;
    }
  }

  /* Very short viewports (< 600px height) */
  @media (max-height: 600px) {
    .header-container {
      padding-top: 1vh;
    }
    .company-title {
      margin-top: -6px;
    }
    .company-description {
      font-size: 1.1rem;
    }
    .action-button {
      width: 54px;
      height: 54px;
    }
    .action-buttons-container {
      gap: 25px;
      bottom: 22%;
    }
    .action-icon {
      font-size: 1.3rem;
    }
  }

  /* Extra short viewports (< 500px height) - landscape phones etc. */
  @media (max-height: 500px) {
    .header-container {
      padding-top: 0.5vh;
      padding-bottom: 50px;
    }
    .company-title {
      margin-top: -5px;
    }
    .company-description {
      font-size: 1rem;
    }
    .action-button {
      width: 46px;
      height: 46px;
    }
    .action-buttons-container {
      gap: 20px;
      bottom: 18%;
    }
    .action-icon {
      font-size: 1.2rem;
    }
  }
`;
