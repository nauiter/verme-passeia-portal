import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";
import abandonedBlocks from "@/assets/abandoned-blocks.webp";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Download = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });
  const contentVisible = useScrollAnimation(contentRef, { threshold: 0.3 });
  const parallaxOffset = useParallax(0.4);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${abandonedBlocks})`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center space-y-16 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Title */}
          <div>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase text-foreground mb-8">
              Desça mais fundo.
            </h2>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>
          
          {/* Description */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Baixe gratuitamente o e-book <span className="text-accent italic">O Verme Passeia – Primeiros Rastros</span> e mergulhe em nossos escritos completos.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="font-sans text-base md:text-lg tracking-wider uppercase px-12 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <DownloadIcon className="mr-3 h-5 w-5" />
            Em Breve
          </Button>
          
          {/* Subtitle */}
          <p className="font-mono text-sm text-muted-foreground/60 italic">
            Um caminho solitário dentro do universo do projeto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
