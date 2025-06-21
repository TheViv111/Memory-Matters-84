
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    console.log('Contact form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactPreference: ''
    });
  };

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Contact Memory Matters
          </h1>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're here to help answer your questions and support you on your journey to better 
            neurological health. Reach out to our compassionate team today.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                <h3 className="font-playfair text-lg text-medical-charcoal mb-2">Phone</h3>
                <p className="font-inter text-medical-deep-blue font-semibold">(555) 123-4567</p>
                <p className="font-inter text-sm text-gray-600 mt-1">Main Office</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                <h3 className="font-playfair text-lg text-medical-charcoal mb-2">Email</h3>
                <p className="font-inter text-medical-deep-blue font-semibold">info@memorymattersmd.com</p>
                <p className="font-inter text-sm text-gray-600 mt-1">General Inquiries</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                <h3 className="font-playfair text-lg text-medical-charcoal mb-2">Location</h3>
                <p className="font-inter text-gray-700 text-sm">123 Healthcare Drive</p>
                <p className="font-inter text-gray-700 text-sm">Medical Center, State 12345</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                <h3 className="font-playfair text-lg text-medical-charcoal mb-2">Emergency</h3>
                <p className="font-inter text-medical-deep-blue font-semibold">(555) 123-4567</p>
                <p className="font-inter text-sm text-gray-600 mt-1">24/7 for Patients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
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
                        className="mt-1"
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
                        className="mt-1"
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
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label className="font-inter font-medium text-medical-charcoal">
                      Subject *
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="mt-1">
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
                      <SelectTrigger className="mt-1">
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
                      className="mt-1"
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full font-inter"
                  >
                    Send Message
                  </Button>
                  
                  <p className="font-inter text-sm text-gray-600 text-center">
                    We'll respond to your message within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                    <Clock className="w-6 h-6 text-medical-teal mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-gray-700">Monday - Thursday</span>
                      <span className="font-inter font-medium text-medical-charcoal">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-gray-700">Friday</span>
                      <span className="font-inter font-medium text-medical-charcoal">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-gray-700">Saturday</span>
                      <span className="font-inter font-medium text-medical-charcoal">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-gray-700">Sunday</span>
                      <span className="font-inter font-medium text-red-600">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-inter text-sm text-medical-teal font-medium">
                        Emergency calls accepted 24/7 for existing patients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location & Parking */}
              <Card>
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
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-700">Free parking available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Bus className="w-5 h-5 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-700">Public transit accessible</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Accessibility className="w-5 h-5 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-700">Wheelchair accessible</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Information */}
              <Card>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
              Find Our Clinic
            </h2>
            <p className="font-inter text-gray-600">
              Located in the heart of the Medical Center district with easy access and ample parking
            </p>
          </div>
          
          {/* Placeholder for Google Maps */}
          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-medical-teal mx-auto mb-4" />
                <p className="font-inter text-gray-600">Interactive Google Maps</p>
                <p className="font-inter text-sm text-gray-500">
                  123 Healthcare Drive, Medical Center, State 12345
                </p>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-6">
            <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white font-inter">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* HIPAA Notice */}
      <section className="py-12 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-medical-teal mx-auto mb-4" />
          <h3 className="font-playfair text-2xl mb-4">Privacy & Security Notice</h3>
          <p className="font-inter text-gray-200 leading-relaxed">
            Your privacy is important to us. All communications and medical information are handled 
            in accordance with HIPAA regulations and our strict privacy policies. Please do not 
            include sensitive medical information in email communications.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
