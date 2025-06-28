
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Clock } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-medical-beige to-white overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/Wb6IgOLXSnvJPJT6/scene.splinecode"
          style={{ width: '100%', height: '100%', opacity: '0.7' }}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-beige/60 via-medical-beige/40 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-screen flex items-center">
        <div className="w-full text-left">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-medical-teal/20">
              <span className="text-medical-teal font-inter text-sm font-medium">Geriatric Psychiatrist & Memory Care Specialist</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-medical-charcoal mb-8 leading-tight max-w-4xl">
              Compassionate Care for
              <span className="block text-medical-teal bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent">
                Aging Minds
              </span>
              <span className="block text-medical-deep-blue text-4xl md:text-5xl lg:text-6xl mt-4">
                & Memory Wellness
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-8 rounded-full shadow-md"></div>
            
            <p className="font-inter text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl">
              Specialized psychiatric care for older adults, focusing on memory disorders, 
              cognitive health, and mental wellness.
            </p>
            
            <p className="font-inter text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl">
              Dr. Soumya Hegde combines decades of experience with a compassionate approach to help 
              patients and families navigate the complexities of aging, memory loss, and mental health challenges 
              with dignity and hope.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link to="/appointment">
                <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                  Schedule Your Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-10 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-xl shadow-lg">
                  Meet Dr. Hegde
                </Button>
              </Link>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
              {[
                { title: "15+ Years Experience", desc: "Specialized geriatric psychiatry" },
                { title: "Comprehensive Care", desc: "Memory, mood, and cognitive health" },
                { title: "Family-Centered", desc: "Supporting patients and caregivers" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-medical-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="font-playfair text-lg font-semibold text-medical-deep-blue mb-2">{benefit.title}</h3>
                  <p className="font-inter text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-l-4 border-medical-teal p-6 max-w-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-medical-teal/10 p-3 rounded-full">
                  <Phone className="text-medical-deep-blue" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Call Us Today</p>
                  <p className="font-semibold text-medical-deep-blue text-xl">+91 89044 18172</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>Mon-Sat: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
