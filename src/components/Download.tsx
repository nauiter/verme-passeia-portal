import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";
import abandonedBlocks from "@/assets/abandoned-blocks.webp";

const Download = () => {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${abandonedBlocks})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Title */}
          <div className="space-y-6">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase text-foreground">
              Desça mais fundo.
            </h2>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>
          
          {/* Description */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="font-mono text-lg md:text-xl text-muted-foreground leading-relaxed">
              Baixe gratuitamente o e-book <span className="text-accent italic">O Verme Passeia – Primeiros Rastros</span> e mergulhe em nossos escritos completos.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
          <Button 
            size="lg"
            className="font-sans text-base md:text-lg tracking-wider uppercase px-12 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <DownloadIcon className="mr-3 h-5 w-5" />
            Em Breve
          </Button>
          </div>
          
          {/* Subtitle */}
          <p className="font-mono text-sm text-muted-foreground/60 italic mt-8">
            Um caminho solitário dentro do universo do projeto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
