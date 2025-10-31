import { Youtube, Twitter, Linkedin, ExternalLink, Instagram, Facebook } from "lucide-react";
import brutalistRoad from "@/assets/brutalist-road.png";

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
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden bg-card">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${brutalistRoad})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in">
          {/* Title */}
          <div className="space-y-6">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-foreground">
              Acompanhe os rastros do Verme.
            </h2>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>
          
          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 border border-border hover:border-accent transition-all duration-300 bg-background/40 hover:bg-background/60 backdrop-blur-sm"
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
          <div className="pt-12">
            <p className="font-mono text-sm md:text-base italic text-muted-foreground/80">
              "O Verme não procura luz. Ele procura sentido."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
