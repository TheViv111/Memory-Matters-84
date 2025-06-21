
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Bus,
  Accessibility,
  Shield
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeInButton from '@/components/animations/FadeInButton';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactPreference: ''
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Contact Memory Matters
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're here to help answer your questions and support you on your journey to better 
              neurological health. Reach out to our compassionate team today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Phone, title: "Phone", content: "(555) 123-4567", subtitle: "Main Office" },
              { icon: Mail, title: "Email", content: "info@memorymattersmd.com", subtitle: "General Inquiries" },
              { icon: MapPin, title: "Location", content: "123 Healthcare Drive", subtitle: "Medical Center, State 12345" },
              { icon: Shield, title: "Emergency", content: "(555) 123-4567", subtitle: "24/7 for Patients" }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="transform transition-transform duration-200 hover:scale-110">
                      <item.icon className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                    </div>
                    <h3 className="font-playfair text-lg text-medical-charcoal mb-2">{item.title}</h3>
                    <p className="font-inter text-medical-deep-blue font-semibold">{item.content}</p>
                    <p className="font-inter text-sm text-gray-600 mt-1">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.1}>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-medical-charcoal">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-inter font-medium text-medical-charcoal">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="font-inter font-medium text-medical-charcoal">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-inter font-medium text-medical-charcoal">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <Label className="font-inter font-medium text-medical-charcoal">
                        Subject *
                      </Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Schedule Appointment</SelectItem>
                          <SelectItem value="insurance">Insurance Questions</SelectItem>
                          <SelectItem value="records">Medical Records</SelectItem>
                          <SelectItem value="services">Services Information</SelectItem>
                          <SelectItem value="billing">Billing Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="font-inter font-medium text-medical-charcoal">
                        Preferred Contact Method
                      </Label>
                      <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange('contactPreference', value)}>
                        <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
                          <SelectValue placeholder="How would you like us to respond?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="either">Either Email or Phone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="font-inter font-medium text-medical-charcoal">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your question or concern..."
                        required
                        className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                        rows={5}
                      />
                    </div>
                    
                    <FadeInButton 
                      type="submit" 
                      loading={isSubmitting}
                      className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full font-inter shadow-lg"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </FadeInButton>
                    
                    <p className="font-inter text-sm text-gray-600 text-center">
                      We'll respond to your message within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                      <Clock className="w-6 h-6 text-medical-teal mr-2" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Thursday", hours: "8:00 AM - 5:00 PM" },
                        { day: "Friday", hours: "8:00 AM - 4:00 PM" },
                        { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
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
                          Emergency calls accepted 24/7 for existing patients
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Location & Parking */}
              <ScrollReveal direction="right" delay={0.3}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                      <MapPin className="w-6 h-6 text-medical-teal mr-2" />
                      Location & Parking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-inter font-medium text-medical-charcoal mb-1">Memory Matters Clinic</p>
                        <p className="font-inter text-gray-700">123 Healthcare Drive</p>
                        <p className="font-inter text-gray-700">Medical Center, State 12345</p>
                      </div>
                      
                      <div className="space-y-2">
                        {[
                          { icon: Car, text: "Free parking available" },
                          { icon: Bus, text: "Public transit accessible" },
                          { icon: Accessibility, text: "Wheelchair accessible" }
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
                <Card className="hover:shadow-lg transition-shadow duration-300">
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
                        <li>• Medicare and Medicaid</li>
                        <li>• Blue Cross Blue Shield</li>
                        <li>• Aetna, Cigna, and UnitedHealth</li>
                        <li>• Most major insurance carriers</li>
                      </ul>
                      <div className="pt-2 border-t">
                        <p className="font-inter text-sm text-medical-teal">
                          Call us to verify your specific insurance coverage
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
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
                Find Our Clinic
              </h2>
              <p className="font-inter text-gray-600">
                Located in the heart of the Medical Center district with easy access and ample parking
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-medical-teal mx-auto mb-4 animate-pulse" />
                  <p className="font-inter text-gray-600">Interactive Google Maps</p>
                  <p className="font-inter text-sm text-gray-500">
                    123 Healthcare Drive, Medical Center, State 12345
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mt-6">
              <FadeInButton className="bg-medical-teal hover:bg-medical-teal/90 text-white font-inter shadow-lg">
                Get Directions
              </FadeInButton>
            </div>
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
              in accordance with HIPAA regulations and our strict privacy policies. Please do not 
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
