import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Phone, Video, Clock, MapPin, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import FadeInButton from '@/components/animations/FadeInButton';
import AppointmentHero from '@/components/appointment/AppointmentHero';
import AppointmentTypes from '@/components/appointment/AppointmentTypes';
import BookingForm from '@/components/appointment/BookingForm';
import PersonalInfoForm from '@/components/appointment/PersonalInfoForm';
import MedicalInfoForm from '@/components/appointment/MedicalInfoForm';
import EmergencyContactForm from '@/components/appointment/EmergencyContactForm';
import AdvancedBookingSystem from '@/components/appointment/AdvancedBookingSystem';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [useAdvancedBooking, setUseAdvancedBooking] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
    previousPatient: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

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

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.reason) {
      toast({
        title: "Missing Required Information",
        description: "Please fill in all required personal and medical information fields.",
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
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/3 to-medical-orange/3 pointer-events-none" />

      <Navigation />

      <AppointmentHero />

      <AppointmentTypes
        appointmentType={appointmentType}
        setAppointmentType={setAppointmentType}
      />

      {/* Booking System Toggle */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setUseAdvancedBooking(false)}
              className={`px-6 py-3 rounded-lg font-inter transition-all duration-300 ${!useAdvancedBooking
                ? 'bg-medical-teal text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Standard Booking
            </button>
            <button
              onClick={() => setUseAdvancedBooking(true)}
              className={`px-6 py-3 rounded-lg font-inter transition-all duration-300 ${useAdvancedBooking
                ? 'bg-medical-teal text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Advanced Booking System
            </button>
          </div>
        </div>
      </section>

      {/* Conditional Booking System */}
      {useAdvancedBooking ? (
        <AdvancedBookingSystem />
      ) : (
        <>
          {/* Enhanced Main Booking Form */}
          <section className="py-16 bg-white/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-medical-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                <BookingForm
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />

                <PersonalInfoForm
                  formData={{
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    dateOfBirth: formData.dateOfBirth,
                    previousPatient: formData.previousPatient
                  }}
                  handleInputChange={handleInputChange}
                />

                <MedicalInfoForm
                  formData={{
                    reason: formData.reason,
                    medications: formData.medications
                  }}
                  handleInputChange={handleInputChange}
                />

                <EmergencyContactForm
                  formData={{
                    emergencyContact: formData.emergencyContact,
                    emergencyPhone: formData.emergencyPhone
                  }}
                  handleInputChange={handleInputChange}
                />

                <div className="text-center pt-6">
                  <FadeInButton
                    type="submit"
                    loading={isSubmitting}
                    className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-12 py-4 text-lg font-inter shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 rounded-xl border-2 border-white/50 backdrop-blur-sm"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Request Appointment'}
                  </FadeInButton>
                  <p className="font-inter text-sm text-gray-600 mt-4">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </div>
              </form>
            </div>
          </section>
        </>
      )}

      {/* Enhanced Contact Information */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-orange/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-playfair text-3xl text-medical-charcoal mb-8">
            Need Help Scheduling?
          </h2>
          <p className="font-inter text-gray-600 mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help you with any questions about scheduling or preparing for your visit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 89044 18172",
                subtitle: "Mon-Sat: 9AM-4PM",
                action: "Call Now"
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "memorymattersindia@gmail.com",
                subtitle: "Response within 24h",
                action: "Send Email"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "Kaveri Nagar",
                subtitle: "Murgesh Pallya, B'luru",
                action: "Get Directions"
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-white/90 backdrop-blur-md border-0 shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2 group-hover:text-medical-deep-blue transition-colors duration-300">{item.title}</h3>
                  <p className="font-inter text-medical-deep-blue font-medium mb-1">{item.content}</p>
                  <p className="font-inter text-sm text-gray-600 mb-3">{item.subtitle}</p>
                  <button className="font-inter text-sm text-medical-teal hover:text-medical-deep-blue transition-colors duration-200 font-medium bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 px-4 py-2 rounded-lg hover:from-medical-teal/20 hover:to-medical-orange/20">
                    {item.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default Appointment;
