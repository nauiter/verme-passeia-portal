import darkTower from "@/assets/dark-tower.webp";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="w-16 h-px bg-accent mb-6"></div>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-foreground">
                Conceito
              </h2>
            </div>
            
            <div className="space-y-6 font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Nascido do caos urbano e da solidão hiperconectada, <span className="text-accent italic">O Verme Passeia</span> é um refúgio de melancolia e reflexão.
              </p>
              
              <p>
                Um percurso rastejante por ruínas concretas da existência, onde se encontra beleza na decadência e silêncio no concreto.
              </p>
              
              <p className="text-foreground italic">
                O Verme não procura luz. Ele procura sentido.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in order-first md:order-last">
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
