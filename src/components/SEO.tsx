import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

const SEO = ({ 
  title = "O Verme Passeia | Manifesto Poético-Existencial",
  description = "Um manifesto visual e poético sobre isolamento, lucidez e sobrevivência silenciosa em meio à ruína moderna. O Verme continua a rastejar.",
  path = "/",
  noIndex = false
}: SEOProps) => {
  const baseUrl = "https://overmepasseia.lovable.app";
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = "https://lovable.dev/opengraph-image-p98pqg.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* No Index for specific pages */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
