
import React from 'react';
import GoogleMap from '@/components/GoogleMap';

const ContactMapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/3 to-medical-orange/3" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
            Find Our Clinic
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-4"></div>
          <p className="font-inter text-gray-600">
            Located in Murugeshpalya, Bengaluru with easy access via Wind Tunnel Road
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border-4 border-white/50 backdrop-blur-sm">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
