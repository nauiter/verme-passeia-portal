import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";
import abandonedBlocks from "@/assets/abandoned-blocks.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Download = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });
  const contentVisible = useScrollAnimation(contentRef, { threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-background before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-card after:to-transparent after:z-10"
      aria-label="Download de e-book"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: `url(${abandonedBlocks})`,
        }}
        role="img"
        aria-label="Blocos arquitetônicos abandonados em estilo brutalista"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center space-y-12 sm:space-y-16 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Title */}
          <div>
            <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase text-foreground mb-6 sm:mb-8 px-4 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Desça mais fundo.
            </h2>
            <div className={`w-20 sm:w-24 h-px bg-accent mx-auto transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          </div>
          
          {/* Description */}
          <p className={`font-mono text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 transition-all duration-700 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Baixe gratuitamente o e-book <span className="text-accent italic">O Verme Passeia – Primeiros Rastros</span> e mergulhe em nossos escritos completos.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className={`font-sans text-sm sm:text-base md:text-lg tracking-wider uppercase px-8 sm:px-12 py-4 sm:py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} delay-600`}
          >
            <DownloadIcon className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
            Em Breve
          </Button>
          
          {/* Subtitle */}
          <p className={`font-mono text-xs sm:text-sm text-muted-foreground/60 italic px-4 transition-all duration-700 delay-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Um caminho solitário dentro do universo do projeto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
