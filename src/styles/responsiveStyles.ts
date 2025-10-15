
export const responsiveStyles = `
  /* Responsive */
  @media (max-width: 768px) {
    .header-container {
      top: 5%;
      width: 85%;
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
      max-width: 550px;
    }
    .company-description {
      font-size: 1rem;
    }
    .action-buttons-container {
      gap: 40px;
      top: calc(100% + 100px);
    }
    #subscribe-button {
      padding: 12px 15px;
      font-size: 0.95rem;
      letter-spacing: 1px;
      width: 180px;
    }
    #whatsapp-button {
      padding: 12px 15px;
      font-size: 0.95rem;
      letter-spacing: 1px;
      width: 180px;
    }
    .email-modal-content {
      width: 80%;
      max-width: 320px;
    }
  }
  
  @media (max-width: 480px) {
    .header-container {
      top: 4%;
      width: 85%;
    }
    .logo {
      max-width: 240px;
    }
    .company-title {
      font-size: 1.4rem;
      letter-spacing: 8px;
      margin-top: -5px;
      margin-bottom: 12px;
    }
    .description-container {
      padding: 10px;
      margin-top: 15px;
      margin-bottom: 40px;
      max-width: 400px;
    }
    .company-description {
      font-size: 0.85rem;
      line-height: 1.4;
    }
    .action-buttons-container {
      gap: 30px;
      top: calc(100% + 90px);
    }
    #subscribe-button {
      padding: 10px 10px;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      width: 145px;
    }
    #whatsapp-button {
      padding: 10px 10px;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      width: 145px;
    }
  }
`;
