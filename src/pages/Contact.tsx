
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactOfficeHours from '@/components/contact/ContactOfficeHours';
import ContactLocationInfo from '@/components/contact/ContactLocationInfo';
import ContactInsuranceInfo from '@/components/contact/ContactInsuranceInfo';
import ContactHelpSection from '@/components/contact/ContactHelpSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import ContactPrivacyNotice from '@/components/contact/ContactPrivacyNotice';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5">
      <Navigation />
      <ContactHero />
      <ContactInfo />

      {/* Enhanced Contact Form & Office Information */}
      <section className="py-8 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-medical-teal/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-medical-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <ContactForm />

            {/* Enhanced Office Information */}
            <div className="space-y-4 sm:space-y-6">
              <ContactOfficeHours />
              <ContactLocationInfo />
              <ContactInsuranceInfo />
            </div>
          </div>
        </div>
      </section>

      <ContactMapSection />
      <ContactHelpSection />
      <ContactPrivacyNotice />
      <Footer />
    </div>
  );
};

export default Contact;
