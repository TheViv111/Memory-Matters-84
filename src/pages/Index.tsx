
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
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-deep-blue/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
                <span className="text-medical-teal font-inter text-sm font-medium">Board-Certified Neurologist</span>
              </div>
              
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
                  <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 text-lg font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-8 py-3 text-lg font-inter transition-all duration-300 hover:scale-105">
                    Meet Dr. Hegde
                  </Button>
                </Link>
              </div>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-l-4 border-medical-teal hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Phone className="text-medical-deep-blue" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">24/7 Emergency Line</p>
                    <p className="font-semibold text-medical-deep-blue">89044 18172</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-deep-blue/10 to-medical-teal/10 rounded-3xl transform -rotate-3 hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/doctor-image.jpg" 
                  alt="Dr. Soumya Hegde - Neurologist and Memory Care Specialist"
                  className="w-full h-96 object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
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
                description: "Comprehensive cognitive evaluations and early detection of memory disorders using advanced neuropsychological testing."
              },
              {
                icon: <Users className="w-8 h-8 text-medical-teal" />,
                title: "Dementia Care",
                description: "Specialized treatment plans and ongoing support for dementia patients and families, including Alzheimer's disease management."
              },
              {
                icon: <Shield className="w-8 h-8 text-medical-teal" />,
                title: "Movement Disorders",
                description: "Expert care for Parkinson's disease, tremors, and other movement disorders with personalized treatment approaches."
              },
              {
                icon: <Calendar className="w-8 h-8 text-medical-teal" />,
                title: "Stroke Rehabilitation",
                description: "Comprehensive stroke recovery programs and ongoing neurological rehabilitation for optimal patient outcomes."
              },
              {
                icon: <Heart className="w-8 h-8 text-medical-teal" />,
                title: "Headache Management",
                description: "Advanced treatment for migraines, tension headaches, and chronic headache conditions with preventive care strategies."
              },
              {
                icon: <Clock className="w-8 h-8 text-medical-teal" />,
                title: "Botox Therapy",
                description: "Therapeutic Botox injections for neurological conditions including chronic migraines and movement disorders."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-0">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-full w-fit">
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
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Hegde Preview */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-2xl transform rotate-2 hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/doctor-image.jpg" 
                  alt="Dr. Soumya Hegde in her office"
                  className="w-full h-96 object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-medical-teal/10 rounded-full mb-6">
                <span className="text-medical-teal font-inter text-sm font-medium">15+ Years Experience</span>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
                Meet Dr. Soumya Hegde
              </h2>
              <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in neurology and memory care, Dr. Hegde brings 
                compassionate expertise to every patient interaction. Her specialized training in 
                cognitive disorders, movement disorders, and geriatric neurology ensures comprehensive, 
                personalized care for each individual.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-medical-teal/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-medical-deep-blue">15+</div>
                  <div className="font-inter text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-medical-teal/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-medical-deep-blue">1000+</div>
                  <div className="font-inter text-sm text-gray-600">Patients Helped</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  "MD Neurology - NIMHANS, Bangalore",
                  "Fellowship in Movement Disorders",
                  "Board-Certified Neurologist",
                  "Published Researcher & Speaker"
                ].map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal" />
                    <span className="font-inter text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-8 py-3 font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                name: "Anonymous Patient Review",
                relation: "Verified Patient",
                content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members. Truly a gem! M-S 9 to 4 at the clinic. Need to take prior appointment.",
                rating: 5,
                featured: true
              },
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
              }
            ].map((testimonial, index) => (
              <Card key={index} className={`border-l-4 border-medical-teal hover:shadow-xl transition-all duration-300 hover:scale-105 ${testimonial.featured ? 'bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 ring-2 ring-medical-teal/20' : ''}`}>
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
                    {testimonial.featured && (
                      <div className="mt-2 inline-flex items-center px-2 py-1 bg-medical-teal/10 rounded-full">
                        <span className="text-xs text-medical-teal font-medium">Featured Review</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-medical-deep-blue to-medical-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90 leading-relaxed">
            Schedule your consultation today and let us help you navigate your neurological health journey 
            with compassionate, expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 text-lg font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Appointment Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-deep-blue px-8 py-3 text-lg font-inter transition-all duration-300 hover:scale-105">
                Contact Our Office
              </Button>
            </Link>
          </div>
          
          {/* Office Hours */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-medical-teal" />
              <span className="font-inter font-medium">Office Hours</span>
            </div>
            <p className="font-inter text-sm opacity-90">Monday - Saturday: 9:00 AM - 4:00 PM</p>
            <p className="font-inter text-xs opacity-75 mt-1">Prior appointment required</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
