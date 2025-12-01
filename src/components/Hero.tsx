import spiralStaircase from "@/assets/spiral-staircase.webp";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect({ 
    text: "O Verme Passeia",
    speed: 150,
    delay: 500
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6" aria-label="Seção principal - O Verme Passeia">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={spiralStaircase} 
          alt="Escadaria em espiral descendente em estrutura brutalista, representando o caminho introspectivo do Verme"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] uppercase mb-8 sm:mb-12 text-foreground min-h-[4rem] sm:min-h-[5rem] md:min-h-[7rem] lg:min-h-[8rem] flex items-center justify-center">
          <span className="inline-block">
            {displayedText}
            <span className={`inline-block w-1 h-[0.8em] bg-accent ml-2 align-middle ${isComplete ? 'animate-pulse' : 'animate-pulse'}`} aria-hidden="true"></span>
          </span>
        </h1>
        
        <p className={`font-mono text-base sm:text-lg md:text-2xl lg:text-3xl italic tracking-wide text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 ${isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          "Sem aplauso, sem destino, sem sentido... Ainda assim, o Verme continua a rastejar."
        </p>
        
        <div className={`w-24 sm:w-32 h-px bg-accent mx-auto my-12 sm:my-16 opacity-60 transition-all duration-700 delay-300 ${isComplete ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'}`} aria-hidden="true"></div>
        
        <p className={`font-mono text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto tracking-wide leading-relaxed px-4 transition-all duration-1000 delay-500 ${isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Um manifesto visual e poético sobre isolamento, lucidez e sobrevivência silenciosa em meio à ruína moderna.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-float" aria-label="Rolar para baixo">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-2 transition-all duration-300 hover:border-accent/70">
          <div className="w-1 h-2 sm:h-3 bg-accent/70 rounded-full animate-[float_3s_ease-in-out_infinite]" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
