
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResourcesHero from '@/components/resources/ResourcesHero';
import EducationalVideos from '@/components/resources/EducationalVideos';
import EducationalArticles from '@/components/resources/EducationalArticles';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Resources = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ResourcesHero />
      <ScrollReveal direction="up" delay={0.1}>
        <EducationalVideos />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <EducationalArticles />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Resources;
