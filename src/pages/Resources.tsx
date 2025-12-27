
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResourcesHero from '@/components/resources/ResourcesHero';
import EducationalVideos from '@/components/resources/EducationalVideos';
import EducationalArticles from '@/components/resources/EducationalArticles';

const Resources = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ResourcesHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EducationalVideos searchQuery={searchQuery} />
      <EducationalArticles searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Resources;
