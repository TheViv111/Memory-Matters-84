
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-deep-blue/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
                <span className="text-medical-teal font-inter text-sm font-medium">Board-Certified Neurologist</span>
              </div>
              
              <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6 leading-tight">
                Meet Dr. Soumya Hegde
                <span className="block text-medical-teal text-3xl md:text-4xl mt-2">
                  Your Memory Care Specialist
                </span>
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-deep-blue mb-6 rounded-full"></div>
              
              <p className="font-inter text-xl text-gray-700 leading-relaxed mb-8">
                A compassionate neurologist with specialized expertise in memory disorders, 
                dementia care, movement disorders, and cognitive health. Dr. Hegde combines advanced medical training 
                with a patient-centered approach to provide comprehensive neurological care.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-md border border-medical-teal/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-medical-deep-blue">15+</div>
                  <div className="font-inter text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-md border border-medical-teal/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-medical-deep-blue">1000+</div>
                  <div className="font-inter text-sm text-gray-600">Patients Helped</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {["MD Neurology - NIMHANS", "Movement Disorders Specialist", "Dementia Care Expert", "Cognitive Health Advocate"].map((credential, index) => (
                  <div key={index} className="bg-gradient-to-r from-medical-teal/10 to-medical-deep-blue/10 px-4 py-2 rounded-full border border-medical-teal/20 hover:from-medical-teal/20 hover:to-medical-deep-blue/20 transition-all duration-300">
                    <span className="font-inter text-medical-deep-blue font-medium text-sm">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-deep-blue/10 to-medical-teal/10 rounded-3xl transform -rotate-3 hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img 
                  alt="Dr. Soumya Hegde - Neurologist specializing in memory care and cognitive disorders" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                  }} 
                  src="/doctor-image.jpg" 
                  className="w-full h-96 rounded-2xl object-cover" 
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
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
