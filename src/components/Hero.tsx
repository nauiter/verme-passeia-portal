import spiralStaircase from "@/assets/spiral-staircase.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={spiralStaircase} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-slow">
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] uppercase mb-8 text-foreground">
          O Verme Passeia
        </h1>
        <p className="font-mono text-lg md:text-2xl lg:text-3xl italic tracking-wide text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
          "Sem aplauso, sem destino, sem sentido... Ainda assim, o Verme continua a rastejar."
        </p>
        <div className="w-32 h-px bg-accent mx-auto mt-12 opacity-60"></div>
        <p className="font-mono text-sm md:text-base text-muted-foreground mt-8 max-w-2xl mx-auto tracking-wide">
          Um manifesto visual e poético sobre isolamento, lucidez e sobrevivência silenciosa em meio à ruína moderna.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
