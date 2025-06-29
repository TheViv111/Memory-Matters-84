
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Clock, CheckCircle, Star, Award, Shield, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-medical-beige/30 to-medical-teal/5 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Subtle medical cross pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-8 h-full">
            {Array.from({
            length: 48
          }).map((_, i) => <div key={i} className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                  <div className="w-full h-0.5 bg-medical-teal"></div>
                  <div className="w-0.5 h-full bg-medical-teal absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>)}
          </div>
        </div>
        
        {/* Elegant gradients */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-medical-orange/5 to-medical-teal/5 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
          {/* Content Section */}
          <div className="animate-fade-in">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-medical-teal/20 hover:shadow-xl transition-all duration-300">
              <Award className="w-4 h-4 text-medical-teal mr-2" />
              <span className="text-medical-teal font-inter text-sm font-medium">Geriatric Psychiatrist
            </span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-medical-charcoal mb-8 leading-tight">
              Expert Care for
              <span className="block text-medical-teal bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent py-2 leading-relaxed">
                Aging Minds
              </span>
              <span className="block text-medical-deep-blue text-4xl md:text-5xl lg:text-6xl mt-4">
                & Mental Wellness
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-8 rounded-full shadow-md"></div>
            
            <p className="font-inter text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Specialized psychiatric care for older adults, focusing on memory disorders, 
              cognitive health, and comprehensive mental wellness solutions.
            </p>
            
            <p className="font-inter text-lg text-gray-600 mb-10 leading-relaxed">
              Dr. Soumya Hegde combines extensive clinical experience with a compassionate, 
              evidence-based approach to help patients and families navigate the complexities 
              of aging and mental health challenges with dignity and hope.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link to="/appointment">
                <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-10 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-xl shadow-lg backdrop-blur-sm bg-white/80">
                  Meet Dr. Hegde
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Professional Doctor Card - Updated with correct information */}
          <div className="relative lg:ml-8 lg:mt-0 mt-8">
            {/* Main Professional Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 rounded-3xl shadow-2xl border border-medical-teal/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-8">
                  {/* Doctor Image */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
                      <img src="/lovable-uploads/76dc60d7-260b-44ed-8802-e008f6b9a2dd.png" alt="Dr. Soumya Hegde" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-playfair text-2xl text-medical-charcoal mb-2">Dr. Soumya Hegde</h3>
                    <p className="font-inter text-medical-teal font-medium">Geriatric Psychiatrist</p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mt-3"></div>
                  </div>
                  
                  {/* Professional Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-medical-teal/10 hover:shadow-md transition-all duration-300">
                      <Users className="w-6 h-6 text-medical-teal mx-auto mb-2" />
                      <p className="text-2xl font-bold text-medical-orange">15+</p>
                      <p className="text-xs text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-medical-teal/10 hover:shadow-md transition-all duration-300">
                      <Star className="w-6 h-6 text-medical-orange mx-auto mb-2" />
                      <p className="text-2xl font-bold text-medical-teal">1000+</p>
                      <p className="text-xs text-gray-600">Patients Treated</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-medical-teal/10 hover:shadow-md transition-all duration-300">
                      <Calendar className="w-6 h-6 text-medical-deep-blue mx-auto mb-2" />
                      <p className="text-2xl font-bold text-medical-deep-blue">24/7</p>
                      <p className="text-xs text-gray-600">Emergency Support</p>
                    </div>
                  </div>
                  
                  {/* Credentials - Updated with correct information from About page */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-700">MRCPsych - Royal College of Psychiatrists</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-700">CCT in Old Age Psychiatry</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-700">MBBS - Grant Medical College, Mumbai</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-700">DPM - Lokmanya Tilak Medical College</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-medical-orange to-medical-teal rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
