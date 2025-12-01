import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Política de Privacidade | O Verme Passeia"
        description="Conheça nossa Política de Privacidade e como tratamos seus dados de acordo com a LGPD."
        path="/privacidade"
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
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <section className="space-y-6 text-foreground/80">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Informações que Coletamos</h2>
            <p>
              Podemos coletar informações pessoais que você nos fornece voluntariamente ao usar nosso 
              site, incluindo nome, endereço de e-mail e outras informações de contato. Também coletamos 
              automaticamente informações sobre seu dispositivo e como você interage com nosso site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Fornecer e manter nossos serviços</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Comunicar atualizações e novidades</li>
              <li>Analisar o uso do site e tendências</li>
              <li>Proteger contra uso fraudulento ou indevido</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto 
              quando necessário para fornecer nossos serviços, cumprir obrigações legais ou proteger 
              nossos direitos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o 
              tráfego do site e personalizar conteúdo. Você pode controlar o uso de cookies através 
              das configurações do seu navegador. Para mais detalhes, consulte nossa Política de Cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Segurança das Informações</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. 
              No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Seus Direitos</h2>
            <p>
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Solicitar portabilidade de dados</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
              descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              quaisquer alterações publicando a nova política nesta página. Recomendamos revisar esta 
              política regularmente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, 
              entre em contato conosco através dos canais disponíveis no site.
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

export default Privacy;
