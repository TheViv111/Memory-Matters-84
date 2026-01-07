import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Memory Matters - Specialist Clinic for Memory & Senior Mental Health',
  description = 'Professional geriatric psychiatric care by Dr. Soumya Hegde. Specialized in memory screening, dementia evaluation, and senior mental health in Bangalore.',
  canonical,
  ogImage = '/images/memory-matters-logo.jpeg',
  ogType = 'website',
  structuredData
}) => {
  const siteUrl = 'https://memorymattersindia.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Memory Matters Clinic" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@memorymattersclinic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Memory Matters Clinic" />
      <meta name="keywords" content="memory clinic, geriatric psychiatrist, dementia care, memory screening, senior mental health, Dr. Soumya Hegde, Bangalore" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="ICBM" content="12.9634,77.5855" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
