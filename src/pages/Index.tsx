
import React, { useState, useEffect, useRef } from 'react';
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/hooks/useLanguage";
import { useParticleSystem } from "@/hooks/useParticleSystem";
import CookieBanner from "@/components/CookieBanner";
import CookieSettings from "@/components/CookieSettings";
import EmailCapture from "@/components/EmailCapture";
import Header from "@/components/Header";
import GlobalStyles from "@/components/GlobalStyles";
import Footer from "@/components/Footer";

const Index = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const { hasConsent, acceptAll, acceptNecessary, saveConsent } = useCookieConsent();
  const { currentLang, currentLangKey, setLanguage, languageOrder } = useLanguage();

  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useParticleSystem();

  // Random interference animation
  const interferenceRef = useRef<HTMLDivElement>(null);
  const interferenceKickRef = useRef<() => void>();
  useEffect(() => {
    const el = interferenceRef.current;
    if (!el) return;
    let pos = 0;
    let velocity = 0.02;
    let targetOpacity = 7.0;
    let currentOpacity = 7.0;
    let nextChangeTime = 0;
    let nextJitterTime = 0;
    let kickDecay = 0;
    let animId: number;

    // Expose kick function for text flash correlation
    interferenceKickRef.current = () => {
      velocity = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.15 + 0.12);
      currentOpacity = Math.random() * 3.0 + 12.0;
      kickDecay = 20;
    };

    const animate = (time: number) => {
      // Random speed/direction changes every 4-10 seconds
      if (time > nextChangeTime) {
        velocity = (Math.random() * 0.06 + 0.01) * (Math.random() < 0.2 ? -1 : 1);
        targetOpacity = Math.random() * 3.0 + 6.0;
        nextChangeTime = time + 4000 + Math.random() * 6000;
      }

      // Random micro-jitter every 300-800ms
      if (time > nextJitterTime) {
        velocity += (Math.random() - 0.5) * 0.015;
        nextJitterTime = time + 300 + Math.random() * 500;
      }

      // Random bright flash — rare but intense
      if (Math.random() < 0.001) {
        currentOpacity = Math.random() * 4.0 + 10.0;
      }

      // Kick decay — fast velocity dampening after text flash
      if (kickDecay > 0) {
        velocity *= 0.92;
        kickDecay--;
      }

      currentOpacity += (targetOpacity - currentOpacity) * 0.01;
      pos -= velocity;

      // Wrap around
      if (pos < -66.67) pos += 66.67;
      if (pos > 0) pos -= 66.67;

      el.style.transform = `translateY(${pos}%)`;
      el.style.opacity = currentOpacity.toString();

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Text transition + flash
  const flashRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const transitioningRef = useRef(false);
  const triggerRef = useRef<() => void>();

  const scheduleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => triggerRef.current?.(), 5000);
  };

  // Horizontal interference line on text change
  const spawnInterferenceLine = () => {
    const line = document.createElement('div');
    const y = 15 + Math.random() * 70; // 15%-85% of viewport
    const h = 1 + Math.random() * 2;
    Object.assign(line.style, {
      position: 'fixed',
      top: `${y}%`,
      left: '0',
      width: '100%',
      height: `${h}px`,
      background: `linear-gradient(90deg, transparent 0%, rgba(0,255,153,0.4) ${10 + Math.random() * 20}%, rgba(255,255,255,0.25) 50%, rgba(0,255,153,0.35) ${70 + Math.random() * 20}%, transparent 100%)`,
      pointerEvents: 'none',
      zIndex: '1',
      opacity: '1',
      transition: 'opacity 0.2s ease-out',
    });
    document.body.appendChild(line);
    requestAnimationFrame(() => {
      line.style.opacity = '0';
    });
    setTimeout(() => line.remove(), 250);
  };

  triggerRef.current = () => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;
    const flash = flashRef.current;
    setIsTransitioning(true);
    interferenceKickRef.current?.();
    spawnInterferenceLine();
    if (flash) {
      const textEl = flash.parentElement?.querySelector('.company-description') as HTMLElement;
      if (textEl) {
        const container = flash.parentElement as HTMLElement;
        const containerRect = container.getBoundingClientRect();
        const textRect = textEl.getBoundingClientRect();
        const relTop = textRect.top - containerRect.top;
        const centerY = relTop + textRect.height / 2;
        flash.style.top = centerY + 'px';
        flash.style.left = '50%';
        flash.style.transform = 'translate(-50%, -50%)';
        flash.style.width = textRect.width + 40 + 'px';
        flash.style.height = textRect.height + 30 + 'px';
      }
      flash.style.transition = 'opacity 0.06s ease-in';
      flash.style.opacity = '1';
    }
    setTimeout(() => {
      setDescriptionIndex(prev => (prev + 1) % currentLang.descriptions.length);
    }, 90);
    setTimeout(() => {
      if (flash) {
        flash.style.transition = 'opacity 0.15s ease-out';
        flash.style.opacity = '0';
      }
      setIsTransitioning(false);
      transitioningRef.current = false;
    }, 130);
    scheduleNext();
  };

  const triggerTransition = () => triggerRef.current?.();

  useEffect(() => {
    timerRef.current = setTimeout(() => triggerRef.current?.(), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // Generate static noise texture via canvas
  const noiseRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = noiseRef.current;
    if (!el) return;
    const size = 64;
    const grain = 2;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const v = Math.floor(Math.random() * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    el.style.backgroundImage = `url(${canvas.toDataURL()})`;
    el.style.backgroundSize = `${size * grain}px ${size * grain}px`;
    el.style.backgroundRepeat = 'repeat';
  }, []);

  return (
    <>
      <GlobalStyles />

      {/* CRT background effects — behind everything */}
      <div className="crt-color-fringe" />
      <div ref={interferenceRef} className="crt-interference" />
      <div ref={noiseRef} className="crt-noise" />

      <Header
        currentLang={currentLang}
        currentLangKey={currentLangKey}
        setLanguage={setLanguage}
        languageOrder={languageOrder}
        descriptionIndex={descriptionIndex}
        isTransitioning={isTransitioning}
        flashRef={flashRef}
        onClickDescription={triggerTransition}
        onClickEmail={() => setShowEmailCapture(true)}
      />

      {hasConsent === false && (
        <CookieBanner
          currentLang={currentLang}
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onShowSettings={() => setShowCookieSettings(true)}
        />
      )}

      <EmailCapture
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        currentLang={currentLang}
      />

      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        onSave={saveConsent}
        currentLang={currentLang}
      />

      <Footer
        currentLang={currentLang}
        onOpenCookieSettings={() => setShowCookieSettings(true)}
      />
    </>
  );
};

export default Index;
