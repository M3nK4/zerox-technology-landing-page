
import { useEffect, useRef } from 'react';

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

export const useParticleSystem = () => {
  const particlesRef = useRef<Particle[]>([]);
  const particleCounterRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const maxParticles = 70;
    const gravity = 0.5;
    const floorRestitution = 0.7;
    const wallRestitution = 0.8;
    const floorFriction = 0.85;
    let floorY = window.innerHeight - 20;

    const handleResize = () => {
      floorY = window.innerHeight - 20;
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
        this.el.style.textShadow = '0 0 8px rgba(0,255,153,0.8)';
        this.el.style.zIndex = '2';
        this.el.style.willChange = 'transform';
        this.el.style.transition = 'opacity 0.5s ease-out';
        this.el.style.fontFamily = "'Courier New', monospace";

        particleCounterRef.current++;
        if (particleCounterRef.current % 25 === 0) {
          this.el.textContent = '₿';
          this.el.style.color = 'rgb(255,153,0)';
          this.el.style.textShadow = '0 0 8px rgba(255,153,0,0.8)';
        } else {
          this.el.textContent = Math.random() < 0.5 ? '0' : '1';
        }

        document.body.appendChild(this.el);
        this.radius = 12;
        this.mass = Math.random() * 0.8 + 0.5;
        this.opacity = 1.0;
        this.fading = false;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.reset();
      }

      reset() {
        this.x = Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
        this.y = -30;
        this.vx = (Math.random() * 4 - 2);
        this.vy = Math.random() * 3 + 2;
        this.opacity = 1.0;
        this.fading = false;
        this.el.style.opacity = this.opacity.toString();
      }

      update(deltaTime: number): boolean {
        if (this.fading) {
          this.opacity -= 0.02;
          this.el.style.opacity = this.opacity.toString();
          if (this.opacity <= 0) {
            return false;
          }
          return true;
        }

        if (this.y > window.innerHeight + 100) {
          this.reset();
          return true;
        }

        const timeScale = Math.min(deltaTime / (1000/60), 2);
        
        // Applica gravità
        this.vy += gravity * timeScale;
        
        // Aggiorna posizione
        this.x += this.vx * timeScale;
        this.y += this.vy * timeScale;

        // Collisione con i bordi laterali
        if (this.x - this.radius <= 0) {
          this.x = this.radius;
          this.vx = Math.abs(this.vx) * wallRestitution;
        }
        if (this.x + this.radius >= window.innerWidth) {
          this.x = window.innerWidth - this.radius;
          this.vx = -Math.abs(this.vx) * wallRestitution;
        }

        // Collisione con il pavimento
        if (this.y + this.radius >= floorY) {
          this.y = floorY - this.radius;
          this.vy = -Math.abs(this.vy) * floorRestitution;
          this.vx *= floorFriction;
          
          // Ferma la particella se ha poca energia
          if (Math.abs(this.vy) < 1) this.vy = 0;
          if (Math.abs(this.vx) < 0.5) this.vx = 0;
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
            
            // Separa le particelle
            const totalMass = a.mass + b.mass;
            const aRatio = b.mass / totalMass;
            const bRatio = a.mass / totalMass;
            
            a.x -= nx * overlap * aRatio;
            a.y -= ny * overlap * aRatio;
            b.x += nx * overlap * bRatio;
            b.y += ny * overlap * bRatio;
            
            // Calcola le velocità dopo la collisione
            const vRelativeX = b.vx - a.vx;
            const vRelativeY = b.vy - a.vy;
            const vDotN = vRelativeX * nx + vRelativeY * ny;
            
            if (vDotN > 0) continue;
            
            const restitution = 0.9;
            const impulse = -(1 + restitution) * vDotN / (1 / a.mass + 1 / b.mass);
            const impulseX = impulse * nx;
            const impulseY = impulse * ny;
            
            a.vx -= impulseX / a.mass;
            a.vy -= impulseY / a.mass;
            b.vx += impulseX / b.mass;
            b.vy += impulseY / b.mass;
          }
        }
      }
    };

    const checkCollisionWithElement = (p: Particle, element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const buffer = 5;
      
      if (
        p.x + p.radius > rect.left - buffer &&
        p.x - p.radius < rect.right + buffer &&
        p.y + p.radius > rect.top - buffer &&
        p.y - p.radius < rect.bottom + buffer
      ) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const nx = dx / distance;
          const ny = dy / distance;
          
          // Sposta la particella fuori dall'elemento
          const minDistance = Math.max(rect.width, rect.height) / 2 + p.radius + buffer;
          p.x = centerX + nx * minDistance;
          p.y = centerY + ny * minDistance;
          
          // Rifletti la velocità
          const restitution = 0.8;
          const vDotN = p.vx * nx + p.vy * ny;
          if (vDotN < 0) {
            p.vx = p.vx - (1 + restitution) * vDotN * nx;
            p.vy = p.vy - (1 + restitution) * vDotN * ny;
          }
        }
      }
    };

    const createParticle = () => {
      const particles = particlesRef.current;
      if (particles.length >= maxParticles) {
        const oldestIndex = Math.floor(Math.random() * Math.min(10, particles.length));
        particles[oldestIndex].startFade();
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
      
      // Collisione con il pulsante subscribe
      const subscribeButton = document.getElementById('subscribe-button');
      if (subscribeButton) {
        particles.forEach(p => {
          checkCollisionWithElement(p, subscribeButton);
        });
      }

      // Collisione con il banner dei cookies
      const cookieBanner = document.querySelector('.fixed.bottom-0') as HTMLElement;
      if (cookieBanner && cookieBanner.offsetHeight > 0) {
        particles.forEach(p => {
          checkCollisionWithElement(p, cookieBanner);
        });
      }
      
      animationIdRef.current = requestAnimationFrame(update);
    };

    const intervalId = setInterval(() => {
      createParticle();
    }, 500);

    animationIdRef.current = requestAnimationFrame(update);

    // Crea particelle iniziali
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 100);
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
};
