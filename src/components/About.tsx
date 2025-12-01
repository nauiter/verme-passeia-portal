import { useRef } from "react";
import darkTower from "@/assets/dark-tower.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });
  const textVisible = useScrollAnimation(textRef, { threshold: 0.3 });
  const imageVisible = useScrollAnimation(imageRef, { threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div 
            ref={textRef}
            className={`space-y-12 transition-all duration-1000 delay-100 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <div className="w-16 h-px bg-accent mb-8"></div>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-foreground">
                Conceito
              </h2>
            </div>
            
            <div className="space-y-8 font-mono text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Nascido do caos urbano e da solidão hiperconectada, <span className="text-accent italic">O Verme Passeia</span> é um refúgio de melancolia e reflexão.
              </p>
              
              <p>
                Um percurso rastejante por ruínas concretas da existência, onde se encontra beleza na decadência e silêncio no concreto.
              </p>
              
              <p className="text-foreground italic pt-4">
                O Verme não procura luz. Ele procura sentido.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative order-first md:order-last transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative overflow-hidden">
              <img 
                src={darkTower} 
                alt="Torre solitária em névoa brutalista" 
                width="600"
                height="327"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
