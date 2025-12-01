import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({ 
  title = "O Verme Passeia | Manifesto Poético-Existencial",
  description = "Um manifesto visual e poético sobre isolamento, lucidez e sobrevivência silenciosa em meio à ruína moderna. O Verme não procura luz. Ele procura sentido.",
  path = "/",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const baseUrl = "https://overmepasseia.lovable.app";
  const fullUrl = `${baseUrl}${path}`;
  const siteName = "O Verme Passeia";
  const ogImage = `${baseUrl}/og-image.jpg`;
  const twitterHandle = "@overmepasseia";

  // Structured Data (JSON-LD) for better SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": baseUrl,
    "description": description,
    "inLanguage": "pt-BR",
    "author": {
      "@type": "Person",
      "name": "O Verme Passeia"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": baseUrl,
    "logo": ogImage,
    "sameAs": [
      "https://twitter.com/overmepasseia",
      "https://www.youtube.com/@overmepasseia1",
      "https://www.linkedin.com/newsletters/o-verme-passeia",
      "https://www.facebook.com/profile.php?id=61581838834536"
    ]
  };

  const breadcrumbSchema = path !== "/" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullUrl
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
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
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Brasil" />
      
      {/* No Index for specific pages */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
