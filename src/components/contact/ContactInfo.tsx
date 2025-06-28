
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactInfo = () => {
  const contactItems = [
    { 
      icon: Phone, 
      title: "Phone", 
      content: "+91 89044 18172", 
      subtitle: "Main Office",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: Mail, 
      title: "Email", 
      content: "memorymattersindia@gmail.com", 
      subtitle: "General Inquiries",
      gradient: "from-green-500 to-green-600"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      content: "4, Wind Tunnel Rd", 
      subtitle: "Murugeshpalya, Bengaluru",
      gradient: "from-purple-500 to-purple-600"
    },
    { 
      icon: Shield, 
      title: "Emergency", 
      content: "+91 89044 18172", 
      subtitle: "24/7 for Existing Patients",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 group">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2 group-hover:text-medical-teal transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-inter text-medical-deep-blue font-semibold break-all">{item.content}</p>
                  <p className="font-inter text-sm text-gray-600 mt-1">{item.subtitle}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
