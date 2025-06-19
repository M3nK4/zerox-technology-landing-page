
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
        
        const restitution = 0.5;
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
      
      // Collisione con il pulsante subscribe
      const subscribeButton = document.getElementById('subscribe-button');
      if (subscribeButton) {
        for (let i = 0; i < 3; i++) {
          particles.forEach(p => {
            checkCollisionWithElement(p, subscribeButton);
          });
        }
      }

      // Collisione con il banner dei cookies quando è visibile - fix del selettore
      const cookieBanner = document.querySelector('.fixed.bottom-0') as HTMLElement;
      if (cookieBanner && cookieBanner.offsetHeight > 0) {
        // Esegue più iterazioni per collisioni più precise
        for (let i = 0; i < 8; i++) {
          particles.forEach(p => {
            checkCollisionWithElement(p, cookieBanner);
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
};
