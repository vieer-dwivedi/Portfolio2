import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: object;
}

export const Seo: React.FC<SeoProps> = ({ title, description, canonical, type = 'website', schema }) => {
  const siteName = 'Vieer Dwivedi | DevOps & MLOps Engineer';
  const fullTitle = `${title} | ${siteName}`;
  const url = 'https://vieerdwivedi.com'; 

  // Default Structured Data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vieer Dwivedi",
    "url": url,
    "jobTitle": "DevOps & MLOps Engineer",
    "alumniOf": "Masters in Computer Application",
    "knowsAbout": ["DevOps", "MLOps", "Cloud Engineering", "AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    "sameAs": [
      "https://github.com/vieer-dwivedi",
      "https://linkedin.com/in/vieerdwivedi/"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical ? `${url}${canonical}` : url} />
      <meta name="keywords" content="Vieer Dwivedi, DevOps, MLOps, Cloud Engineer, AWS Engineer, Azure Expert, GCP, Kubernetes Specialist, Terraform Architect, GitOps, CI/CD, UAE DevOps Engineer" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${url}/og-image.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/og-image.png`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || personSchema)}
      </script>
    </Helmet>
  );
};
