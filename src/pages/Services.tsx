
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Shield, 
  Calendar, 
  Clock, 
  CheckCircle,
  Phone,
  BookOpen
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-medical-teal" />,
      title: "Comprehensive Memory Assessment",
      description: "Thorough evaluation of cognitive function, memory, and thinking skills using state-of-the-art diagnostic tools.",
      features: [
        "Detailed neuropsychological testing",
        "Brain imaging coordination",
        "Cognitive screening assessments",
        "Family history analysis",
        "Personalized treatment planning"
      ],
      duration: "2-3 hours",
      preparation: "Bring list of medications and medical history"
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Alzheimer's & Dementia Care",
      description: "Specialized care for various forms of dementia with focus on maintaining dignity and quality of life.",
      features: [
        "Early-stage intervention strategies",
        "Medication management",
        "Behavioral symptom treatment",
        "Care coordination with specialists",
        "Advanced directive planning"
      ],
      duration: "60-90 minutes",
      preparation: "Caregiver presence recommended"
    },
    {
      icon: <Shield className="w-12 h-12 text-medical-teal" />,
      title: "Geriatric Neurology",
      description: "Expert care for age-related neurological conditions including movement disorders and stroke recovery.",
      features: [
        "Parkinson's disease management",
        "Stroke rehabilitation planning",
        "Tremor evaluation and treatment",
        "Balance disorder assessment",
        "Medication optimization"
      ],
      duration: "60 minutes",
      preparation: "List of current symptoms and concerns"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-medical-teal" />,
      title: "Cognitive Therapy & Rehabilitation",
      description: "Evidence-based therapies to support cognitive function and daily living skills.",
      features: [
        "Memory training exercises",
        "Attention and focus improvement",
        "Problem-solving skill development",
        "Daily living skills training",
        "Technology adaptation assistance"
      ],
      duration: "45-60 minutes",
      preparation: "Comfortable clothing recommended"
    },
    {
      icon: <Heart className="w-12 h-12 text-medical-teal" />,
      title: "Family Support Services",
      description: "Comprehensive support for caregivers and family members navigating neurological conditions.",
      features: [
        "Caregiver education and training",
        "Support group facilitation",
        "Stress management counseling",
        "Resource coordination",
        "Crisis intervention planning"
      ],
      duration: "60 minutes",
      preparation: "All family members welcome"
    },
    {
      icon: <Clock className="w-12 h-12 text-medical-teal" />,
      title: "Ongoing Monitoring & Care",
      description: "Regular follow-up care with adjustments to treatment plans as conditions evolve.",
      features: [
        "Progress monitoring",
        "Medication adjustments",
        "Symptom tracking",
        "Quality of life assessments",
        "Care plan modifications"
      ],
      duration: "30-45 minutes",
      preparation: "Symptom diary if available"
    }
  ];

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Comprehensive Neurological Services
          </h1>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our full range of neurological and memory care services are designed to provide 
            compassionate, personalized care for patients and families at every stage of their journey.
          </p>
          <Link to="/appointment">
            <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 text-lg font-inter">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-2xl text-medical-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-medical-charcoal mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter text-sm text-gray-600">Duration:</span>
                      <span className="font-inter text-sm text-medical-charcoal font-medium">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-gray-600">Preparation:</span>
                      <span className="font-inter text-sm text-medical-charcoal font-medium text-right max-w-48">
                        {service.preparation}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
              Your Care Journey
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding what to expect during your care with Memory Matters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive evaluation of your concerns and medical history"
              },
              {
                step: "02",
                title: "Diagnostic Assessment",
                description: "Detailed testing and evaluation to understand your condition"
              },
              {
                step: "03",
                title: "Treatment Planning",
                description: "Personalized care plan developed with your input and goals"
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Regular follow-ups and adjustments to ensure optimal care"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-playfair text-xl text-medical-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Accessibility */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-medical-teal mb-6" />
                <h3 className="font-playfair text-2xl text-medical-charcoal mb-4">
                  Insurance & Payment
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  We accept most major insurance plans and offer flexible payment options 
                  to ensure care is accessible to all patients.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Medicare and Medicaid accepted",
                    "Most major insurance plans",
                    "Flexible payment arrangements",
                    "Pre-authorization assistance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                  Verify Your Insurance
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-medical-teal mb-6" />
                <h3 className="font-playfair text-2xl text-medical-charcoal mb-4">
                  Accessibility & Comfort
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  Our clinic is designed with accessibility and comfort in mind, 
                  ensuring a welcoming environment for all patients and families.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Wheelchair accessible facilities",
                    "Close parking available",
                    "Comfortable waiting areas",
                    "Family-friendly environment"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-medical-teal mx-auto mb-6" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            24/7 Emergency Support
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            We understand that neurological conditions can create urgent situations. 
            Our emergency line is always available for existing patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 text-lg font-inter">
              Call Emergency Line: (555) 123-4567
            </Button>
            <Link to="/appointment">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-deep-blue px-8 py-3 text-lg font-inter">
                Schedule Regular Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
