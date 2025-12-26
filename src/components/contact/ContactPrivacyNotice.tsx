
import React from 'react';
import { Shield } from 'lucide-react';

const ContactPrivacyNotice = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-medical-deep-blue to-medical-teal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
          <Shield className="w-12 h-12 text-medical-orange" />
        </div>
        <h3 className="font-playfair text-2xl mb-4">Privacy & Security Notice</h3>
        <p className="font-inter text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Your privacy is important to us. All communications and medical information are handled
          with strict confidentiality and in accordance with medical privacy regulations. Please do not
          include sensitive medical information in email communications.
        </p>
      </div>
    </section>
  );
};

export default ContactPrivacyNotice;
