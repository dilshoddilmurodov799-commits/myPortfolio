import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export default function Vortex({
  children,
  className = '',
  containerClassName = '',
  particleCount = 700,
  rangeY = 400,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = 'transparent',
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeCanvas = canvas;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      speed: number;
      radius: number;
      hue: number;

      constructor() {
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * rangeY + safeCanvas.height / 2 - rangeY / 2;
        this.speed = baseSpeed + Math.random() * rangeSpeed;
        this.radius = baseRadius + Math.random() * rangeRadius;
        this.hue = baseHue + Math.random() * 60;
      }

      update() {
        this.x += this.speed;
        if (this.x > safeCanvas.width + this.radius) {
          this.x = -this.radius;
        }
      }

      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, 0.8)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 60%, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = backgroundColor === 'transparent' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      init();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, rangeY, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius, backgroundColor]);

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <motion.canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}