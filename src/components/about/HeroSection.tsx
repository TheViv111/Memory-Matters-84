
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-medical-teal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2} duration={1}>
            <div>
              <ScrollReveal direction="fade" delay={0.4}>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 rounded-full mb-6 border border-medical-teal/20 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <span className="text-medical-teal font-inter text-sm font-medium">Geriatric Psychiatrist</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.6}>
                <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6 leading-tight">
                  Meet Dr. Soumya Hegde
                  <span className="block text-medical-teal text-3xl md:text-4xl mt-2 bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent">
                    Your Memory Care Specialist
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.8}>
                <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-6 rounded-full shadow-md"></div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={1}>
                <p className="font-inter text-xl text-gray-700 leading-relaxed mb-8">
                  A compassionate geriatric psychiatrist with specialized expertise in old age psychiatry, 
                  memory disorders, and cognitive health. Dr. Hegde combines advanced medical training 
                  with a patient-centered approach to provide comprehensive mental health care for older adults.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={1.2}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-medical-teal/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-medical-teal/40 group">
                    <div className="text-2xl font-bold text-medical-deep-blue group-hover:scale-110 transition-transform duration-300">20+</div>
                    <div className="font-inter text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-medical-orange/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-medical-orange/40 group">
                    <div className="text-2xl font-bold text-medical-orange group-hover:scale-110 transition-transform duration-300">1000+</div>
                    <div className="font-inter text-sm text-gray-600">Patients Helped</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={1.4}>
                <div className="flex flex-wrap gap-3">
                  {["MBBS", "DPM (Psychiatry)", "MMedSci (Psychiatry)", "MRCPsych", "CCT Old Age Psychiatry"].map((credential, index) => (
                    <ScrollReveal key={index} direction="fade" delay={1.6 + index * 0.1}>
                      <div className="bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 px-4 py-2 rounded-full border border-medical-teal/20 hover:from-medical-teal/20 hover:to-medical-orange/20 transition-all duration-300 hover:scale-105 hover:shadow-md backdrop-blur-sm">
                        <span className="font-inter text-medical-deep-blue font-medium text-sm">{credential}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4} duration={1.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-orange/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-deep-blue/10 to-medical-teal/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-xl"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover:scale-105 backdrop-blur-sm border border-white/50">
                <img 
                  alt="Dr. Soumya Hegde - Geriatric Psychiatrist specializing in memory care and cognitive disorders" 
                  src="/lovable-uploads/d2a52f41-086d-4bdd-b753-d979277c6651.png"
                  className="w-full h-[600px] rounded-2xl object-cover object-center bg-gray-50 transition-transform duration-500 group-hover:scale-[1.02]" 
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full p-3 shadow-xl border border-medical-teal/20 group-hover:scale-110 transition-all duration-300">
                  <div className="w-3 h-3 bg-medical-orange rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-medical-teal/90 to-medical-deep-blue/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-inter text-sm font-medium">Memory Care Expert</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
