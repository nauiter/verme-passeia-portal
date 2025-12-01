import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/shared/Breadcrumb";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Página Não Encontrada - 404 | O Verme Passeia"
        description="A página que você procura não existe ou foi movida. Retorne à página inicial do O Verme Passeia."
        path="/404"
        noIndex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-12 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Breadcrumb items={[{ label: "Página Não Encontrada" }]} />
          </div>
          
          {/* 404 */}
          <div className="space-y-4">
            <h1 className="font-sans text-[150px] md:text-[200px] font-bold tracking-[0.2em] text-accent/30 leading-none">
              404
            </h1>
            <div className="w-32 h-px bg-accent/50 mx-auto"></div>
          </div>
          
          {/* Message */}
          <div className="space-y-6">
            <h2 className="font-sans text-2xl md:text-4xl font-bold tracking-wider uppercase text-foreground">
              Caminho Perdido
            </h2>
            
            <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto italic">
              "O Verme buscou este rastro, mas ele não existe... Talvez nunca tenha existido."
            </p>
          </div>
          
          {/* Action */}
          <Link to="/">
            <Button 
              size="lg"
              className="font-sans text-base tracking-wider uppercase px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 border-2 border-accent-foreground/10"
            >
              <Home className="mr-2 h-5 w-5" />
              Voltar para Casa
            </Button>
          </Link>
          
          {/* Footer Quote */}
          <p className="font-mono text-sm text-muted-foreground/60 pt-12">
            Nem todos os caminhos levam a algum lugar.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
