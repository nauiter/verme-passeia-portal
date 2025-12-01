import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:block animate-fade-in">
      <div className="bg-card border-t-2 border-border shadow-[var(--shadow-deep)]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-foreground">
                  Consentimento de Cookies
                </h3>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do 
                site e personalizar conteúdo. Ao clicar em "Aceitar", você concorda com o uso de cookies. 
                Para mais informações, consulte nossa{" "}
                <Link 
                  to="/cookies" 
                  className="text-accent hover:underline font-medium"
                >
                  Política de Cookies
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button
                onClick={handleReject}
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                Rejeitar
              </Button>
              <Button
                onClick={handleAccept}
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
