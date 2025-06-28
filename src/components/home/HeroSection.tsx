
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, Shield, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/10 overflow-hidden">
      {/* Spline-inspired 3D background without blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-medical-orange/15 to-medical-teal/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-medical-deep-blue/25 to-medical-orange/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-medical-teal/30 transform rotate-45 animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-medical-orange/40 rounded-full animate-bounce" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 left-1/3 w-8 h-8 border-2 border-medical-deep-blue/30 rotate-12 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-medical-teal/15 to-medical-orange/15 rounded-full mb-8 border border-medical-teal/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-4 h-4 text-medical-teal mr-2" />
            <span className="text-medical-teal font-inter text-sm font-medium">Transform Your Mental Wellness Journey</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-medical-charcoal mb-8 leading-tight">
            Rediscover Your
            <span className="block bg-gradient-to-r from-medical-teal via-medical-deep-blue to-medical-orange bg-clip-text text-transparent">
              Inner Peace
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">
              & Mental Clarity
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="font-inter text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-5xl mx-auto">
            Experience personalized geriatric psychiatry care that honors your journey. 
            Dr. Soumya Hegde combines evidence-based treatments with compassionate understanding 
            to help you navigate life's transitions with confidence and grace.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: <Shield className="w-5 h-5" />, text: "Specialized Memory Care" },
              { icon: <Heart className="w-5 h-5" />, text: "Compassionate Approach" },
              { icon: <Sparkles className="w-5 h-5" />, text: "Holistic Treatment" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-medical-teal/20 hover:shadow-lg transition-all duration-300">
                <div className="text-medical-teal">{feature.icon}</div>
                <span className="font-inter text-sm font-medium text-medical-deep-blue">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/appointment">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-deep-blue/90 hover:to-medical-teal/90 text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
                Begin Your Healing Journey
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-10 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                Meet Dr. Hegde
              </Button>
            </Link>
          </div>
          
          {/* Emergency Contact Card */}
          <div className="max-w-md mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-medical-teal/30 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-full">
                <Phone className="text-medical-deep-blue w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 font-inter">Ready to start? Call us now</p>
                <p className="font-bold text-xl text-medical-deep-blue">+91 89044 18172</p>
                <p className="text-xs text-gray-500 mt-1">Available Monday - Saturday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
