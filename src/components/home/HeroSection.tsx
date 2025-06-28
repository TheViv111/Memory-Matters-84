
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Clock, CheckCircle, Star, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden pt-24">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-medical-orange/10 to-medical-teal/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-medical-lavender/15 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,134,171,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(46,134,171,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Professional overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Content Section */}
          <div className="animate-fade-in">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-medical-teal/20 hover:shadow-xl transition-all duration-300">
              <Award className="w-4 h-4 text-medical-teal mr-2" />
              <span className="text-medical-teal font-inter text-sm font-medium">Board-Certified Geriatric Psychiatrist</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-medical-charcoal mb-8 leading-tight">
              Expert Care for
              <span className="block text-medical-teal bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent">
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
              Dr. Soumya Hegde combines decades of clinical experience with a compassionate, 
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
            
            {/* Professional Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "15+ Years", desc: "Clinical Experience", icon: <Award className="w-6 h-6 text-medical-teal" /> },
                { title: "1000+ Patients", desc: "Successfully Treated", icon: <Star className="w-6 h-6 text-medical-orange" /> },
                { title: "Specialized Care", desc: "Memory & Cognitive Health", icon: <CheckCircle className="w-6 h-6 text-medical-deep-blue" /> }
              ].map((credential, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-medical-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {credential.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-medical-deep-blue mb-2">{credential.title}</h3>
                  <p className="font-inter text-gray-600 text-sm">{credential.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Contact Information */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-l-4 border-medical-teal p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 p-4 rounded-full">
                  <Phone className="text-medical-deep-blue" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Professional Consultation</p>
                  <p className="font-semibold text-medical-deep-blue text-xl">+91 89044 18172</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>Mon-Sat: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element Section */}
          <div className="relative lg:ml-8">
            {/* Abstract Professional Visualization */}
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 rounded-3xl shadow-2xl border border-medical-teal/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl text-medical-charcoal mb-2">Dr. Soumya Hegde</h3>
                    <p className="font-inter text-medical-teal font-medium">Geriatric Psychiatrist</p>
                  </div>
                  
                  {/* Credentials Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {["MBBS", "DPM", "MRCPsych", "CCT"].map((credential, index) => (
                      <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-medical-teal/10 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                        <p className="font-inter font-semibold text-medical-deep-blue">{credential}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-around pt-6 border-t border-medical-teal/20">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-medical-orange">15+</p>
                      <p className="text-sm text-gray-600">Years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-medical-teal">1000+</p>
                      <p className="text-sm text-gray-600">Patients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-medical-deep-blue">24/7</p>
                      <p className="text-sm text-gray-600">Support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-medical-orange to-medical-teal rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
