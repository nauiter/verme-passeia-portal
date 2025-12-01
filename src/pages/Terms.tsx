const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <section className="space-y-6 text-foreground/80">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este website, você aceita e concorda em cumprir os termos e condições 
              aqui estabelecidos. Se você não concordar com qualquer parte destes termos, não deverá 
              usar este site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Uso do Site</h2>
            <p>
              Este site é fornecido apenas para fins informativos e de entretenimento. Você concorda 
              em usar o site de forma legal e não realizar atividades que possam danificar, desabilitar 
              ou comprometer o funcionamento do site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logos, imagens e software, 
              é propriedade de Nauiter Master e está protegido pelas leis de direitos autorais. O uso 
              não autorizado de qualquer conteúdo pode violar leis de direitos autorais e outras leis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Limitação de Responsabilidade</h2>
            <p>
              Este site é fornecido "como está" sem garantias de qualquer tipo. Não nos responsabilizamos 
              por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso 
              ou incapacidade de usar este site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Links Externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo 
              desses sites e não assumimos responsabilidade por eles. O acesso a links externos é por 
              sua conta e risco.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Modificações dos Termos</h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
              em vigor imediatamente após a publicação no site. É sua responsabilidade revisar 
              periodicamente estes termos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa relacionada a estes 
              termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Contato</h2>
            <p>
              Para questões sobre estes Termos de Uso, entre em contato através dos canais disponíveis 
              no site.
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
  );
};

export default Terms;
