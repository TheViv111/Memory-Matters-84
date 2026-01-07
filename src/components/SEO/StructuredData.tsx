import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Person' | 'LocalBusiness' | 'MedicalClinic';
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Memory Matters Clinic",
          "url": "https://memorymattersindia.com",
          "logo": "https://memorymattersindia.com/images/memory-matters-logo.jpeg",
          "description": "Specialist Clinic for Memory & Senior Mental Health",
          "sameAs": [
            "https://instagram.com/memorymattersindia"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918904418172",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Kannada"]
          }
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Memory Matters Clinic",
          "description": "Specialist Clinic for Memory & Senior Mental Health",
          "url": "https://memorymattersindia.com",
          "telephone": "+918904418172",
          "email": "memorymattersindia@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.6, Wind Tunnel Road, Murugeshpalya, Kaveri Nagar",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560017",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9634",
            "longitude": "77.5855"
          },
          "openingHours": [
            "Mo-Fr 09:00-16:00",
            "Sa 09:00-13:00"
          ],
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
          "currenciesAccepted": "INR"
        };

      case 'MedicalClinic':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Memory Matters Clinic",
          "description": "Specialist Clinic for Memory & Senior Mental Health",
          "url": "https://memorymattersindia.com",
          "telephone": "+918904418172",
          "email": "memorymattersindia@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.6, Wind Tunnel Road, Murugeshpalya, Kaveri Nagar",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560017",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9634",
            "longitude": "77.5855"
          },
          "openingHours": [
            "Mo-Fr 09:00-16:00",
            "Sa 09:00-13:00"
          ],
          "specialty": [
            "Geriatric Psychiatry",
            "Memory Disorders",
            "Dementia Care",
            "Cognitive Assessment"
          ],
          "availableService": [
            {
              "@type": "MedicalProcedure",
              "name": "Memory Screening",
              "description": "Early detection and monitoring of memory-related concerns"
            },
            {
              "@type": "MedicalProcedure", 
              "name": "Dementia Evaluation",
              "description": "Comprehensive assessment for dementia diagnosis"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Cognitive Stimulation Therapy",
              "description": "Evidence-based cognitive therapy"
            }
          ]
        };

      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Soumya Hegde",
          "jobTitle": "Geriatric Psychiatrist",
          "worksFor": {
            "@type": "Organization",
            "name": "Memory Matters Clinic"
          },
          "description": "Specialized in geriatric psychiatry, memory disorders, and senior mental health care",
          "url": "https://memorymattersindia.com/about",
          "image": "https://memorymattersindia.com/images/76dc60d7-260b-44ed-8802-e008f6b9a2dd.png",
          "sameAs": [],
          "knowsAbout": [
            "Geriatric Psychiatry",
            "Memory Disorders",
            "Dementia",
            "Cognitive Assessment",
            "Senior Mental Health"
          ]
        };

      default:
        return {};
    }
  };

  const schema = { ...getSchema(), ...data };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema, null, 2)}
    </script>
  );
};

export default StructuredData;
