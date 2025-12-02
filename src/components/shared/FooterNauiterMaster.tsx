import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FooterNauiterMaster = () => {
  return (
    <footer 
      className="w-full bg-void border-t border-border animate-fade-in-footer shadow-[0_-2px_10px_rgba(0,0,0,0.4)]"
    >
      {/* CTA Section */}
      <div className="flex flex-col items-center py-12 border-b border-border/30">
        <Button
          variant="outline"
          asChild
          className="border-muted-foreground/20 bg-transparent text-foreground/80 hover:bg-foreground/5 hover:border-accent/50 hover:text-accent transition-all duration-300 tracking-widest text-xs uppercase px-8 py-6"
        >
          <a 
            href="https://forms.gle/W5eLQxFcyWpE4HQ1A" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Iniciar Protocolo de Colaboração
          </a>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground font-mono tracking-wide">
          Identifique-se. A verdade é a única moeda aceita.
        </p>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/termos" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/privacidade" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacidade
            </Link>
            <Link 
              to="/cookies" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Cookies
            </Link>
          </div>
          
          <div className="space-y-2">
            <p 
              className="text-foreground transition-colors hover:text-accent"
              style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
            >
              © 2025 Developer - Nauiter Master | Todos os direitos reservados
            </p>
            <p 
              className="text-muted-foreground italic"
              style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)' }}
            >
              Sic Mundus Creatus Est
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNauiterMaster;
