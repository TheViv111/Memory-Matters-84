
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
  BookOpen,
  MapPin,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-medical-teal" />,
      title: "Memory Screening",
      description: "Standardized clinical tools and standardized cognitive testing aligned with British psychiatric protocols for early detection of memory concerns.",
      features: ["Standardized cognitive testing", "Baseline memory assessment", "Self-report evaluations", "Informant-based history", "Early detection counseling"]
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Dementia Evaluation",
      description: "Comprehensive clinical diagnostic process to identify and subtype different forms of dementia and cognitive impairment.",
      features: ["Clinical diagnostic interview", "Mental state examination", "Functional assessment", "Differential diagnosis", "Care planning"]
    },
    {
      icon: <Shield className="w-12 h-12 text-medical-teal" />,
      title: "Management of Challenging Behaviours",
      description: "Expert strategies and therapeutic interventions for managing behavioral and psychological symptoms associated with dementia.",
      features: ["Behavioral assessment", "Trigger identification", "Non-pharmacological strategies", "Medication management", "Safety planning"]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-medical-teal" />,
      title: "Treatment of Psychiatric Disorders in Seniors",
      description: "Specialized psychiatric care for senior-onset conditions including depression, anxiety, and late-life psychosis.",
      features: ["Psychiatric evaluation", "Geriatric psychopharmacology", "Psychological support", "Comorbidity management", "Holistic care approach"]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-medical-teal" />,
      title: "Cognitive Stimulation Therapy",
      description: "Evidence-based non-pharmacological treatment for people with mild to moderate dementia.",
      features: ["Structured cognitive activities", "Social interaction support", "Brain health engagement", "Quality of life enhancement", "Group or individual sessions"]
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Family Education and Support",
      description: "In-depth guidance and emotional support for families to understand and navigate the journey of their loved ones.",
      features: ["Disease education", "Communication strategies", "Caregiver stress management", "Legal/Financial awareness", "Future care planning"]
    },
    {
      icon: <Heart className="w-12 h-12 text-medical-teal" />,
      title: "Geriatric Counselling",
      description: "Therapeutic counseling tailored to the unique emotional and psychological needs of aging adults.",
      features: ["Adjustment to aging", "Grief and loss support", "Identity and purpose", "Emotional resilience", "Supportive psychotherapy"]
    },
    {
      icon: <MapPin className="w-12 h-12 text-medical-teal" />,
      title: "Community Outreach Service",
      description: "Initiatives and programs designed to increase awareness and provide care accessibility in the community.",
      features: ["Awareness workshops", "Screening camps", "Home-based visit coordination", "Community health talks", "Stigma reduction programs"]
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Caregiver Training Programs",
      description: "Practical skills and training for caregivers to provide high-quality home-based care for seniors with cognitive needs.",
      features: ["ADL assistance training", "Behavioral management skills", "Environmental safety", "Medication adherence", "Self-care for caregivers"]
    },
    {
      icon: <Settings className="w-12 h-12 text-medical-teal" />,
      title: "Senior Care Resource Hub",
      description: "Access to a curated collection of resources, tools, and referrals for comprehensive senior mental wellness.",
      features: ["Educational materials", "Service referrals", "Toolkits for daily living", "Support network links", "Care coordination resources"]
    }
  ];

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Cognitive & Geriatric Psychiatry Services
          </h1>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our full range of neurological and memory care services are designed to provide
            compassionate, personalized care for patients and families at every stage of their journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-medical-beige">
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


                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility & Clinic Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
            <Users className="w-4 h-4 text-medical-teal mr-2" />
            <span className="text-medical-teal font-inter text-sm font-medium">Clinic Accessibility</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-8">
            Accessible & Compassionate Environment
          </h2>
          <p className="font-inter text-lg text-gray-700 mb-10 leading-relaxed">
            Our clinic is specifically designed to be senior-friendly, ensuring a safe and comfortable experience for patients and their families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Wheelchair accessible facilities",
              "Close parking available",
              "Comfortable waiting areas",
              "Family-friendly environment"
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-medical-beige/30 rounded-2xl border border-medical-teal/10">
                <CheckCircle className="w-6 h-6 text-medical-teal mb-3" />
                <span className="font-inter text-gray-700 text-sm font-medium text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
