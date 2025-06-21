
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Calendar, 
  Shield, 
  Star, 
  Phone,
  Clock,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-beige to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-medical-charcoal mb-6 leading-tight">
                Compassionate Care for 
                <span className="text-medical-teal"> Memory & Mind</span>
              </h1>
              <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
                Dr. Soumya Hegde and our dedicated team provide comprehensive neurological care 
                and memory services, supporting patients and families through every step of their journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment">
                  <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 text-lg font-inter">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-8 py-3 text-lg font-inter">
                    Meet Dr. Hegde
                  </Button>
                </Link>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border-l-4 border-medical-teal">
                <div className="flex items-center space-x-3">
                  <Phone className="text-medical-deep-blue" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                    <p className="font-semibold text-medical-deep-blue">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-medical-teal/20 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/placeholder.svg" 
                  alt="Dr. Soumya Hegde - Neurologist and Memory Care Specialist"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="font-playfair text-xl text-medical-charcoal mb-2">Dr. Soumya Hegde</h3>
                  <p className="text-gray-600">Board-Certified Neurologist</p>
                  <p className="text-sm text-medical-teal mt-1">Memory & Cognitive Disorders Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
              Comprehensive Care Services
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a full range of neurological and memory care services designed to meet 
              the unique needs of each patient and their family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-medical-teal" />,
                title: "Memory Assessments",
                description: "Comprehensive cognitive evaluations and early detection of memory disorders."
              },
              {
                icon: <Users className="w-8 h-8 text-medical-teal" />,
                title: "Dementia Care",
                description: "Specialized treatment plans and ongoing support for dementia patients and families."
              },
              {
                icon: <Shield className="w-8 h-8 text-medical-teal" />,
                title: "Geriatric Neurology",
                description: "Expert care for age-related neurological conditions and movement disorders."
              },
              {
                icon: <Calendar className="w-8 h-8 text-medical-teal" />,
                title: "Cognitive Therapy",
                description: "Evidence-based therapies to support cognitive function and daily living skills."
              },
              {
                icon: <Heart className="w-8 h-8 text-medical-teal" />,
                title: "Family Support",
                description: "Counseling and resources for caregivers and family members."
              },
              {
                icon: <Clock className="w-8 h-8 text-medical-teal" />,
                title: "Ongoing Monitoring",
                description: "Regular follow-ups and care plan adjustments as conditions evolve."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-xl text-medical-charcoal mb-3">
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
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 font-inter">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Hegde Preview */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Dr. Soumya Hegde in her office"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
                Meet Dr. Soumya Hegde
              </h2>
              <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in neurology and memory care, Dr. Hegde brings 
                compassionate expertise to every patient interaction. Her specialized training in 
                cognitive disorders and geriatric neurology ensures comprehensive, personalized care.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Board-Certified Neurologist",
                  "Fellowship in Memory Disorders",
                  "15+ Years Clinical Experience",
                  "Published Researcher"
                ].map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal" />
                    <span className="font-inter text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 font-inter">
                  Learn More About Dr. Hegde
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
              What Our Families Say
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Real stories from patients and families we've had the privilege to serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Thompson",
                relation: "Daughter of Patient",
                content: "Dr. Hegde's compassionate approach made such a difficult time more manageable. She took time to explain everything and helped us understand Dad's condition.",
                rating: 5
              },
              {
                name: "Robert Chen",
                relation: "Patient",
                content: "The memory assessment was thorough yet comfortable. Dr. Hegde and her team made me feel heard and respected throughout the entire process.",
                rating: 5
              },
              {
                name: "Sarah Williams",
                relation: "Caregiver",
                content: "The family support services have been invaluable. We finally feel like we have the tools and knowledge to provide the best care possible.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-medical-teal">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-medical-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.relation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            Schedule your consultation today and let us help you navigate your neurological health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 text-lg font-inter">
                Book Appointment Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-deep-blue px-8 py-3 text-lg font-inter">
                Contact Our Office
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
