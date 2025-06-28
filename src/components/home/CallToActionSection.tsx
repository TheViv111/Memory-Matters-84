
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Phone, Calendar } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-deep-blue via-medical-charcoal to-medical-deep-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/10 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="font-inter text-sm font-medium">Take the First Step Today</span>
        </div>
        
        <h2 className="font-playfair text-4xl md:text-5xl mb-8 leading-tight">
          Ready to Begin Your Journey to 
          <span className="block bg-gradient-to-r from-medical-teal to-medical-orange bg-clip-text text-transparent">
            Better Mental Health?
          </span>
        </h2>
        
        <p className="font-inter text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
          Don't let mental health challenges define your golden years. Schedule your consultation today 
          and discover how personalized geriatric psychiatry care can transform your life and restore your peace of mind.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link to="/appointment">
            <Button className="bg-gradient-to-r from-medical-teal to-medical-orange hover:from-medical-teal/90 hover:to-medical-orange/90 text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
              Schedule Your Consultation
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-medical-deep-blue px-10 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-full shadow-lg">
              Contact Our Office
            </Button>
          </Link>
        </div>
        
        {/* Office Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Phone className="w-8 h-8 text-medical-teal mx-auto mb-4" />
            <h3 className="font-inter font-semibold mb-2">Call Us</h3>
            <p className="text-lg font-bold">+91 89044 18172</p>
            <p className="text-sm opacity-75">Available for appointments</p>
          </div>
          
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Clock className="w-8 h-8 text-medical-orange mx-auto mb-4" />
            <h3 className="font-inter font-semibold mb-2">Office Hours</h3>
            <p className="text-lg">Monday - Saturday</p>
            <p className="text-sm opacity-75">9:00 AM - 4:00 PM</p>
          </div>
          
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Calendar className="w-8 h-8 text-medical-teal mx-auto mb-4" />
            <h3 className="font-inter font-semibold mb-2">Appointments</h3>
            <p className="text-lg">By Appointment Only</p>
            <p className="text-sm opacity-75">Same-day consultations available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
