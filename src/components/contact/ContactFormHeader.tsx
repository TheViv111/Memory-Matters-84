
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';

const ContactFormHeader = () => {
  return (
    <CardHeader className="px-4 sm:px-6">
      <CardTitle className="font-playfair text-xl sm:text-2xl text-medical-charcoal">
        Send Us a Message
      </CardTitle>
      <p className="text-gray-600 font-inter text-sm sm:text-base">
        We'd love to hear from you. Send us a message and we'll respond at the earliest.
      </p>
    </CardHeader>
  );
};

export default ContactFormHeader;
