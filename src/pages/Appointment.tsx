import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Phone, Video, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeInButton from '@/components/animations/FadeInButton';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
    insurance: '',
    previousPatient: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !appointmentType) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields including date, time, and appointment type.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-appointment', {
        body: {
          ...formData,
          date: format(selectedDate, 'yyyy-MM-dd'),
          time: selectedTime,
          type: appointmentType
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Appointment Requested Successfully! ✨",
        description: "Thank you! We'll confirm your appointment within 24 hours and send you a confirmation email.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        reason: '',
        insurance: '',
        previousPatient: '',
        medications: '',
        emergencyContact: '',
        emergencyPhone: ''
      });
      setSelectedDate(undefined);
      setSelectedTime('');
      setAppointmentType('');

    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your appointment. Please try again or call us directly.",
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Schedule Your Appointment
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-inter text-xl text-gray-700 mb-8 leading-relaxed">
              Take the first step towards better neurological health. Schedule your consultation 
              with Dr. Soumya Hegde and our compassionate care team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="py-12 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl text-medical-charcoal text-center mb-12">
              Choose Your Consultation Type
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-medical-teal" />,
                type: "in-person",
                title: "In-Person Visit",
                description: "Comprehensive evaluation in our comfortable clinic setting",
                duration: "60-90 minutes",
                features: ["Physical examination", "Complete assessment", "Family welcome"]
              },
              {
                icon: <Video className="w-8 h-8 text-medical-teal" />,
                type: "virtual",
                title: "Virtual Consultation",
                description: "Convenient online consultation from your home",
                duration: "45-60 minutes",
                features: ["Secure video call", "Document sharing", "Follow-up included"]
              }
            ].map((option, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    appointmentType === option.type ? 'ring-2 ring-medical-teal bg-medical-teal/5 shadow-lg' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setAppointmentType(option.type)}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 transform transition-transform duration-200 hover:scale-110">
                      {option.icon}
                    </div>
                    <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                      {option.title}
                    </h3>
                    <p className="font-inter text-gray-700 mb-4 text-sm">
                      {option.description}
                    </p>
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-4 h-4 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-600">{option.duration}</span>
                    </div>
                    <ul className="space-y-1">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-medical-teal" />
                          <span className="font-inter text-xs text-gray-600">{feature}</span>
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

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-medical-charcoal text-center">
                  Book Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Date and Time Selection */}
                  <ScrollReveal direction="up" delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="font-inter font-medium text-medical-charcoal mb-2 block">
                          Preferred Date *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FadeInButton
                              className={cn(
                                "w-full justify-start text-left font-normal bg-white border hover:bg-gray-50",
                                !selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                            </FadeInButton>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date() || date.getDay() === 0}
                              className="rounded-md border shadow-lg pointer-events-auto"
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label className="font-inter font-medium text-medical-charcoal mb-2 block">
                          Preferred Time *
                        </Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="hover:border-medical-teal transition-colors duration-200">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Personal Information */}
                  <ScrollReveal direction="up" delay={0.3}>
                    <div>
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="font-inter font-medium text-medical-charcoal">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="lastName" className="font-inter font-medium text-medical-charcoal">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
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
                          <Label htmlFor="phone" className="font-inter font-medium text-medical-charcoal">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="dateOfBirth" className="font-inter font-medium text-medical-charcoal">
                            Date of Birth *
                          </Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            required
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="insurance" className="font-inter font-medium text-medical-charcoal">
                            Insurance Provider
                          </Label>
                          <Input
                            id="insurance"
                            value={formData.insurance}
                            onChange={(e) => handleInputChange('insurance', e.target.value)}
                            placeholder="e.g., Blue Cross, Medicare"
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Medical Information */}
                  <ScrollReveal direction="up" delay={0.4}>
                    <div>
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                        Medical Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reason" className="font-inter font-medium text-medical-charcoal">
                            Reason for Visit *
                          </Label>
                          <Textarea
                            id="reason"
                            value={formData.reason}
                            onChange={(e) => handleInputChange('reason', e.target.value)}
                            placeholder="Please describe your symptoms or concerns..."
                            required
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="medications" className="font-inter font-medium text-medical-charcoal">
                            Current Medications
                          </Label>
                          <Textarea
                            id="medications"
                            value={formData.medications}
                            onChange={(e) => handleInputChange('medications', e.target.value)}
                            placeholder="List all medications, dosages, and frequency..."
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <Label className="font-inter font-medium text-medical-charcoal">
                            Are you a previous patient?
                          </Label>
                          <Select value={formData.previousPatient} onValueChange={(value) => handleInputChange('previousPatient', value)}>
                            <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, I've been seen before</SelectItem>
                              <SelectItem value="no">No, this is my first visit</SelectItem>
                              <SelectItem value="family">Family member was a patient</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Emergency Contact */}
                  <ScrollReveal direction="up" delay={0.5}>
                    <div>
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                        Emergency Contact
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="emergencyContact" className="font-inter font-medium text-medical-charcoal">
                            Emergency Contact Name
                          </Label>
                          <Input
                            id="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="emergencyPhone" className="font-inter font-medium text-medical-charcoal">
                            Emergency Contact Phone
                          </Label>
                          <Input
                            id="emergencyPhone"
                            type="tel"
                            value={formData.emergencyPhone}
                            onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.6}>
                    <div className="text-center pt-6">
                      <FadeInButton 
                        type="submit" 
                        loading={isSubmitting}
                        className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white px-12 py-3 text-lg font-inter shadow-lg"
                      >
                        {isSubmitting ? 'Submitting Request...' : 'Request Appointment'}
                      </FadeInButton>
                      <p className="font-inter text-sm text-gray-600 mt-4">
                        We'll contact you within 24 hours to confirm your appointment
                      </p>
                    </div>
                  </ScrollReveal>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl text-medical-charcoal mb-8">
              Need Help Scheduling?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Call Us", content: "+91 9867739963", subtitle: "Mon-Fri: 8AM-5PM" },
              { icon: Video, title: "Video Consult", content: "Available for follow-ups", subtitle: "Same day available" },
              { icon: Clock, title: "Emergency", content: "24/7 Line", subtitle: "For existing patients" }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-medical-teal mx-auto mb-4" />
                    <h3 className="font-inter font-semibold text-medical-charcoal mb-2">{item.title}</h3>
                    <p className="font-inter text-medical-deep-blue font-medium">{item.content}</p>
                    <p className="font-inter text-sm text-gray-600 mt-1">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
