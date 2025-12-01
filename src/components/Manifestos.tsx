import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const manifestos = [
  "Não há grandeza no espetáculo. Há apenas verdade no silêncio.",
  "O concreto não mente. Ele envelhece, racha, desmorona e ainda assim permanece.",
  "Rastejamos não por fraqueza, mas por escolha. O chão conhece mais segredos que o céu.",
  "A beleza não precisa ser vista para existir. Ela sobrevive melhor assim.",
  "O Verme não busca redenção. Ele aceita o peso de existir sem propósito.",
];

const Manifestos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-card before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-background before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-background after:to-transparent after:z-10"
      aria-label="Manifestos filosóficos"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase text-foreground mb-6 md:mb-8">
              Manifestos
            </h2>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Manifestos List */}
          <div className="space-y-8 md:space-y-12">
            {manifestos.map((manifesto, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-4 sm:gap-6 group">
                  {/* Number */}
                  <div className="flex-shrink-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                    <span className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2 sm:pt-3 md:pt-4">
                    <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed group-hover:text-accent/90 transition-colors duration-300">
                      {manifesto}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < manifestos.length - 1 && (
                  <div className="w-full h-px bg-border/30 mt-8 md:mt-12"></div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-16 md:mt-24 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="font-mono text-xs sm:text-sm md:text-base italic text-muted-foreground/70">
              Estas são as leis que o Verme carrega. Imutáveis. Silenciosas. Verdadeiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifestos;
