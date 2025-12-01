import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

const SEO = ({ 
  title = "O Verme Passeia | Manifesto Poético-Existencial",
  description = "Um manifesto visual e poético sobre isolamento, lucidez e sobrevivência silenciosa em meio à ruína moderna. O Verme não procura luz. Ele procura sentido.",
  path = "/",
  noIndex = false
}: SEOProps) => {
  const baseUrl = "https://overmepasseia.lovable.app";
  const fullUrl = `${baseUrl}${path}`;
  const siteName = "O Verme Passeia";
  const ogImage = `${baseUrl}/og-image.jpg`;
  const twitterHandle = "@overmepasseia";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={siteName} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      
      {/* Instagram / WhatsApp Preview */}
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1a1d24" />
      <meta name="keywords" content="poesia, existencialismo, filosofia, brutalismo, melancolia, literatura experimental, arte conceitual, verme, manifesto" />
      <meta name="author" content="O Verme Passeia" />
      
      {/* No Index for specific pages */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
