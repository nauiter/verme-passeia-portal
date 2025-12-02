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
  colorType: 'black' | 'darkGray' | 'gray' | 'lightGray' | 'brown' | 'darkBrown' | 'ash' | 'white';
  depth: number; // 0.3 (distante) a 1.0 (próximo) - para efeito parallax
  noiseOffsetX: number; // Offset para turbulência
  noiseOffsetY: number;
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('[FloatingParticles] Componente montado');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('[FloatingParticles] Canvas não encontrado');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('[FloatingParticles] Contexto 2d não disponível');
      return;
    }

    console.log('[FloatingParticles] Canvas inicializado:', {
      width: canvas.width,
      height: canvas.height
    });

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Particle[] = [];
    // Densidade aumentada para maior intensidade atmosférica
    const particleCount = window.innerWidth < 768 ? 120 : 200;
    // Partículas extras para as bordas - mais densas
    const edgeParticleCount = window.innerWidth < 768 ? 80 : 150;

    // Sistema de vento
    let windForce = 0;
    let windDirection = 1; // 1 = direita, -1 = esquerda
    let windChangeTime = Date.now();
    const windChangeInterval = 3000 + Math.random() * 4000; // Muda a cada 3-7 segundos

    // Mouse tracking para interação
    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 120; // Raio de influência do mouse

    // Função de ruído simplificada para turbulência
    const noise = (x: number, y: number) => {
      const sin = Math.sin(x * 0.01) * Math.cos(y * 0.01);
      return sin * 0.5 + 0.5; // Normaliza entre 0 e 1
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create regular soot particles
    for (let i = 0; i < particleCount; i++) {
      // Distribuição realista de fuligem: pretos, cinzas, marrons e brancos
      const rand = Math.random();
      let colorType: 'black' | 'darkGray' | 'gray' | 'lightGray' | 'brown' | 'darkBrown' | 'ash' | 'white';
      if (rand < 0.25) {
        colorType = 'black';
      } else if (rand < 0.40) {
        colorType = 'darkGray';
      } else if (rand < 0.55) {
        colorType = 'gray';
      } else if (rand < 0.65) {
        colorType = 'lightGray';
      } else if (rand < 0.78) {
        colorType = 'brown';
      } else if (rand < 0.88) {
        colorType = 'darkBrown';
      } else if (rand < 0.95) {
        colorType = 'ash';
      } else {
        colorType = 'white';
      }

      const depth = Math.random() * 0.7 + 0.3; // 0.3 (longe) a 1.0 (perto)
      const baseSize = Math.random() * 6.5 + 0.5;
      const size = baseSize * depth; // Partículas próximas são maiores
      const speedY = ((size / 4) * 0.6 + Math.random() * 0.25) * depth; // Mais rápidas

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.35 * depth,
        speedY,
        opacity: (Math.random() * 0.6 + 0.25) * depth, // Mais opacas
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        colorType,
        depth,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
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

      // Partículas das bordas são mais escuras - tons de fuligem queimada
      const rand = Math.random();
      let colorType: 'black' | 'darkGray' | 'gray' | 'lightGray' | 'brown' | 'darkBrown' | 'ash' | 'white';
      if (rand < 0.35) {
        colorType = 'black';
      } else if (rand < 0.50) {
        colorType = 'darkBrown';
      } else if (rand < 0.65) {
        colorType = 'darkGray';
      } else if (rand < 0.80) {
        colorType = 'brown';
      } else if (rand < 0.90) {
        colorType = 'ash';
      } else {
        colorType = 'gray';
      }

      const depth = Math.random() * 0.7 + 0.3; // 0.3 (longe) a 1.0 (perto)
      const baseSize = Math.random() * 7 + 1.2;
      const size = baseSize * depth; // Partículas próximas são maiores
      const speedY = ((size / 5) * 0.5 + Math.random() * 0.2) * depth; // Mais rápidas

      particles.push({
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.2 * depth,
        speedY,
        opacity: (Math.random() * 0.65 + 0.3) * depth, // Mais opacas
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        colorType,
        depth,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    let animationFrameId: number;
    let time = 0;
    let frameCount = 0;
    let lastLogTime = Date.now();
    let lastFrameTime = Date.now();
    let isHealthy = true;

    // Sistema de health check e auto-recuperação
    const healthCheck = () => {
      const now = Date.now();
      const timeSinceLastFrame = now - lastFrameTime;
      
      // Se não houver frames por mais de 100ms, há um problema
      if (timeSinceLastFrame > 100 && isHealthy) {
        console.warn('[FloatingParticles] Sistema pausado detectado. Tentando recuperar...');
        isHealthy = false;
        
        // Cancelar animação antiga e reiniciar
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        
        // Verificar se canvas ainda está válido
        if (canvas && ctx && canvas.width > 0 && canvas.height > 0) {
          console.log('[FloatingParticles] Canvas válido. Reiniciando animação...');
          isHealthy = true;
          animationFrameId = requestAnimationFrame(animate);
        } else {
          console.error('[FloatingParticles] Canvas inválido. Não é possível recuperar.');
        }
      } else if (timeSinceLastFrame <= 100 && !isHealthy) {
        console.log('[FloatingParticles] Sistema recuperado com sucesso!');
        isHealthy = true;
      }
    };

    // Executar health check a cada 200ms
    const healthCheckInterval = setInterval(healthCheck, 200);

    const animate = () => {
      lastFrameTime = Date.now();
      frameCount++;
      time += 0.01;
      
      // Log a cada 3 segundos para monitorar
      if (Date.now() - lastLogTime > 3000) {
        console.log('[FloatingParticles] Status:', {
          frameCount,
          particlesTotal: particles.length,
          canvasSize: { width: canvas.width, height: canvas.height },
          visibleParticles: particles.filter(p => 
            p.x >= -10 && p.x <= canvas.width + 10 && 
            p.y >= -10 && p.y <= canvas.height + 10
          ).length
        });
        lastLogTime = Date.now();
        frameCount = 0;
      }

      // Verificar se o canvas ainda existe
      if (!canvas || !ctx) {
        console.error('[FloatingParticles] Canvas ou contexto perdido durante animação');
        return;
      }

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
      gradient.addColorStop(0.6, 'rgba(20, 20, 20, 0.15)');
      gradient.addColorStop(1, 'rgba(15, 15, 15, 0.35)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Definir formas de fuligem uma única vez (fora do loop)
      const drawSootShape = (particle: Particle, index: number) => {
        ctx.beginPath();
        
        switch(index) {
          case 0: // Círculo irregular
            ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            break;
          case 1: // Forma alongada
            ctx.ellipse(0, 0, particle.size, particle.size * 1.5, 0, 0, Math.PI * 2);
            break;
          case 2: // Forma irregular triangular
            ctx.moveTo(0, -particle.size);
            ctx.lineTo(particle.size * 0.7, particle.size * 0.3);
            ctx.lineTo(-particle.size * 0.5, particle.size * 0.5);
            ctx.closePath();
            break;
        }
        
        ctx.fill();
      };

      particles.forEach((particle) => {
        // Turbulência orgânica usando ruído
        const turbulenceX = (noise(particle.noiseOffsetX + time, particle.noiseOffsetY) - 0.5) * 0.3;
        const turbulenceY = (noise(particle.noiseOffsetY + time, particle.noiseOffsetX) - 0.5) * 0.15;

        // Interação com mouse - repulsão suave
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        let mouseForceX = 0;
        let mouseForceY = 0;
        
        if (distance < mouseRadius && distance > 0) {
          const force = ((mouseRadius - distance) / mouseRadius) * 0.8 * particle.depth;
          mouseForceX = (dx / distance) * force;
          mouseForceY = (dy / distance) * force;
        }

        // Update position - fuligem cai suavemente + vento + turbulência + mouse
        particle.x += particle.speedX + (windForce * 0.5 * particle.depth) + turbulenceX + mouseForceX;
        particle.y += particle.speedY + turbulenceY + mouseForceY;
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

        // Blur por profundidade - partículas distantes ficam desfocadas
        const blurAmount = (1 - particle.depth) * 2;
        if (blurAmount > 0.3) {
          ctx.filter = `blur(${blurAmount}px)`;
        }

        // Cor de fuligem baseada no tipo - paleta realista de fuligem e cinzas
        let fillStyle: string;
        const baseOpacity = particle.opacity;
        
        switch (particle.colorType) {
          case 'black':
            const blackVal = Math.floor(Math.random() * 20 + 5); // 5-25
            fillStyle = `rgba(${blackVal}, ${blackVal}, ${blackVal}, ${baseOpacity * 0.9})`;
            break;
          case 'darkGray':
            const darkGrayVal = Math.floor(Math.random() * 30 + 35); // 35-65
            fillStyle = `rgba(${darkGrayVal}, ${darkGrayVal}, ${darkGrayVal}, ${baseOpacity * 0.85})`;
            break;
          case 'gray':
            const grayVal = Math.floor(Math.random() * 40 + 90); // 90-130
            fillStyle = `rgba(${grayVal}, ${grayVal}, ${grayVal}, ${baseOpacity * 0.8})`;
            break;
          case 'lightGray':
            const lightGrayVal = Math.floor(Math.random() * 40 + 150); // 150-190
            fillStyle = `rgba(${lightGrayVal}, ${lightGrayVal}, ${lightGrayVal}, ${baseOpacity * 0.7})`;
            break;
          case 'brown':
            // Marrom fuligem - tons terrosos
            const brownR = Math.floor(Math.random() * 30 + 60); // 60-90
            const brownG = Math.floor(Math.random() * 20 + 40); // 40-60
            const brownB = Math.floor(Math.random() * 15 + 25); // 25-40
            fillStyle = `rgba(${brownR}, ${brownG}, ${brownB}, ${baseOpacity * 0.85})`;
            break;
          case 'darkBrown':
            // Marrom escuro queimado
            const dBrownR = Math.floor(Math.random() * 25 + 35); // 35-60
            const dBrownG = Math.floor(Math.random() * 15 + 20); // 20-35
            const dBrownB = Math.floor(Math.random() * 10 + 10); // 10-20
            fillStyle = `rgba(${dBrownR}, ${dBrownG}, ${dBrownB}, ${baseOpacity * 0.9})`;
            break;
          case 'ash':
            // Cinza amarelado/bege - como cinzas reais
            const ashR = Math.floor(Math.random() * 30 + 130); // 130-160
            const ashG = Math.floor(Math.random() * 25 + 120); // 120-145
            const ashB = Math.floor(Math.random() * 20 + 100); // 100-120
            fillStyle = `rgba(${ashR}, ${ashG}, ${ashB}, ${baseOpacity * 0.75})`;
            break;
          case 'white':
          default:
            const whiteVal = Math.floor(Math.random() * 30 + 210); // 210-240
            fillStyle = `rgba(${whiteVal}, ${whiteVal}, ${whiteVal}, ${baseOpacity * 0.6})`;
            break;
        }
        
        ctx.fillStyle = fillStyle;
        
        // Desenha forma baseada em hash da posição inicial
        const shapeIndex = Math.abs(Math.floor(particle.noiseOffsetX * 3) % 3);
        drawSootShape(particle, shapeIndex);

        // Reset filter
        ctx.filter = 'none';
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    console.log('[FloatingParticles] Iniciando animação com', particles.length, 'partículas');
    animate();

    return () => {
      console.log('[FloatingParticles] Componente desmontado - limpando recursos');
      clearInterval(healthCheckInterval);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ mixBlendMode: 'normal', opacity: 0.85, zIndex: 99999 }}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
