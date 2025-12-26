
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import FadeInButton from '@/components/animations/FadeInButton';
import ContactFormHeader from './ContactFormHeader';
import ContactFormFields from './ContactFormFields';

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
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formData
      });

      if (error) {
        throw error;
      }

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

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or call us directly.",
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
