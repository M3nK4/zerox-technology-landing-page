
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Country codes for phone numbers
const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+31', country: 'NL', flag: '🇳🇱' },
  { code: '+41', country: 'CH', flag: '🇨🇭' },
  { code: '+43', country: 'AT', flag: '🇦🇹' },
  { code: '+32', country: 'BE', flag: '🇧🇪' },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
  opacity: number;
  fading: boolean;
  el: HTMLDivElement;
  update: (deltaTime: number) => boolean;
  startFade: () => void;
  remove: () => void;
  reset: () => void;
}

const Index = () => {
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+39');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();
  
  const particlesRef = useRef<Particle[]>([]);
  const particleCounterRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const maxParticles = 70;
    const gravity = 0.3;
    const floorRestitution = 0.2;
    const wallRestitution = 0.8;
    const floorFriction = 0.9;
    let floorY = window.innerHeight;

    const handleResize = () => {
      floorY = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class ParticleClass implements Particle {
      el: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      mass: number;
      opacity: number;
      fading: boolean;

      constructor() {
        this.el = document.createElement('div');
        this.el.className = 'ascii-object';
        this.el.style.position = 'absolute';
        this.el.style.fontSize = '20px';
        this.el.style.lineHeight = '20px';
        this.el.style.color = '#00ff99';
        this.el.style.textShadow = '0 0 5px rgba(0,255,153,0.6)';
        this.el.style.zIndex = '2';
        this.el.style.willChange = 'transform';
        this.el.style.transition = 'opacity 0.5s ease-out';
        this.el.style.fontFamily = "'Courier New', monospace";

        particleCounterRef.current++;
        if (particleCounterRef.current % 30 === 0) {
          this.el.textContent = '₿';
          this.el.style.color = 'rgb(255,153,0)';
          this.el.style.textShadow = '0 0 5px rgba(255,153,0,0.6)';
        } else {
          this.el.textContent = Math.random() < 0.5 ? '0' : '1';
        }

        document.body.appendChild(this.el);
        this.radius = 10;
        this.mass = Math.random() * 0.5 + 0.8;
        this.opacity = 1.0;
        this.fading = false;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.reset();
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = -20;
        this.vx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
        this.vy = Math.random() * 2 + 1;
        this.opacity = 1.0;
        this.fading = false;
        this.el.style.opacity = this.opacity.toString();
      }

      update(deltaTime: number): boolean {
        if (this.fading) {
          this.opacity -= 0.05;
          this.el.style.opacity = this.opacity.toString();
          if (this.opacity <= 0) {
            return false;
          }
          return true;
        }

        if (this.y > floorY + 50) {
          this.reset();
          return true;
        }

        const timeScale = deltaTime / (1000/60);
        this.vy += gravity * timeScale * this.mass;
        this.x += this.vx * timeScale;
        this.y += this.vy * timeScale;

        if (this.x - this.radius < 0) {
          this.x = this.radius;
          this.vx = -this.vx * wallRestitution;
        }
        if (this.x + this.radius > window.innerWidth) {
          this.x = window.innerWidth - this.radius;
          this.vx = -this.vx * wallRestitution;
        }

        if (this.y + this.radius > floorY) {
          this.y = floorY - this.radius;
          this.vy = -this.vy * floorRestitution;
          this.vx *= floorFriction;
          if (Math.abs(this.vy) < 0.1) this.vy = 0;
          if (Math.abs(this.vx) < 0.1) this.vx = 0;
        }

        this.el.style.transform = `translate(${this.x - this.radius}px, ${this.y - this.radius}px)`;
        return true;
      }

      startFade() {
        this.fading = true;
      }

      remove() {
        if (this.el.parentNode) {
          document.body.removeChild(this.el);
        }
      }
    }

    const resolveCollisions = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSquared = dx * dx + dy * dy;
          const minDist = a.radius + b.radius;
          
          if (distSquared < minDist * minDist && distSquared > 0) {
            const dist = Math.sqrt(distSquared);
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;
            const totalMass = a.mass + b.mass;
            const aRatio = b.mass / totalMass;
            const bRatio = a.mass / totalMass;
            
            a.x -= nx * overlap * aRatio;
            a.y -= ny * overlap * aRatio;
            b.x += nx * overlap * bRatio;
            b.y += ny * overlap * bRatio;
            
            const vRelativeX = b.vx - a.vx;
            const vRelativeY = b.vy - a.vy;
            const vDotN = vRelativeX * nx + vRelativeY * ny;
            
            if (vDotN > 0) continue;
            
            const restitution = 0.8;
            const j = -(1 + restitution) * vDotN / (1 / a.mass + 1 / b.mass);
            const impulseX = j * nx;
            const impulseY = j * ny;
            
            a.vx -= impulseX / a.mass;
            a.vy -= impulseY / a.mass;
            b.vx += impulseX / b.mass;
            b.vy += impulseY / b.mass;
            
            a.vx *= 0.98;
            a.vy *= 0.98;
            b.vx *= 0.98;
            b.vy *= 0.98;
          }
        }
      }
    };

    const checkCollisionWithElement = (p: Particle, element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      if (
        p.x + p.radius > rect.left &&
        p.x - p.radius < rect.right &&
        p.y + p.radius > rect.top &&
        p.y - p.radius < rect.bottom
      ) {
        const penetrationLeft = p.x + p.radius - rect.left;
        const penetrationRight = rect.right - (p.x - p.radius);
        const penetrationTop = p.y + p.radius - rect.top;
        const penetrationBottom = rect.bottom - (p.y - p.radius);
        
        let minPenetration = penetrationLeft;
        let normal = { x: -1, y: 0 };
        if (penetrationRight < minPenetration) {
          minPenetration = penetrationRight;
          normal = { x: 1, y: 0 };
        }
        if (penetrationTop < minPenetration) {
          minPenetration = penetrationTop;
          normal = { x: 0, y: -1 };
        }
        if (penetrationBottom < minPenetration) {
          minPenetration = penetrationBottom;
          normal = { x: 0, y: 1 };
        }
        
        p.x += normal.x * minPenetration;
        p.y += normal.y * minPenetration;
        
        const restitution = 0.3;
        const vDotN = p.vx * normal.x + p.vy * normal.y;
        if (vDotN < 0) {
          p.vx = p.vx - (1 + restitution) * vDotN * normal.x;
          p.vy = p.vy - (1 + restitution) * vDotN * normal.y;
        }
      }
    };

    const createParticle = () => {
      const particles = particlesRef.current;
      if (particles.length >= maxParticles) {
        particles[0].startFade();
      } else {
        const p = new ParticleClass();
        particles.push(p);
      }
    };

    const update = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const keepParticle = particles[i].update(deltaTime);
        if (!keepParticle) {
          particles[i].remove();
          particles.splice(i, 1);
        }
      }
      
      resolveCollisions();
      
      const subscribeButton = document.getElementById('subscribe-button');
      if (subscribeButton) {
        for (let i = 0; i < 3; i++) {
          particles.forEach(p => {
            checkCollisionWithElement(p, subscribeButton);
          });
        }
      }
      
      animationIdRef.current = requestAnimationFrame(update);
    };

    const intervalId = setInterval(() => {
      createParticle();
    }, 667);

    animationIdRef.current = requestAnimationFrame(update);

    for (let i = 0; i < 20; i++) {
      createParticle();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      particlesRef.current.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, []);

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast({
        title: "Errore",
        description: "Per favore inserisci un indirizzo email valido",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          email: email.trim(),
          country_code: whatsappNumber ? countryCode : null,
          whatsapp_number: whatsappNumber.trim() || null
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Successo!",
        description: "Grazie per il tuo interesse. Ti contatteremo presto!",
      });
      
      setEmail('');
      setWhatsappNumber('');
      setShowModal(false);
    } catch (error: any) {
      console.error('Error saving contact:', error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
        
        /* Logo and description container */
        .header-container {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 3;
          width: 80%;
          max-width: 800px;
          pointer-events: none;
        }
        
        .logo {
          max-width: 340px;
          margin-bottom: 0px;
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
        }
        
        .logo-title-container {
          margin-bottom: 40px;
        }
        
        .description-container {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 15px;
          border-radius: 10px;
          border: 1px solid rgba(0, 255, 153, 0.3);
          backdrop-filter: blur(3px);
          box-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
          margin-top: 20px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
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
        
        /* Fixed button in the center */
        #subscribe-button {
          position: absolute;
          left: 50%;
          top: 70%;
          transform: translate(-50%, -50%);
          background: rgba(0,255,153,0.15);
          color: #00ff99;
          padding: 15px 40px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.1rem;
          border: 2px solid #00ff99;
          box-shadow: 0 0 15px rgba(0,255,153,0.3);
          z-index: 3;
        }
        #subscribe-button:hover {
          background: rgba(0,255,153,0.25);
          box-shadow: 0 0 20px rgba(0,255,153,0.6);
          transform: translate(-50%, -50%) scale(1.05);
        }
        /* Modal for email input */
        .email-modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
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
          width: 400px;
          max-width: 90vw;
        }
        .modal-input {
          padding: 14px;
          margin: 12px 0;
          background: #1a1a1a;
          border: 2px solid #00ff99;
          color: #00ff99;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          border-radius: 5px;
          width: 85%;
        }
        .modal-select {
          padding: 14px;
          margin: 12px 0;
          background: #1a1a1a;
          border: 2px solid #00ff99;
          color: #00ff99;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          border-radius: 5px;
          width: 30%;
        }
        .modal-phone-input {
          padding: 14px;
          margin: 12px 0;
          background: #1a1a1a;
          border: 2px solid #00ff99;
          color: #00ff99;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          border-radius: 5px;
          width: 55%;
          margin-left: 10px;
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
        .phone-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Responsive adjustments */
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
          
          .phone-container {
            flex-direction: column;
          }
          .modal-select, .modal-phone-input {
            width: 85%;
            margin-left: 0;
          }
        }
      `}</style>

      {/* Header with logo and description */}
      <div className="header-container">
        <div className="logo-title-container">
          <img src="/lovable-uploads/8fcb2cf1-bd72-44a2-954c-c2e57d5811d5.png" alt="Zerox Lab Logo" className="logo" />
          <h1 className="company-title">TECHNOLOGY</h1>
        </div>
        <div className="description-container">
          <p className="company-description">
            zerox is a technological innovation lab where distributed systems, artificial intelligence, blockchain, cryptocurrencies and cybersecurity converge to explore new technological frontiers
          </p>
        </div>
      </div>

      {/* Fixed button */}
      <div 
        id="subscribe-button" 
        onClick={() => setShowModal(true)}
      >
        more
      </div>

      {/* Modal for email input */}
      {showModal && (
        <div className="email-modal" onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}>
          <div className="email-modal-content">
            <h3 style={{ margin: '0 0 20px 0', fontFamily: "'Courier New', monospace" }}>
              Join our network
            </h3>
            
            <input
              type="email"
              placeholder="Enter your email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modal-input"
              required
            />
            
            <p style={{ margin: '10px 0 5px 0', fontSize: '0.9rem', color: '#cccccc' }}>
              WhatsApp (optional)
            </p>
            
            <div className="phone-container">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="modal-select"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              
              <input
                type="tel"
                placeholder="Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="modal-phone-input"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="modal-button"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
