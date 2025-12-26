
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProfessionalCredentials from '@/components/home/ProfessionalCredentials';
import PatientTestimonials from '@/components/home/PatientTestimonials';
import GoogleMap from '@/components/GoogleMap';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, Shield, Clock, CheckCircle, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Core Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-medical-beige/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Specialized Care Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based psychiatric care tailored for older adults
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: <Heart className="w-8 h-8 text-medical-teal" />,
              title: "Memory Screening",
              description: "Early detection and monitoring of memory-related concerns using standardized clinical tools."
            }, {
              icon: <Users className="w-8 h-8 text-medical-teal" />,
              title: "Dementia Evaluation",
              description: "Comprehensive assessment using clinical expertise to diagnose and type different forms of dementia."
            }, {
              icon: <Shield className="w-8 h-8 text-medical-teal" />,
              title: "Behavioral Management",
              description: "Specialized strategies for managing challenging behaviors associated with cognitive decline."
            }, {
              icon: <Calendar className="w-8 h-8 text-medical-teal" />,
              title: "Geriatric Psychiatry",
              description: "Expert treatment of psychiatric disorders specifically tailored for the senior population."
            }, {
              icon: <Heart className="w-8 h-8 text-medical-teal" />,
              title: "Cognitive Therapy",
              description: "Evidence-based cognitive stimulation therapy to support and maintain brain health."
            }, {
              icon: <Users className="w-8 h-8 text-medical-teal" />,
              title: "Family Education",
              description: "Comprehensive support and education for families and caregivers throughout the care journey."
            }].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-medical-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-8 py-3 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gradient-to-br from-medical-beige/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-medical-teal mr-2" />
              <span className="text-medical-teal font-inter text-sm font-medium">Visit Our Clinic</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Find Us in Bengaluru
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located at No.6, Wind Tunnel Road, Murgesh Pallya with easy access
            </p>
          </div>

          <GoogleMap />
        </div>
      </section>

      {/* Professional Credentials */}
      <ProfessionalCredentials />

      {/* Patient Testimonials */}
      <PatientTestimonials />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-medical-deep-blue to-medical-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-8">
            Get in Touch with Us
          </h2>
          <p className="font-inter text-xl mb-10 opacity-90 leading-relaxed">
            We're here to support you and your family on your health journey
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/contact">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                Contact Us
              </Button>
            </Link>
            <a
              href="tel:+918904418172"
              className="inline-flex items-center justify-center border-2 border-white bg-transparent text-white hover:bg-white hover:text-medical-deep-blue px-10 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-xl"
            >
              Call Us
            </a>
          </div>

          {/* Office Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-5 h-5 text-medical-teal" />
              <span className="font-inter font-semibold">Office Hours</span>
            </div>
            <p className="font-inter mb-2">Monday - Friday: 9:00 AM - 4:00 PM</p>
            <p className="font-inter">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
