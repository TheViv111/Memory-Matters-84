
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

import FadeInButton from '@/components/animations/FadeInButton';
import ContactFormHeader from './ContactFormHeader';
import ContactFormFields from './ContactFormFields';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        contact_preference: formData.contactPreference
      };

      // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
      const SERVICE_ID = 'service_68k09ml';
      const TEMPLATE_ID = 'template_al9mp5g';
      const PUBLIC_KEY = 'O51s_TR_hVMroY8It';

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully! ✨",
          description: "Thank you for contacting us. We'll respond at the earliest.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactPreference: ''
        });
      }

      console.error('Error submitting contact form:', error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      // EmailJS errors often come as objects with a 'text' property
      const emailJSError = (error as any)?.text || errorMessage;

      toast({
        title: "Submission Error",
        description: `Error: ${emailJSError}. Please check your keys and try again.`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 mx-2 sm:mx-0">
        <ContactFormHeader />
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <ContactFormFields
              formData={formData}
              onFieldChange={handleInputChange}
            />

            <FadeInButton
              type="submit"
              loading={isSubmitting}
              className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full font-inter shadow-lg text-sm sm:text-base py-2 sm:py-3"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </FadeInButton>

            <p className="font-inter text-xs sm:text-sm text-gray-600 text-center">
              We'll respond to your message at the earliest.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
