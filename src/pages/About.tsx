
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import CredentialsSection from '@/components/about/CredentialsSection';
import PhilosophySection from '@/components/about/PhilosophySection';

const About = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <HeroSection />
      <CredentialsSection />
      <PhilosophySection />
      <Footer />
    </div>
  );
};

export default About;
