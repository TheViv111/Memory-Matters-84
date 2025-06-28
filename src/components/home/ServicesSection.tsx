
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, Shield, Clock, Brain } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-medical-teal" />,
      title: "Comprehensive Memory Assessments",
      description: "Advanced neuropsychological evaluations using cutting-edge diagnostic tools to detect early signs of cognitive changes and develop personalized care strategies."
    },
    {
      icon: <Heart className="w-8 h-8 text-medical-teal" />,
      title: "Dementia & Alzheimer's Care",
      description: "Specialized treatment plans combining medication management, cognitive therapies, and family support to enhance quality of life for patients and caregivers."
    },
    {
      icon: <Shield className="w-8 h-8 text-medical-teal" />,
      title: "Geriatric Depression Treatment",
      description: "Evidence-based therapeutic approaches specifically designed for older adults, addressing the unique challenges of late-life depression and anxiety."
    },
    {
      icon: <Users className="w-8 h-8 text-medical-teal" />,
      title: "Family Counseling & Support",
      description: "Comprehensive support services for families navigating mental health challenges, including caregiver education and stress management strategies."
    },
    {
      icon: <Calendar className="w-8 h-8 text-medical-teal" />,
      title: "Medication Management",
      description: "Careful monitoring and optimization of psychiatric medications, considering age-related changes and potential drug interactions."
    },
    {
      icon: <Clock className="w-8 h-8 text-medical-teal" />,
      title: "Crisis Intervention",
      description: "Immediate support and intervention services for psychiatric emergencies, with 24/7 consultation availability for urgent mental health needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-medical-beige/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Comprehensive Mental Health Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our integrated approach to geriatric psychiatry combines clinical expertise with compassionate care, 
            ensuring each patient receives personalized treatment tailored to their unique needs and life circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl text-medical-charcoal mb-4 group-hover:text-medical-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/services">
            <Button className="bg-gradient-to-r from-medical-teal to-medical-deep-blue hover:from-medical-teal/90 hover:to-medical-deep-blue/90 text-white px-10 py-4 font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
              Explore All Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
