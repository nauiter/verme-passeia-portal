import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reflections = [
  {
    title: "Solidão",
    text: "No vazio dos espaços esquecidos, o Verme encontra companhia. Não na presença, mas na ausência. Não na luz, mas na sombra que ela projeta.",
  },
  {
    title: "Lucidez",
    text: "Ver o mundo como ele é, frio, indiferente, belo em sua crueldade, não é desesperança. É aceitação. É liberdade.",
  },
  {
    title: "Rastejo",
    text: "Avançar sem pressa, sem destino. O movimento não tem propósito além de si mesmo. O caminho é tudo o que resta.",
  },
];

const Reflections = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-background before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-card before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-card after:to-transparent after:z-10"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-16 h-px bg-accent mx-auto mb-6 md:mb-8"></div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-foreground">
              Reflexões
            </h2>
          </div>

          {/* Reflections Grid */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {reflections.map((reflection, index) => (
              <div
                key={reflection.title}
                className={`relative p-6 sm:p-8 md:p-10 border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-1000 hover:border-accent/50 hover:bg-card/50 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                }}
              >
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-accent group-hover:text-accent/80 transition-colors duration-300">
                    {reflection.title}
                  </h3>
                  <div className="w-12 h-px bg-muted-foreground/30 group-hover:bg-accent/50 transition-colors duration-300"></div>
                  <p className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {reflection.text}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20 group-hover:border-accent/50 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/20 group-hover:border-accent/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections;
