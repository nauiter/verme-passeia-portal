import { useState, useEffect } from "react";
import crackedBuilding from "@/assets/cracked-building.png";

const quotes = [
  "Há beleza no que não quer ser visto.",
  "O silêncio fala, mas ninguém escuta.",
  "Entre ruína e ternura, o Verme rasteja.",
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-card">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${crackedBuilding})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30"></div>
      </div>
      
      {/* Quote Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          {quotes.map((quote, index) => (
            <blockquote
              key={index}
              className={`font-mono text-2xl md:text-4xl lg:text-5xl italic text-foreground leading-relaxed transition-all duration-1000 ${
                currentQuote === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 absolute translate-y-8"
              }`}
            >
              "{quote}"
            </blockquote>
          ))}
        </div>
        
        {/* Quote Navigation Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentQuote === index
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/40"
              }`}
              aria-label={`Quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
