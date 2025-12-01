import { Link } from "react-router-dom";

const FooterNauiterMaster = () => {
  return (
    <footer 
      className="w-full bg-void border-t border-border py-8 animate-fade-in-footer shadow-[0_-2px_10px_rgba(0,0,0,0.4)]"
    >
      <div className="container mx-auto px-4">
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
              © 2025 Developer — Nauiter Master | Todos os direitos reservados
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
