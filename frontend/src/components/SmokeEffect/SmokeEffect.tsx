import React, { useEffect, useRef } from 'react';
import './SmokeEffect.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  rotation: number;
  angularVelocity: number;
  life: number;
}

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar el tamaño del canvas
    const updateCanvasSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Función para crear una partícula
    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.8 + 0.3; // Velocidad más suave
      return {
        x,
        y,
        radius: Math.random() * 15 + 8, // Radio inicial más pequeño
        color: `rgba(0, 255, 0, ${Math.random() * 0.15 + 0.05})`, // Opacidad más sutil
        vx: Math.cos(angle) * speed * 0.5,
        vy: -Math.random() * 1.5 - 0.5, // Movimiento vertical más lento
        alpha: Math.random() * 0.4 + 0.1, // Opacidad inicial más sutil
        rotation: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.02, // Velocidad de rotación
        life: 1.0 // Vida de la partícula (1.0 = 100%)
      };
    };

    // Función de animación
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      // Actualizar y dibujar partículas
      particlesRef.current = particlesRef.current.filter(particle => {
        // Actualizar posición y propiedades
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy *= 0.99; // Desaceleración vertical
        particle.vx *= 0.995; // Desaceleración horizontal
        particle.life *= 0.98; // Reducción gradual de la vida
        particle.alpha = particle.life * 0.4; // Alfa basado en la vida
        particle.radius += 0.2;
        particle.rotation += particle.angularVelocity;

        // Dibujar partícula solo si aún está viva
        if (particle.life >= 0.01) {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);

          // Crear gradiente radial con forma de nube
          const gradient = ctx.createRadialGradient(
            0, 0, 0,
            0, 0, particle.radius
          );
          gradient.addColorStop(0, `rgba(0, 255, 128, ${particle.alpha * 0.8})`);
          gradient.addColorStop(0.4, `rgba(0, 255, 64, ${particle.alpha * 0.4})`);
          gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          
          // Dibujar una forma más orgánica
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radiusVariation = particle.radius * (0.8 + Math.sin(angle + particle.rotation) * 0.2);
            const x = Math.cos(angle) * radiusVariation;
            const y = Math.sin(angle) * radiusVariation;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          
          ctx.closePath();
          ctx.fill();
          ctx.restore();

          return true;
        }
        return false;
      });

      // Añadir nuevas partículas
      if (Math.random() < 0.2) {
        const centerX = canvas.width / 2;
        const y = canvas.height;
        const offsetX = (Math.random() - 0.5) * 120;
        particlesRef.current.push(createParticle(centerX + offsetX, y));
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Iniciar animación
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="smoke-effect" />;
};

export default SmokeEffect;
