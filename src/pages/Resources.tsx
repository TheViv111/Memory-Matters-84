
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResourcesHero from '@/components/resources/ResourcesHero';
import EducationalVideos from '@/components/resources/EducationalVideos';
import EducationalArticles from '@/components/resources/EducationalArticles';

const Resources = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ResourcesHero />
      <EducationalVideos />
      <EducationalArticles />
      <Footer />
    </div>
  );
};

export default Resources;
