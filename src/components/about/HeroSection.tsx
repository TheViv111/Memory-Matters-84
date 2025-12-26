
import React from 'react';

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
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 rounded-full mb-6 border border-medical-teal/20 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <span className="text-medical-teal font-inter text-sm font-medium">Geriatric Psychiatrist</span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6 leading-tight">
              About
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-6 rounded-full shadow-md"></div>

            <p className="font-inter text-xl text-gray-700 leading-relaxed mb-8">
              Dr Soumya Hegde is a compassionate geriatric psychiatrist with specialized expertise in old age psychiatry,
              memory disorders, and cognitive health. She combines advanced medical training
              with a patient-centered approach to provide comprehensive mental health care for older adults.
            </p>

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

            <div className="flex flex-wrap gap-3">
              {["MBBS", "DPM (Psychiatry)", "MMedSci (Psychiatry)", "MRCPsych", "CCT Old Age Psychiatry"].map((credential, index) => (
                <div key={index} className="bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 px-4 py-2 rounded-full border border-medical-teal/20 hover:from-medical-teal/20 hover:to-medical-orange/20 transition-all duration-300 hover:scale-105 hover:shadow-md backdrop-blur-sm">
                  <span className="font-inter text-medical-deep-blue font-medium text-sm">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Background decorative circles */}
            <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-medical-deep-blue/5 to-medical-teal/5 rounded-full blur-xl"></div>

            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="Dr. Soumya Hegde - Geriatric Psychiatrist"
                src="/images/76dc60d7-260b-44ed-8802-e008f6b9a2dd.png"
                className="w-full h-full object-cover object-center bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
