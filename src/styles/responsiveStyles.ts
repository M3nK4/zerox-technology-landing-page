
export const responsiveStyles = `
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
      margin-bottom: 50px;
    }
    .company-description {
      font-size: 1rem;
    }
    #subscribe-button {
      top: calc(100% + 60px);
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
      margin-bottom: 40px;
    }
    .company-description {
      font-size: 0.9rem;
      line-height: 1.4;
    }
    #subscribe-button {
      top: calc(100% + 50px);
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }
`;
