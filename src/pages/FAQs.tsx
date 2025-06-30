import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  useEffect(() => {
    // Load Botpress chat scripts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/06/26/05/20250626053105-YAQ9MI2X.js';
    script2.async = true;
    document.head.appendChild(script2);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const faqs = [
    {
      id: "01",
      question: "What is the length and frequency of our sessions?",
      answer: "Each session will be 50 minutes to an hour. We typically schedule our appointments once a week or every two weeks."
    },
    {
      id: "02", 
      question: "Are sessions in-person or online?",
      answer: "We offer both in-person consultations at our clinic and online sessions via secure video conferencing, depending on your preference and needs."
    },
    {
      id: "03",
      question: "How much is the fee?",
      answer: "Consultation fees vary based on the type of session and duration. Please contact our office at +91 89044 18172 for detailed pricing information."
    },
    {
      id: "04",
      question: "Is there a sliding fee scale?",
      answer: "We understand that mental health care should be accessible. Please discuss your financial situation with our office, and we will work with you to find a suitable arrangement."
    },
    {
      id: "05",
      question: "What happens typically during a session?",
      answer: "During a typical session, we will discuss your concerns, review your medical history, assess your cognitive function if needed, and develop a personalized treatment plan. Each session is tailored to your specific needs."
    },
    {
      id: "06",
      question: "How long does the therapy process take?",
      answer: "The duration of treatment varies significantly depending on individual needs, the complexity of the condition, and treatment goals. Some patients see improvement in a few sessions, while others may require longer-term care."
    },
    {
      id: "07",
      question: "How do I know if it's a good fit?",
      answer: "A good therapeutic relationship is built on trust, comfort, and effective communication. If you feel heard, understood, and see positive changes in your well-being, it's likely a good fit. We encourage open discussion about your comfort level."
    },
    {
      id: "08",
      question: "Do you prescribe medication?",
      answer: "Yes, as a qualified psychiatrist, Dr. Soumya Hegde can prescribe medication when appropriate. She takes a comprehensive approach, considering both medication and therapeutic interventions based on individual patient needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-medical-charcoal mb-8 leading-tight">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-8 rounded-full shadow-md"></div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5}>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, appointments, and treatment approach.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.id} direction="up" delay={0.1 * (index + 1)}>
                <AccordionItem 
                  value={faq.id}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 transition-all duration-300">
                    <div className="flex items-center space-x-6 w-full">
                      <div className="bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 text-medical-deep-blue font-playfair text-2xl font-bold w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-medical-teal/10">
                        {faq.id}
                      </div>
                      <h3 className="font-inter text-lg font-semibold text-medical-charcoal text-left group-hover:text-medical-deep-blue transition-colors duration-300 leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="ml-26 bg-gradient-to-r from-medical-beige/30 to-white p-6 rounded-xl border-l-4 border-medical-teal">
                      <p className="font-inter text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-orange/5" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
              Still Have Questions?
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-8">
              We're here to help. Contact us directly for personalized answers to your concerns.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918904418172"
                className="inline-flex items-center justify-center bg-gradient-to-r from-medical-teal to-medical-deep-blue hover:from-medical-deep-blue hover:to-medical-teal text-white px-8 py-3 rounded-xl font-inter font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              >
                Call Us: +91 89044 18172
              </a>
              <a 
                href="mailto:memorymattersindia@gmail.com"
                className="inline-flex items-center justify-center border-2 border-medical-teal bg-white/80 text-medical-teal hover:bg-gradient-to-r hover:from-medical-teal hover:to-medical-deep-blue hover:text-white px-8 py-3 rounded-xl font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
