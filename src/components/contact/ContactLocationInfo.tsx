
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Car, Bus, Accessibility } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactLocationInfo = () => {
  return (
    <ScrollReveal direction="right" delay={0.3}>
      <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
        <CardHeader className="pb-4">
          <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
            <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-medical-teal" />
            </div>
            Location & Accessibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-gradient-to-r from-medical-teal/5 to-medical-orange/5 rounded-lg">
              <p className="font-inter font-medium text-medical-charcoal mb-1">Dr. Soumya Hegde : Memory Matters</p>
              <p className="font-inter text-gray-700">4, Wind Tunnel Rd, Murugeshpalya</p>
              <p className="font-inter text-gray-700">Kaveri Nagar, Bengaluru, Karnataka 560017</p>
            </div>
            
            <div className="space-y-2">
              {[
                { icon: Car, text: "On-site parking available" },
                { icon: Bus, text: "Public transit accessible" },
                { icon: Accessibility, text: "Wheelchair accessible facility" }
              ].map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 p-3 rounded-lg transition-all duration-300 group/item">
                  <div className="bg-medical-teal/10 p-2 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                    <amenity.icon className="w-5 h-5 text-medical-teal" />
                  </div>
                  <span className="font-inter text-sm text-gray-700">{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default ContactLocationInfo;
