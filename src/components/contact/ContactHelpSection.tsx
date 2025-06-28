
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Video, Clock } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactHelpSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-orange/5" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="font-playfair text-3xl text-medical-charcoal mb-8">
            Need Help Scheduling?
          </h2>
          <p className="font-inter text-gray-600 mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help you with any questions about scheduling or preparing for your visit
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Phone, 
              title: "Call Us", 
              content: "+91 89044 18172", 
              subtitle: "Mon-Fri: 8AM-5PM", 
              action: "Call Now" 
            },
            { 
              icon: Video, 
              title: "Video Consult", 
              content: "Available for follow-ups", 
              subtitle: "Same day available", 
              action: "Learn More" 
            },
            { 
              icon: Clock, 
              title: "Emergency", 
              content: "24/7 Support", 
              subtitle: "For existing patients", 
              action: "Emergency Line" 
            }
          ].map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-white/90 backdrop-blur-md border-0 shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2 group-hover:text-medical-deep-blue transition-colors duration-300">{item.title}</h3>
                  <p className="font-inter text-medical-deep-blue font-medium mb-1">{item.content}</p>
                  <p className="font-inter text-sm text-gray-600 mb-3">{item.subtitle}</p>
                  <button className="font-inter text-sm text-medical-teal hover:text-medical-deep-blue transition-colors duration-200 font-medium bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 px-4 py-2 rounded-lg hover:from-medical-teal/20 hover:to-medical-orange/20">
                    {item.action}
                  </button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHelpSection;
