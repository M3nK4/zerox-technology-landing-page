
export const modalStyles = `
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
`;
