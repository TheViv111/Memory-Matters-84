
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
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ContactHero />
      <ContactInfo />

      {/* Contact Form & Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                      <Clock className="w-6 h-6 text-medical-teal mr-2" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Saturday", hours: "9:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed", closed: true }
                      ].map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                          <span className="font-inter text-gray-700">{schedule.day}</span>
                          <span className={`font-inter font-medium ${schedule.closed ? 'text-red-600' : 'text-medical-charcoal'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                      <div className="pt-2 border-t">
                        <p className="font-inter text-sm text-medical-teal font-medium">
                          Prior appointment required
                        </p>
                        <p className="font-inter text-sm text-medical-deep-blue font-medium mt-1">
                          Emergency calls accepted 24/7 for existing patients
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Location & Parking */}
              <ScrollReveal direction="right" delay={0.3}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                      <MapPin className="w-6 h-6 text-medical-teal mr-2" />
                      Location & Accessibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
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
                          <div key={index} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <amenity.icon className="w-5 h-5 text-medical-teal" />
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
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                      <Shield className="w-6 h-6 text-medical-teal mr-2" />
                      Insurance & Billing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-inter text-gray-700 text-sm">
                        We accept most major insurance plans including:
                      </p>
                      <ul className="font-inter text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Cashless and reimbursement options</li>
                        <li>• Corporate insurance plans</li>
                        <li>• Government health schemes</li>
                        <li>• Private insurance providers</li>
                      </ul>
                      <div className="pt-2 border-t">
                        <p className="font-inter text-sm text-medical-teal">
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

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
                Find Our Clinic
              </h2>
              <p className="font-inter text-gray-600">
                Located in Murugeshpalya, Bengaluru with easy access via Wind Tunnel Road
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <GoogleMap />
          </ScrollReveal>
        </div>
      </section>

      {/* HIPAA Notice */}
      <section className="py-12 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <Shield className="w-12 h-12 text-medical-teal mx-auto mb-4" />
            <h3 className="font-playfair text-2xl mb-4">Privacy & Security Notice</h3>
            <p className="font-inter text-gray-200 leading-relaxed">
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
