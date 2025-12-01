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
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-card"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ 
          backgroundImage: `url(${brutalistRoad})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto text-center space-y-16 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Title */}
          <div>
            <h2 className={`font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-foreground mb-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Acompanhe os rastros do Verme.
            </h2>
            <div className={`w-24 h-px bg-accent mx-auto transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          </div>
          
          {/* Social Links Grid */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 border border-border hover:border-accent transition-all duration-300 bg-background/40 hover:bg-background/60 backdrop-blur-sm"
                  style={{
                    transitionDelay: contentVisible ? `${400 + idx * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Icon className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    <div className="text-center">
                      <p className="font-sans text-sm font-bold tracking-wider uppercase text-foreground mb-1">
                        {link.name}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.label}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              );
            })}
          </div>
          
          {/* Footer Quote */}
          <p className={`font-mono text-sm md:text-base italic text-muted-foreground/80 pt-8 transition-all duration-700 delay-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            "O Verme não procura luz. Ele procura sentido."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
