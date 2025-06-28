
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Clock, BookOpen, Heart } from 'lucide-react';

const DoctorSection = () => {
  const achievements = [
    { icon: <Award className="w-5 h-5 text-medical-teal" />, text: "MRCPsych - Royal College of Psychiatrists, UK" },
    { icon: <BookOpen className="w-5 h-5 text-medical-teal" />, text: "CCT in Old Age Psychiatry - UK" },
    { icon: <Heart className="w-5 h-5 text-medical-teal" />, text: "DPM Psychiatry - Specialized Training" },
    { icon: <Users className="w-5 h-5 text-medical-teal" />, text: "Published Researcher in Geriatric Mental Health" }
  ];

  const specializations = [
    "Geriatric Depression & Anxiety Disorders",
    "Dementia & Cognitive Impairment",
    "Behavioral & Psychological Symptoms",
    "Caregiver Support & Family Therapy",
    "Medication Optimization for Elderly",
    "End-of-Life Mental Health Care"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige/50 via-white to-medical-teal/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-medical-orange/5 to-medical-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-medical-deep-blue/5 to-medical-teal/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700 shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-orange/10 to-medical-teal/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-xl"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover:scale-105 backdrop-blur-sm border border-white/50">
              <img 
                alt="Dr. Soumya Hegde - Leading Geriatric Psychiatrist specializing in memory care, dementia treatment, and elderly mental health" 
                src="/lovable-uploads/d2a52f41-086d-4bdd-b753-d979277c6651.png"
                className="w-full h-[600px] rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" 
              />
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-full p-4 shadow-xl border border-medical-teal/20 group-hover:scale-110 transition-all duration-300">
                <div className="w-4 h-4 bg-gradient-to-r from-medical-teal to-medical-orange rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-medical-teal/15 to-medical-orange/15 rounded-full mb-8 border border-medical-teal/30 shadow-lg backdrop-blur-sm">
              <Heart className="w-4 h-4 text-medical-teal mr-2" />
              <span className="text-medical-teal font-inter text-sm font-medium">Your Trusted Mental Health Partner</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6 leading-tight">
              Meet Dr. Soumya Hegde
              <span className="block text-3xl md:text-4xl text-medical-teal mt-2">
                Geriatric Psychiatry Specialist
              </span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-8 rounded-full"></div>
            
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              With over 15 years of dedicated experience in geriatric psychiatry, Dr. Soumya Hegde has established herself 
              as a leading expert in elderly mental health care. Trained in the UK with specialized qualifications from the 
              Royal College of Psychiatrists, she brings world-class expertise to her compassionate practice.
            </p>
            
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              Dr. Hegde's approach combines evidence-based medical treatments with deep understanding of the unique challenges 
              faced by older adults. Her expertise spans from complex dementia care to depression treatment, always prioritizing 
              dignity, respect, and family-centered care.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/90 backdrop-blur-md px-6 py-5 rounded-xl shadow-lg border border-medical-teal/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-medical-teal group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-2xl font-bold text-medical-deep-blue">15+</div>
                    <div className="font-inter text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-md px-6 py-5 rounded-xl shadow-lg border border-medical-orange/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-medical-orange group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-2xl font-bold text-medical-orange">2000+</div>
                    <div className="font-inter text-sm text-gray-600">Lives Transformed</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              <h3 className="font-playfair text-xl text-medical-charcoal mb-4">Professional Qualifications</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-3 rounded-lg hover:bg-white/80 transition-all duration-300">
                  {achievement.icon}
                  <span className="font-inter text-gray-700">{achievement.text}</span>
                </div>
              ))}
            </div>
            
            {/* Specializations */}
            <div className="mb-8">
              <h3 className="font-playfair text-xl text-medical-charcoal mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-1 gap-2">
                {specializations.map((specialization, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-medical-teal" />
                    <span className="font-inter text-gray-700 text-sm">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/about">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-deep-blue/90 hover:to-medical-teal/90 text-white px-10 py-4 font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
                Learn More About Dr. Hegde's Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
