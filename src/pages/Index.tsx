// GitHub Actions deploy trigger - Updated for zerox.technology domain
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import CookieBanner from "@/components/CookieBanner";
import CookieSettings from "@/components/CookieSettings";
import { Link } from 'react-router-dom';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [emailConsent, setEmailConsent] = useState(false);
  const { toast } = useToast();
  const { hasConsent, acceptAll, acceptNecessary, saveConsent } = useCookieConsent();
  
  const particlesRef = useRef<Particle[]>([]);
  const particleCounterRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationIdRef = useRef<number>();

  const languages = {
    en: {
      label: "EN",
      description: "zerox is a technological innovation lab where distributed systems, artificial intelligence, blockchain, cryptocurrencies and cybersecurity converge to explore new technological frontiers",
      more: "more",
      emailPlaceholder: "enter your email",
      submit: "Submit",
      htmlLang: "en",
      emailConsent: "I agree to the processing of my personal data according to the",
      privacyPolicy: "Privacy Policy",
      and: "and",
      cookiePolicy: "Cookie Policy",
      cookieBanner: {
        title: "Cookie Preferences",
        description: "We use cookies to enhance your browsing experience and analyze our traffic. You can choose which cookies to accept.",
        acceptAll: "Accept All",
        acceptNecessary: "Accept Necessary",
        settings: "Settings",
        privacyPolicy: "Privacy Policy"
      },
      cookieSettings: {
        title: "Cookie Settings",
        description: "Manage your cookie preferences. You can enable or disable different types of cookies below.",
        necessary: {
          name: "Necessary Cookies",
          description: "These cookies are essential for the website to function and cannot be switched off."
        },
        analytics: {
          name: "Analytics Cookies",
          description: "These cookies help us understand how visitors interact with our website."
        },
        marketing: {
          name: "Marketing Cookies",
          description: "These cookies are used to track visitors across websites for marketing purposes."
        },
        saveSettings: "Save Settings",
        acceptAll: "Accept All"
      }
    },
    it: {
      label: "IT", 
      description: "zerox è un laboratorio di innovazione tecnologica in cui sistemi distribuiti, intelligenza artificiale, blockchain, criptovalute e cybersecurity convergono per esplorare nuove frontiere tecnologiche",
      more: "scopri di più",
      emailPlaceholder: "inserisci email",
      submit: "Invia",
      htmlLang: "it",
      emailConsent: "Acconsento al trattamento dei miei dati personali secondo l'",
      privacyPolicy: "Informativa sulla Privacy",
      and: "e la",
      cookiePolicy: "Politica sui Cookie",
      cookieBanner: {
        title: "Preferenze Cookie",
        description: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il nostro traffico. Puoi scegliere quali cookie accettare.",
        acceptAll: "Accetta Tutti",
        acceptNecessary: "Accetta Necessari",
        settings: "Impostazioni",
        privacyPolicy: "Informativa Privacy"
      },
      cookieSettings: {
        title: "Impostazioni Cookie",
        description: "Gestisci le tue preferenze sui cookie. Puoi abilitare o disabilitare diversi tipi di cookie qui sotto.",
        necessary: {
          name: "Cookie Necessari",
          description: "Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati."
        },
        analytics: {
          name: "Cookie Analitici",
          description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web."
        },
        marketing: {
          name: "Cookie di Marketing",
          description: "Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web per scopi di marketing."
        },
        saveSettings: "Salva Impostazioni",
        acceptAll: "Accetta Tutti"
      }
    },
    es: {
      label: "ES",
      description: "zerox es un laboratorio de innovación tecnológica donde los sistemas distribuidos, la inteligencia artificial, la cadena de bloques, las criptomonedas y la ciberseguridad convergen para explorar nuevas fronteras tecnológicas",
      more: "más",
      emailPlaceholder: "introduce email", 
      submit: "Enviar",
      htmlLang: "es",
      emailConsent: "Acepto el procesamiento de mis datos personales según la",
      privacyPolicy: "Política de Privacidad",
      and: "y la",
      cookiePolicy: "Política de Cookies",
      cookieBanner: {
        title: "Preferencias de Cookies",
        description: "Utilizamos cookies para mejorar tu experiencia de navegación y analizar nuestro tráfico. Puedes elegir qué cookies aceptar.",
        acceptAll: "Aceptar Todas",
        acceptNecessary: "Aceptar Necesarias",
        settings: "Configuración",
        privacyPolicy: "Política de Privacidad"
      },
      cookieSettings: {
        title: "Configuración de Cookies",
        description: "Gestiona tus preferencias de cookies. Puedes habilitar o deshabilitar diferentes tipos de cookies a continuación.",
        necessary: {
          name: "Cookies Necesarias",
          description: "Estas cookies son esenciales para que el sitio web funcione y no se pueden desactivar."
        },
        analytics: {
          name: "Cookies Analíticas",
          description: "Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web."
        },
        marketing: {
          name: "Cookies de Marketing",
          description: "Estas cookies se utilizan para rastrear visitantes a través de sitios web con fines de marketing."
        },
        saveSettings: "Guardar Configuración",
        acceptAll: "Aceptar Todas"
      }
    },
    zh: {
      label: "中",
      description: "zerox 是一个技术创新实验室，在这里分布式系统、人工智能、区块链、加密货币和网络安全交汇，探索新的技术前沿",
      more: "更多",
      emailPlaceholder: "输入您的邮箱",
      submit: "提交", 
      htmlLang: "zh-Hans",
      emailConsent: "我同意根据",
      privacyPolicy: "隐私政策",
      and: "和",
      cookiePolicy: "Cookie政策",
      cookieBanner: {
        title: "Cookie偏好",
        description: "我们使用cookie来增强您的浏览体验并分析我们的流量。您可以选择接受哪些cookie。",
        acceptAll: "接受全部",
        acceptNecessary: "接受必要",
        settings: "设置",
        privacyPolicy: "隐私政策"
      },
      cookieSettings: {
        title: "Cookie设置",
        description: "管理您的cookie偏好。您可以在下面启用或禁用不同类型的cookie。",
        necessary: {
          name: "必要Cookie",
          description: "这些cookie对网站功能至关重要，无法关闭。"
        },
        analytics: {
          name: "分析Cookie",
          description: "这些cookie帮助我们了解访问者如何与我们的网站互动。"
        },
        marketing: {
          name: "营销Cookie",
          description: "这些cookie用于跨网站跟踪访问者以进行营销。"
        },
        saveSettings: "保存设置",
        acceptAll: "接受全部"
      }
    },
  };

  const languageOrder = ["en", "it", "es", "zh"] as const;
  const currentLang = languages[languageOrder[currentLangIndex]];

  const cycleLanguage = () => {
    setCurrentLangIndex((prev) => (prev + 1) % languageOrder.length);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", currentLang.htmlLang);
  }, [currentLang]);

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
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    if (!emailConsent) {
      toast({
        title: "Error",
        description: "Please accept the privacy policy to continue",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          email: email.trim()
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Thank you for subscribing!",
      });
      
      setEmail('');
      setEmailConsent(false);
      setShowModal(false);
    } catch (error: any) {
      console.error('Error saving contact:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
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

      {/* Header */}
      <div className="header-container">
        <div className="logo-title-container">
          <img src="/lovable-uploads/8fcb2cf1-bd72-44a2-954c-c2e57d5811d5.png" alt="Zerox Lab Logo" className="logo" />
          <h1 className="company-title">TECHNOLOGY</h1>
        </div>

        <div className="description-container" onClick={cycleLanguage}>
          <p className="company-description">
            {currentLang.description}
          </p>
          <button className="language-toggle" onClick={cycleLanguage} title="Change language">
            {currentLang.label}
          </button>
        </div>
      </div>

      {/* Subscribe button */}
      <div 
        id="subscribe-button" 
        onClick={() => setShowModal(true)}
      >
        {currentLang.more}
      </div>

      {/* Email modal with consent */}
      {showModal && (
        <div className="email-modal" onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}>
          <div className="email-modal-content">
            <input
              type="email"
              placeholder={currentLang.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="modal-input"
              required
            />
            
            <div className="text-left my-4">
              <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailConsent}
                  onChange={(e) => setEmailConsent(e.target.checked)}
                  className="mt-1 accent-green-500"
                />
                <span className="leading-relaxed">
                  {currentLang.emailConsent}{" "}
                  <Link 
                    to={`/privacy?lang=${languageOrder[currentLangIndex]}`}
                    className="text-green-400 hover:text-green-300 underline"
                    target="_blank"
                  >
                    {currentLang.privacyPolicy}
                  </Link>
                  {" "}{currentLang.and}{" "}
                  <Link 
                    to={`/cookies?lang=${languageOrder[currentLangIndex]}`}
                    className="text-green-400 hover:text-green-300 underline"
                    target="_blank"
                  >
                    {currentLang.cookiePolicy}
                  </Link>
                </span>
              </label>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !emailConsent}
              className="modal-button"
            >
              {isSubmitting ? 'Sending...' : currentLang.submit}
            </button>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      {!hasConsent && (
        <CookieBanner
          currentLang={currentLang}
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onShowSettings={() => setShowCookieSettings(true)}
        />
      )}

      {/* Cookie Settings Modal */}
      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        onSave={saveConsent}
        currentLang={currentLang}
      />
    </>
  );
};

export default Index;
