
export const particleStyles = `
  /* Particles with CRT glow */
  .ascii-object {
    position: absolute;
    font-size: 20px;
    line-height: 20px;
    color: #00ff99;
    text-shadow: 
      0 0 5px rgba(0,255,153,0.8),
      0 0 10px rgba(0,255,153,0.6),
      0 0 15px rgba(0,255,153,0.4);
    z-index: 2;
    will-change: transform;
    transition: opacity 0.5s ease-out;
    filter: brightness(1.2) contrast(1.1);
  }
  
  .bitcoin-symbol {
    color: rgb(255,153,0);
    text-shadow: 
      0 0 5px rgba(255,153,0,0.8),
      0 0 10px rgba(255,153,0,0.6),
      0 0 15px rgba(255,153,0,0.4);
    filter: brightness(1.2) contrast(1.1);
  }
  
  /* CRT phosphor glow effect */
  @keyframes phosphor-glow {
    0%, 100% { 
      filter: brightness(1) contrast(1.1);
    }
    50% { 
      filter: brightness(1.3) contrast(1.2);
    }
  }
  
  .ascii-object:hover {
    animation: phosphor-glow 2s ease-in-out infinite;
  }
`;
