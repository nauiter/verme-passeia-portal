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
  depth: number; // 0.3 (distante) a 1.0 (próximo) - para efeito parallax
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
    // Partículas extras para as bordas
    const edgeParticleCount = window.innerWidth < 768 ? 30 : 60;

    // Sistema de vento
    let windForce = 0;
    let windDirection = 1; // 1 = direita, -1 = esquerda
    let windChangeTime = Date.now();
    const windChangeInterval = 3000 + Math.random() * 4000; // Muda a cada 3-7 segundos

    // Create regular soot particles
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

      const depth = Math.random() * 0.7 + 0.3; // 0.3 (longe) a 1.0 (perto)
      const baseSize = Math.random() * 4.5 + 0.2;
      const size = baseSize * depth; // Partículas próximas são maiores
      const speedY = ((size / 5) * 0.4 + Math.random() * 0.15) * depth; // Mais próximas caem mais rápido

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.2 * depth,
        speedY,
        opacity: (Math.random() * 0.45 + 0.15) * depth, // Mais próximas são mais opacas
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        colorType,
        depth,
      });
    }

    // Create edge particles - concentradas nas bordas
    for (let i = 0; i < edgeParticleCount; i++) {
      const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
      let x, y;
      
      switch(edge) {
        case 0: // top
          x = Math.random() * canvas.width;
          y = Math.random() * 150; // primeiros 150px
          break;
        case 1: // right
          x = canvas.width - Math.random() * 150;
          y = Math.random() * canvas.height;
          break;
        case 2: // bottom
          x = Math.random() * canvas.width;
          y = canvas.height - Math.random() * 150;
          break;
        default: // left
          x = Math.random() * 150;
          y = Math.random() * canvas.height;
      }

      // Partículas das bordas são mais escuras e maiores
      const rand = Math.random();
      let colorType: 'black' | 'gray' | 'white';
      if (rand < 0.7) {
        colorType = 'black';
      } else if (rand < 0.9) {
        colorType = 'gray';
      } else {
        colorType = 'white';
      }

      const depth = Math.random() * 0.7 + 0.3; // 0.3 (longe) a 1.0 (perto)
      const baseSize = Math.random() * 5 + 0.8;
      const size = baseSize * depth; // Partículas próximas são maiores
      const speedY = ((size / 6) * 0.35 + Math.random() * 0.1) * depth; // Física com parallax

      particles.push({
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.1 * depth,
        speedY,
        opacity: (Math.random() * 0.5 + 0.2) * depth, // Mais próximas são mais opacas
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        colorType,
        depth,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sistema de rajadas de vento
      const now = Date.now();
      if (now - windChangeTime > windChangeInterval) {
        windChangeTime = now;
        // Rajada ocasional (30% de chance)
        if (Math.random() < 0.3) {
          windForce = (Math.random() * 0.8 + 0.4) * (Math.random() < 0.5 ? 1 : -1); // -1.2 a 1.2
          windDirection = windForce > 0 ? 1 : -1;
        } else {
          // Vento calmo
          windForce = 0;
        }
      }
      
      // Suavizar transição do vento
      const targetWindForce = windForce;
      windForce += (targetWindForce - windForce) * 0.02;

      // Desenhar vinheta de fuligem nas bordas - mais visível
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) * 0.3,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.7, 'rgba(20, 20, 20, 0.08)');
      gradient.addColorStop(1, 'rgba(15, 15, 15, 0.2)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position - fuligem cai suavemente + efeito do vento com parallax
        particle.x += particle.speedX + (windForce * 0.5 * particle.depth); // Vento afeta mais as próximas
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

        // Cor de fuligem baseada no tipo - opacidades aumentadas para visibilidade
        let fillStyle: string;
        if (particle.colorType === 'black') {
          const grayValue = Math.floor(Math.random() * 25 + 10); // 10-35 (preto/cinza escuro)
          fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${particle.opacity * 0.85})`;
        } else if (particle.colorType === 'gray') {
          const grayValue = Math.floor(Math.random() * 70 + 110); // 110-180 (cinza médio)
          fillStyle = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${particle.opacity * 0.75})`;
        } else {
          // white
          const whiteValue = Math.floor(Math.random() * 35 + 220); // 220-255 (branco/cinza claro)
          fillStyle = `rgba(${whiteValue}, ${whiteValue}, ${whiteValue}, ${particle.opacity * 0.65})`;
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
      style={{ mixBlendMode: 'normal', opacity: 0.7, zIndex: 10000 }}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
