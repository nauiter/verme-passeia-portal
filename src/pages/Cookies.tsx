import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <>
      <SEO 
        title="Política de Cookies | O Verme Passeia"
        description="Saiba como utilizamos cookies para melhorar sua experiência no site O Verme Passeia."
        path="/cookies"
      />
      <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button 
            variant="ghost" 
            className="mb-6 border-2 border-foreground/20 hover:border-foreground/40 hover:bg-secondary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <section className="space-y-6 text-foreground/80">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita 
              um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais 
              eficiente, bem como fornecer informações aos proprietários do site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Como Usamos Cookies</h2>
            <p>
              Utilizamos cookies para diversos propósitos, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Manter suas preferências de navegação</li>
              <li>Analisar como você usa nosso site</li>
              <li>Melhorar o desempenho do site</li>
              <li>Personalizar sua experiência</li>
              <li>Lembrar suas configurações e escolhas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Tipos de Cookies que Usamos</h2>
            
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-foreground">Cookies Estritamente Necessários</h3>
                <p>
                  Essenciais para o funcionamento básico do site. Sem estes cookies, o site não pode 
                  funcionar corretamente.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2 text-foreground">Cookies de Desempenho</h3>
                <p>
                  Coletam informações sobre como os visitantes usam o site, como quais páginas são 
                  mais visitadas. Estes dados nos ajudam a melhorar o funcionamento do site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2 text-foreground">Cookies de Funcionalidade</h3>
                <p>
                  Permitem que o site lembre escolhas que você faz e forneça recursos aprimorados e 
                  mais personalizados.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2 text-foreground">Cookies de Análise</h3>
                <p>
                  Utilizados para entender como os visitantes interagem com o site, coletando e 
                  relatando informações de forma anônima.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Cookies de Terceiros</h2>
            <p>
              Em alguns casos, também usamos cookies fornecidos por terceiros confiáveis. Estes podem 
              incluir serviços de análise, redes sociais e plataformas de conteúdo. Estes terceiros 
              também podem coletar informações sobre suas atividades online ao longo do tempo e em 
              diferentes sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Gerenciamento de Cookies</h2>
            <p>
              Você pode controlar e/ou excluir cookies como desejar. Você pode excluir todos os cookies 
              que já estão no seu computador e pode configurar a maioria dos navegadores para impedir 
              que eles sejam colocados. No entanto, se você fizer isso, pode ter que ajustar manualmente 
              algumas preferências toda vez que visitar o site, e alguns serviços e recursos podem não 
              funcionar.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Como Desativar Cookies</h2>
            <p>
              A maioria dos navegadores permite que você recuse ou aceite cookies. Os métodos variam 
              de navegador para navegador. Consulte a seção de ajuda do seu navegador para mais 
              informações sobre como ajustar suas configurações de cookies.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Chrome: Configurações → Privacidade e segurança → Cookies</li>
              <li>Firefox: Opções → Privacidade e Segurança → Cookies</li>
              <li>Safari: Preferências → Privacidade → Cookies</li>
              <li>Edge: Configurações → Cookies e permissões de site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Atualizações desta Política</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente para refletir alterações nas 
              tecnologias que usamos ou por outros motivos operacionais, legais ou regulatórios.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Mais Informações</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através 
              dos canais disponíveis no site.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cookies;
