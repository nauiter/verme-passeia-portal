import { useState, useEffect, useRef } from "react";
import crackedBuilding from "@/assets/cracked-building.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const quotes = [
  "Há beleza no que não quer ser visto.",
  "O silêncio fala, mas ninguém escuta.",
  "Entre ruína e ternura, o Verme rasteja.",
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-card py-20 md:py-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-background before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-background after:to-transparent after:z-10"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url(${crackedBuilding})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30"></div>
      </div>
      
      {/* Quote Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        {quotes.map((quote, index) => (
          <blockquote
            key={index}
            className={`font-mono text-2xl md:text-4xl lg:text-5xl italic text-foreground leading-relaxed transition-all duration-1000 ${
              currentQuote === index
                ? `opacity-100 translate-y-0 ${isVisible ? '' : 'opacity-0 translate-y-12'}`
                : "opacity-0 absolute translate-y-8"
            }`}
          >
            "{quote}"
          </blockquote>
        ))}
        
        {/* Quote Navigation Dots */}
        <div 
          className={`flex justify-center gap-3 mt-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentQuote === index
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/40"
              }`}
              aria-label={`Citação ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
