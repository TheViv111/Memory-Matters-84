
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
      features: ["Standardized cognitive testing", "Baseline memory assessment", "Self-report evaluations", "Informant-based history", "Early detection counseling"],
      duration: "45-60 minutes",
      preparation: "Informant (family member) involvement is helpful"
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Dementia Evaluation",
      description: "Comprehensive clinical diagnostic process to identify and subtype different forms of dementia and cognitive impairment.",
      features: ["Clinical diagnostic interview", "Mental state examination", "Functional assessment", "Differential diagnosis", "Care planning"],
      duration: "60-90 minutes",
      preparation: "Previous medical reports and brain imaging if any"
    },
    {
      icon: <Shield className="w-12 h-12 text-medical-teal" />,
      title: "Management of Challenging Behaviours",
      description: "Expert strategies and therapeutic interventions for managing behavioral and psychological symptoms associated with dementia.",
      features: ["Behavioral assessment", "Trigger identification", "Non-pharmacological strategies", "Medication management", "Safety planning"],
      duration: "60 minutes",
      preparation: "Diary of behaviors of concern if possible"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-medical-teal" />,
      title: "Treatment of Psychiatric Disorders in Seniors",
      description: "Specialized psychiatric care for senior-onset conditions including depression, anxiety, and late-life psychosis.",
      features: ["Psychiatric evaluation", "Geriatric psychopharmacology", "Psychological support", "Comorbidity management", "Holistic care approach"],
      duration: "60 minutes",
      preparation: "List of all current medications"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-medical-teal" />,
      title: "Cognitive Stimulation Therapy",
      description: "Evidence-based non-pharmacological treatment for people with mild to moderate dementia.",
      features: ["Structured cognitive activities", "Social interaction support", "Brain health engagement", "Quality of life enhancement", "Group or individual sessions"],
      duration: "45-60 minutes",
      preparation: "Regular attendance is encouraged"
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Family Education and Support",
      description: "In-depth guidance and emotional support for families to understand and navigate the journey of their loved ones.",
      features: ["Disease education", "Communication strategies", "Caregiver stress management", "Legal/Financial awareness", "Future care planning"],
      duration: "60 minutes",
      preparation: "Relevant family members encouraged to attend"
    },
    {
      icon: <Heart className="w-12 h-12 text-medical-teal" />,
      title: "Geriatric Counselling",
      description: "Therapeutic counseling tailored to the unique emotional and psychological needs of aging adults.",
      features: ["Adjustment to aging", "Grief and loss support", "Identity and purpose", "Emotional resilience", "Supportive psychotherapy"],
      duration: "45-60 minutes",
      preparation: "Open heart and mind"
    },
    {
      icon: <MapPin className="w-12 h-12 text-medical-teal" />,
      title: "Community Outreach Service",
      description: "Initiatives and programs designed to increase awareness and provide care accessibility in the community.",
      features: ["Awareness workshops", "Screening camps", "Home-based visit coordination", "Community health talks", "Stigma reduction programs"],
      duration: "Varies",
      preparation: "Contact us for community program schedules"
    },
    {
      icon: <Users className="w-12 h-12 text-medical-teal" />,
      title: "Caregiver Training Programs",
      description: "Practical skills and training for caregivers to provide high-quality home-based care for seniors with cognitive needs.",
      features: ["ADL assistance training", "Behavioral management skills", "Environmental safety", "Medication adherence", "Self-care for caregivers"],
      duration: "60-90 minutes",
      preparation: "Note-taking materials recommended"
    },
    {
      icon: <Settings className="w-12 h-12 text-medical-teal" />,
      title: "Senior Care Resource Hub",
      description: "Access to a curated collection of resources, tools, and referrals for comprehensive senior mental wellness.",
      features: ["Educational materials", "Service referrals", "Toolkits for daily living", "Support network links", "Care coordination resources"],
      duration: "Access based",
      preparation: "Available to all registered patients"
    }
  ];

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Cognitive & Geriatric Psychiatry Services
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
                    "Star Health & Allied Insurance",
                    "HDFC ERGO Health Insurance",
                    "ICICI Lombard",
                    "Niva Bupa (Max Bupa)",
                    "Care Health Insurance"
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


      <Footer />
    </div>
  );
};

export default Services;
