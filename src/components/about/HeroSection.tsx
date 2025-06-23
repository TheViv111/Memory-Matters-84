import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
const HeroSection = () => {
  return <section className="py-20 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
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
                dementia care, and cognitive health. Dr. Hegde combines advanced medical training 
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
                {["MD Neurology", "Memory Disorders Specialist", "Dementia Care Expert", "Cognitive Health Advocate"].map((credential, index) => <div key={index} className="bg-gradient-to-r from-medical-teal/10 to-medical-deep-blue/10 px-4 py-2 rounded-full border border-medical-teal/20 hover:from-medical-teal/20 hover:to-medical-deep-blue/20 transition-all duration-300">
                    <span className="font-inter text-medical-deep-blue font-medium text-sm">{credential}</span>
                  </div>)}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-deep-blue/10 to-medical-teal/10 rounded-3xl transform -rotate-3 hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img alt="Dr. Soumya Hegde - Neurologist specializing in memory care and cognitive disorders" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
              }} src="data:image/jpeg;base64,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" className="w-full h-96 rounded-2xl object-cover" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default HeroSection;