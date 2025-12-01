import { useRef } from "react";
import { Youtube, Twitter, Linkedin, ExternalLink, Instagram, Facebook } from "lucide-react";
import brutalistRoad from "@/assets/brutalist-road.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@overmepasseia1",
    label: "@overmepasseia"
  },
  {
    name: "X / Twitter",
    icon: Twitter,
    url: "https://x.com/overmepasseia",
    label: "@overmepasseia"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/overmepasseia",
    label: "@overmepasseia"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61581838834536",
    label: "O Verme Passeia"
  },
  {
    name: "LinkedIn Newsletter",
    icon: Linkedin,
    url: "https://www.linkedin.com/newsletters/o-verme-passeia-7322594054557388801",
    label: "Newsletter"
  },
  {
    name: "Linktree",
    icon: ExternalLink,
    url: "https://linktr.ee/overmepasseia",
    label: "Todos os links"
  }
];

const Community = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });
  const contentVisible = useScrollAnimation(contentRef, { threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-card before:absolute before:top-0 before:left-0 before:right-0 before:h-32 before:bg-gradient-to-b before:from-card/50 before:to-transparent before:z-10"
      style={{ perspective: '1000px' }}
      aria-label="Redes sociais e comunidade"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ 
          backgroundImage: `url(${brutalistRoad})`,
        }}
        role="img"
        aria-label="Estrada solitária em paisagem brutalista"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto text-center space-y-12 sm:space-y-16 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Title */}
          <div>
            <h2 className={`font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-foreground mb-6 sm:mb-8 px-4 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Acompanhe os rastros do Verme.
            </h2>
            <div className={`w-20 sm:w-24 h-px bg-accent mx-auto transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          </div>
          
          {/* Social Links Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 sm:p-8 border border-border hover:border-accent transition-all duration-500 bg-background/40 hover:bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/20"
                  style={{
                    transitionDelay: contentVisible ? `${400 + idx * 100}ms` : '0ms',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={(e) => {
                    if (window.innerWidth < 768) return; // Disable 3D on mobile
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                  }}
                >
                  <div className="flex flex-col items-center gap-3 sm:gap-4 relative" style={{ transform: 'translateZ(20px)' }}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:scale-110" />
                    <div className="text-center">
                      <p className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground mb-1 transition-all duration-300 group-hover:text-accent">
                        {link.name}
                      </p>
                      <p className="font-mono text-[10px] sm:text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {link.label}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </a>
              );
            })}
          </div>
          
          {/* Footer Quote */}
          <p className={`font-mono text-xs sm:text-sm md:text-base italic text-muted-foreground/80 pt-6 sm:pt-8 px-4 transition-all duration-700 delay-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            "O Verme não procura luz. Ele procura sentido."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
