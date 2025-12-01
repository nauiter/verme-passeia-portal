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
    // Mais partículas para efeito de fuligem constante
    const particleCount = window.innerWidth < 768 ? 60 : 120;

    // Create soot particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5, // Tamanhos variados de fuligem
        speedX: (Math.random() - 0.5) * 0.15, // Movimento horizontal sutil
        speedY: Math.random() * 0.2 + 0.05, // Queda suave para baixo
        opacity: Math.random() * 0.4 + 0.05, // Opacidade variável
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
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

        // Cor de fuligem - preto/cinza muito escuro
        const grayValue = Math.floor(Math.random() * 30 + 10); // 10-40
        ctx.fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${particle.opacity})`;
        
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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply', opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
