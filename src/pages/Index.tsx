
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import DoctorSection from '@/components/home/DoctorSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToActionSection from '@/components/home/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
