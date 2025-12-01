import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  colorType: 'black' | 'gray' | 'white';
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Particle[] = [];
    // Densidade otimizada para não prejudicar legibilidade
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    // Create soot particles with varied colors
    for (let i = 0; i < particleCount; i++) {
      // Distribuição: 50% preto, 30% cinza, 20% branco
      const rand = Math.random();
      let colorType: 'black' | 'gray' | 'white';
      if (rand < 0.5) {
        colorType = 'black';
      } else if (rand < 0.8) {
        colorType = 'gray';
      } else {
        colorType = 'white';
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.3, // Tamanhos menores
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: Math.random() * 0.25 + 0.05,
        opacity: Math.random() * 0.35 + 0.08, // Opacidade reduzida
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        colorType,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position - fuligem cai suavemente
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Wrap around screen
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        // Fuligem retorna ao topo quando cai muito
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }

        // Save context for rotation
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Draw soot particle - forma irregular
        const sootShapes = [
          // Círculo irregular
          () => {
            ctx.beginPath();
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            ctx.fill();
          },
          // Forma alongada
          () => {
            ctx.beginPath();
            ctx.ellipse(0, 0, particle.size, particle.size * 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
          },
          // Forma irregular
          () => {
            ctx.beginPath();
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size * 0.7, particle.size * 0.3);
            ctx.lineTo(-particle.size * 0.5, particle.size * 0.5);
            ctx.closePath();
            ctx.fill();
          }
        ];

        // Cor de fuligem baseada no tipo - opacidades ajustadas
        let fillStyle: string;
        if (particle.colorType === 'black') {
          const grayValue = Math.floor(Math.random() * 25 + 10); // 10-35 (preto/cinza escuro)
          fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${particle.opacity * 0.6})`;
        } else if (particle.colorType === 'gray') {
          const grayValue = Math.floor(Math.random() * 70 + 110); // 110-180 (cinza médio)
          fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${particle.opacity * 0.5})`;
        } else {
          // white
          const whiteValue = Math.floor(Math.random() * 35 + 220); // 220-255 (branco/cinza claro)
          fillStyle = `rgba(${whiteValue}, ${whiteValue}, ${whiteValue}, ${particle.opacity * 0.4})`;
        }
        
        ctx.fillStyle = fillStyle;
        
        // Desenha forma aleatória
        const shapeIndex = Math.floor(particle.x + particle.y) % 3;
        sootShapes[shapeIndex]();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ mixBlendMode: 'normal', opacity: 0.5, zIndex: 9999 }}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
