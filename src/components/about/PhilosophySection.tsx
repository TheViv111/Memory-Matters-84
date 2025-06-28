
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Star } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const PhilosophySection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient receives individualized attention with empathy and understanding at the core of treatment."
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "We involve families in the care process, providing support and education throughout the journey."
    },
    {
      icon: Shield,
      title: "Evidence-Based Treatment",
      description: "Our treatments are grounded in the latest research and proven medical practices."
    },
    {
      icon: Star,
      title: "Excellence in Care",
      description: "Committed to the highest standards of medical excellence and patient satisfaction."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-medical-deep-blue/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-medical-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-medical-teal/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
              Our Philosophy of Care
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6 rounded-full shadow-md"></div>
            <ScrollReveal direction="fade" delay={0.3}>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-medical-teal/20 max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <p className="font-inter text-xl text-gray-600 leading-relaxed mb-6 italic">
                  "I believe that treating neurological conditions requires not just medical expertise, 
                  but also deep compassion and understanding. Every patient's journey is unique, and 
                  I'm committed to providing personalized care that addresses both the medical and 
                  emotional aspects of their condition."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mr-4"></div>
                  <span className="font-playfair text-lg text-medical-deep-blue font-medium">Dr. Soumya Hegde</span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-medical-orange to-medical-teal ml-4"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
              <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-white/90 backdrop-blur-sm border-0 shadow-lg group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-medical-teal/20">
                    <value.icon className="w-8 h-8 text-medical-teal group-hover:text-medical-deep-blue transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-lg text-medical-charcoal mb-3 group-hover:text-medical-deep-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
