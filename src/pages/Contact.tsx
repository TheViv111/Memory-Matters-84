
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  MapPin,
  Car, 
  Bus,
  Accessibility,
  Shield
} from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import GoogleMap from '@/components/GoogleMap';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5">
      <Navigation />
      <ContactHero />
      <ContactInfo />

      {/* Enhanced Contact Form & Office Hours */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-medical-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            {/* Enhanced Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
                      <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-medical-teal" />
                      </div>
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Saturday", hours: "9:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed", closed: true }
                      ].map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 p-3 rounded-lg transition-all duration-300">
                          <span className="font-inter text-gray-700">{schedule.day}</span>
                          <span className={`font-inter font-medium ${schedule.closed ? 'text-red-600' : 'text-medical-charcoal'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-inter text-sm text-medical-teal font-medium mb-2">
                          Prior appointment required
                        </p>
                        <p className="font-inter text-sm text-medical-deep-blue font-medium">
                          Emergency calls accepted 24/7 for existing patients
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Location & Parking */}
              <ScrollReveal direction="right" delay={0.3}>
                <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
                      <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-medical-teal" />
                      </div>
                      Location & Accessibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gradient-to-r from-medical-teal/5 to-medical-orange/5 rounded-lg">
                        <p className="font-inter font-medium text-medical-charcoal mb-1">Dr. Soumya Hegde : Memory Matters</p>
                        <p className="font-inter text-gray-700">4, Wind Tunnel Rd, Murugeshpalya</p>
                        <p className="font-inter text-gray-700">Kaveri Nagar, Bengaluru, Karnataka 560017</p>
                      </div>
                      
                      <div className="space-y-2">
                        {[
                          { icon: Car, text: "On-site parking available" },
                          { icon: Bus, text: "Public transit accessible" },
                          { icon: Accessibility, text: "Wheelchair accessible facility" }
                        ].map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-3 hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 p-3 rounded-lg transition-all duration-300 group/item">
                            <div className="bg-medical-teal/10 p-2 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                              <amenity.icon className="w-5 h-5 text-medical-teal" />
                            </div>
                            <span className="font-inter text-sm text-gray-700">{amenity.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Insurance Information */}
              <ScrollReveal direction="right" delay={0.4}>
                <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
                      <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-medical-teal" />
                      </div>
                      Insurance & Billing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-inter text-gray-700 text-sm">
                        We accept most major insurance plans including:
                      </p>
                      <ul className="font-inter text-sm text-gray-700 space-y-2 ml-2">
                        {[
                          "Cashless and reimbursement options",
                          "Corporate insurance plans",
                          "Government health schemes",
                          "Private insurance providers"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center hover:text-medical-deep-blue transition-colors duration-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-medical-teal to-medical-orange rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-gray-200">
                        <p className="font-inter text-sm text-medical-teal bg-gradient-to-r from-medical-teal/5 to-medical-orange/5 p-3 rounded-lg">
                          Call us at 89044 18172 to verify your specific insurance coverage
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/3 to-medical-orange/3" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
                Find Our Clinic
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-4"></div>
              <p className="font-inter text-gray-600">
                Located in Murugeshpalya, Bengaluru with easy access via Wind Tunnel Road
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border-4 border-white/50 backdrop-blur-sm">
              <GoogleMap />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced HIPAA Notice */}
      <section className="py-12 bg-gradient-to-br from-medical-deep-blue to-medical-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Shield className="w-12 h-12 text-medical-orange" />
            </div>
            <h3 className="font-playfair text-2xl mb-4">Privacy & Security Notice</h3>
            <p className="font-inter text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Your privacy is important to us. All communications and medical information are handled 
              with strict confidentiality and in accordance with medical privacy regulations. Please do not 
              include sensitive medical information in email communications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
