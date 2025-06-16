
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 100;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        .insert([{ email: email.trim() }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Successo!",
        description: "Grazie per il tuo interesse. Ti contatteremo presto!",
      });
      
      setEmail('');
    } catch (error: any) {
      console.error('Error saving email:', error);
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated particles background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)' }}
      />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        {/* Logo */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ZEROX
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300">
            LAB
          </h2>
        </div>

        {/* Main heading */}
        <div className="text-center mb-12 max-w-4xl">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Il Futuro della Tecnologia
            <br />
            <span className="text-blue-400">Inizia Qui</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Innovazione, ricerca e sviluppo all'avanguardia. 
            Unisciti a noi nel plasmare il domani.
          </p>
        </div>

        {/* Email signup form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Invio...' : 'Notificami'}
            </button>
          </div>
        </form>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold mb-2">Innovazione</h4>
            <p className="text-gray-400">Tecnologie all'avanguardia per il futuro</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl mb-4">🔬</div>
            <h4 className="text-xl font-semibold mb-2">Ricerca</h4>
            <p className="text-gray-400">Esperimenti e scoperte rivoluzionarie</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold mb-2">Sviluppo</h4>
            <p className="text-gray-400">Soluzioni rapide e innovative</p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Zerox Lab. Tutti i diritti riservati.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
