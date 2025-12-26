
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Calendar, Clock, Shield } from 'lucide-react';

const AppointmentHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-medical-beige/50 to-medical-teal/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-deep-blue/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-medical-teal mr-2" />
            <span className="text-medical-teal font-inter text-sm font-medium">Easy Online Booking</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Schedule Your
            <span className="block text-medical-teal">Consultation</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="font-inter text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Take the first step towards better mental and cognitive health. Schedule your consultation
            with Dr. Soumya Hegde and experience compassionate, expert care.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Clock, title: "Quick Process", desc: "5 minutes to book" },
              { icon: Calendar, title: "Flexible Timing", desc: "Same-day available" },
              { icon: Shield, title: "Data Privacy", desc: "Confidential Care" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-medical-teal/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <feature.icon className="w-8 h-8 text-medical-teal mb-2" />
                <h3 className="font-inter font-semibold text-medical-charcoal text-sm">{feature.title}</h3>
                <p className="font-inter text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AppointmentHero;
