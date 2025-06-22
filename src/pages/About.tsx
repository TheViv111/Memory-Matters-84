
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, BookOpen, Users, Heart, Shield } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const About = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
                  Meet Dr. Soumya Hegde
                </h1>
                <p className="font-inter text-xl text-gray-700 mb-8 leading-relaxed">
                  Board-Certified Neurologist specializing in memory disorders, dementia care, 
                  and geriatric neurology with over 15 years of compassionate patient care.
                </p>
                <Link to="/appointment">
                  <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 font-inter shadow-lg transform transition-all duration-200 hover:scale-105">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-medical-lavender/20 to-medical-teal/10 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105">
                  <img 
                    src="/doctor-image.jpg" 
                    alt="Dr. Soumya Hegde - Board-Certified Neurologist specializing in memory disorders"
                    className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-deep-blue/10 to-transparent rounded-lg pointer-events-none"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
              Credentials & Qualifications
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-medical-teal" />,
                title: "Medical Education",
                details: [
                  "MD - Johns Hopkins School of Medicine",
                  "Residency - Massachusetts General Hospital",
                  "Fellowship - Mayo Clinic Memory Disorders Program"
                ]
              },
              {
                icon: <Shield className="w-8 h-8 text-medical-teal" />,
                title: "Board Certifications",
                details: [
                  "Board Certified in Neurology",
                  "Board Certified in Geriatric Medicine",
                  "Certified in Dementia Care Specialist"
                ]
              },
              {
                icon: <Award className="w-8 h-8 text-medical-teal" />,
                title: "Professional Affiliations",
                details: [
                  "American Academy of Neurology",
                  "Alzheimer's Association Medical Advisory Board",
                  "International Society of Geriatric Neurology"
                ]
              }
            ].map((credential, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="mb-4 transform transition-transform duration-200 group-hover:scale-110">
                      {credential.icon}
                    </div>
                    <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                      {credential.title}
                    </h3>
                    <ul className="space-y-2">
                      {credential.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="font-inter text-gray-700 text-sm">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
                Philosophy of Care
              </h2>
              <div className="w-24 h-1 bg-medical-teal mx-auto mb-8"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-gradient-to-br from-medical-beige to-medical-lavender/20 rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <blockquote className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed text-center italic mb-8">
                "Every patient deserves to be heard, understood, and treated with dignity. My approach 
                centers on building trust, providing clear communication, and developing personalized 
                care plans that honor each individual's unique needs and circumstances."
              </blockquote>
              <div className="text-center">
                <p className="font-playfair text-xl text-medical-charcoal">Dr. Soumya Hegde</p>
                <p className="font-inter text-gray-600">Founder, Memory Matters Clinic</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
              Areas of Specialization
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-medical-teal" />,
                title: "Memory Disorders",
                description: "Comprehensive evaluation and treatment of Alzheimer's disease, mild cognitive impairment, and other memory-related conditions."
              },
              {
                icon: <Users className="w-8 h-8 text-medical-teal" />,
                title: "Geriatric Neurology",
                description: "Specialized care for age-related neurological conditions including Parkinson's disease, stroke recovery, and movement disorders."
              },
              {
                icon: <Shield className="w-8 h-8 text-medical-teal" />,
                title: "Dementia Care",
                description: "Expert diagnosis and management of various forms of dementia with focus on maintaining quality of life and dignity."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-medical-teal" />,
                title: "Family Counseling",
                description: "Guidance and support for families navigating the challenges of neurological and memory disorders."
              }
            ].map((specialization, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="border-l-4 border-medical-teal hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 transform transition-transform duration-200 group-hover:scale-110">
                        {specialization.icon}
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl text-medical-charcoal mb-3">
                          {specialization.title}
                        </h3>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          {specialization.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
              Awards & Recognition
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2023",
                award: "Excellence in Patient Care",
                organization: "State Medical Association"
              },
              {
                year: "2022",
                award: "Top Neurologist",
                organization: "Regional Healthcare Awards"
              },
              {
                year: "2021",
                award: "Research Excellence",
                organization: "Alzheimer's Foundation"
              },
              {
                year: "2020",
                award: "Compassionate Care Award",
                organization: "Memory Care Network"
              }
            ].map((award, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="transform transition-transform duration-200 group-hover:scale-110">
                      <Award className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                    </div>
                    <p className="font-playfair text-2xl text-medical-deep-blue font-semibold mb-2">
                      {award.year}
                    </p>
                    <h3 className="font-inter font-semibold text-medical-charcoal mb-2">
                      {award.award}
                    </h3>
                    <p className="font-inter text-sm text-gray-600">
                      {award.organization}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
              Recent Publications
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {[
              {
                title: "Early Detection Strategies in Mild Cognitive Impairment: A Comprehensive Review",
                journal: "Journal of Neurological Sciences",
                year: "2023",
                type: "Research Article"
              },
              {
                title: "Family-Centered Approaches to Alzheimer's Care: Improving Quality of Life",
                journal: "Geriatric Medicine Today",
                year: "2023",
                type: "Clinical Review"
              },
              {
                title: "Innovative Therapeutic Interventions in Dementia Care",
                journal: "Neurology & Aging",
                year: "2022",
                type: "Case Studies"
              }
            ].map((publication, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-102 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="transform transition-transform duration-200 group-hover:scale-110">
                        <BookOpen className="w-6 h-6 text-medical-teal flex-shrink-0 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-medical-charcoal mb-2">
                          {publication.title}
                        </h3>
                        <p className="font-inter text-gray-600 mb-1">
                          <span className="font-medium">{publication.journal}</span> • {publication.year}
                        </p>
                        <span className="inline-block px-3 py-1 bg-medical-teal/10 text-medical-teal text-sm rounded-full">
                          {publication.type}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">
              Experience Compassionate, Expert Care
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-inter text-xl mb-8 opacity-90">
              Schedule your consultation with Dr. Hegde and discover how personalized 
              neurological care can make a difference in your journey.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <Link to="/appointment">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 text-lg font-inter shadow-lg transform transition-all duration-200 hover:scale-105">
                Schedule Your Consultation
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
