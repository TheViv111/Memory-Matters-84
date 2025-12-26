
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AdvancedBookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Generate available dates (next 30 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    let current = new Date();
    let count = 0;

    while (count < 30) {
      if (current.getDay() !== 0) { // Exclude Sundays
        dates.push(new Date(current));
        count++;
      }
      current = addDays(current, 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  // Generate time slots
  const timeSlots = [
    { time: '9:00 AM', available: true, type: 'morning' },
    { time: '9:45 AM', available: true, type: 'morning' },
    { time: '10:30 AM', available: false, type: 'morning' },
    { time: '11:15 AM', available: true, type: 'morning' },
    { time: '12:00 PM', available: true, type: 'morning' },
    { time: '1:00 PM', available: true, type: 'afternoon' },
    { time: '1:45 PM', available: true, type: 'afternoon' },
    { time: '2:30 PM', available: false, type: 'afternoon' },
    { time: '3:15 PM', available: true, type: 'afternoon' },
    { time: '4:00 PM', available: true, type: 'afternoon' }
  ];

  const appointmentTypes = [
    {
      id: 'initial',
      title: 'Initial Consultation',
      duration: '90 minutes',
      description: 'Comprehensive first visit with detailed evaluation',
      price: 'Standard Consultation Fee'
    },
    {
      id: 'followup',
      title: 'Follow-up Visit',
      duration: '45 minutes',
      description: 'Regular check-up and treatment adjustment',
      price: 'Standard Follow-up Fee'
    },
    {
      id: 'assessment',
      title: 'Memory Assessment',
      duration: '2-3 hours',
      description: 'Detailed cognitive and neuropsychological testing',
      price: 'Specialized Assessment Fee'
    },
    {
      id: 'family',
      title: 'Family Consultation',
      duration: '60 minutes',
      description: 'Family meeting to discuss care planning',
      price: 'Standard Consultation Fee'
    }
  ];

  const steps = [
    { number: 1, title: 'Select Service', icon: <FileText className="w-5 h-5" /> },
    { number: 2, title: 'Choose Date & Time', icon: <Calendar className="w-5 h-5" /> },
    { number: 3, title: 'Personal Information', icon: <User className="w-5 h-5" /> },
    { number: 4, title: 'Confirmation', icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !appointmentType) {
      toast({
        title: "Incomplete Information",
        description: "Please complete all steps before submitting.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.reason) {
      toast({
        title: "Missing Required Information",
        description: "Please fill in all required fields.",
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
      setSelectedDate(null);
      setSelectedTime('');
      setAppointmentType('');
      setCurrentStep(1);

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-4xl text-medical-charcoal mb-6">
          Advanced Booking System
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
        <p className="font-inter text-xl text-gray-600">
          Schedule your appointment with our enhanced booking experience
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`flex items-center space-x-2 ${currentStep >= step.number
                ? 'text-medical-teal'
                : 'text-gray-400'
                }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.number
                  ? 'bg-medical-teal text-white'
                  : 'bg-gray-200 text-gray-400'
                  }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                <span className="hidden md:block font-inter text-sm font-medium">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 mx-4 ${currentStep > step.number ? 'bg-medical-teal' : 'bg-gray-200'
                  }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-8">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-medical-charcoal text-center">
                Select Your Appointment Type
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {appointmentTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => {
                      setAppointmentType(type.id);
                    }}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${appointmentType === type.id
                      ? 'border-medical-teal bg-medical-teal/5'
                      : 'border-gray-200 hover:border-medical-teal/50'
                      }`}
                  >
                    <h3 className="font-playfair text-xl font-semibold text-medical-charcoal mb-2">
                      {type.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-4 h-4 text-medical-teal" />
                      <span className="font-inter text-sm text-gray-600">{type.duration}</span>
                    </div>
                    <p className="font-inter text-gray-700 mb-4">{type.description}</p>
                    <div className="inline-block px-3 py-1 bg-medical-deep-blue/10 text-medical-deep-blue font-inter text-sm font-medium rounded-full">
                      {type.price}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Date Selection */}
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-medical-teal" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-inter text-sm font-medium text-gray-600 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {availableDates.slice(0, 21).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 text-sm font-inter rounded-lg transition-colors ${selectedDate && isSameDay(date, selectedDate)
                        ? 'bg-medical-teal text-white'
                        : 'hover:bg-medical-teal/10 text-gray-700'
                        }`}
                    >
                      {format(date, 'd')}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-medical-teal" />
                  Available Times
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {selectedDate ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-inter font-medium text-medical-charcoal mb-3">Morning</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.filter(slot => slot.type === 'morning').map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => {
                              if (slot.available) {
                                setSelectedTime(slot.time);
                              }
                            }}
                            disabled={!slot.available}
                            className={`p-3 text-sm font-inter rounded-lg transition-colors ${selectedTime === slot.time
                              ? 'bg-medical-teal text-white'
                              : slot.available
                                ? 'bg-gray-50 hover:bg-medical-teal/10 text-gray-700'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                          >
                            {slot.time}
                            {!slot.available && (
                              <div className="text-xs mt-1">Unavailable</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-inter font-medium text-medical-charcoal mb-3">Afternoon</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.filter(slot => slot.type === 'afternoon').map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => {
                              if (slot.available) {
                                setSelectedTime(slot.time);
                              }
                            }}
                            disabled={!slot.available}
                            className={`p-3 text-sm font-inter rounded-lg transition-colors ${selectedTime === slot.time
                              ? 'bg-medical-teal text-white'
                              : slot.available
                                ? 'bg-gray-50 hover:bg-medical-teal/10 text-gray-700'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                          >
                            {slot.time}
                            {!slot.available && (
                              <div className="text-xs mt-1">Unavailable</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="font-inter">Please select a date first</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Personal Information */}
        {currentStep === 3 && (
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-medical-charcoal text-center">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    First Name *
                  </Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Last Name *
                  </Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Phone Number *
                  </Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Date of Birth *
                  </Label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    required
                  />
                </div>

              </div>

              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Reason for Visit *
                  </Label>
                  <Textarea
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors min-h-[100px]"
                    placeholder="Please describe your primary concerns or symptoms..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter font-medium text-medical-charcoal">
                    Current Medications
                  </Label>
                  <Textarea
                    value={formData.medications}
                    onChange={(e) => handleInputChange('medications', e.target.value)}
                    className="border-2 hover:border-medical-teal transition-colors"
                    placeholder="List all current medications, dosages, and frequency..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="font-inter font-medium text-medical-charcoal">
                      Emergency Contact Name
                    </Label>
                    <Input
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      className="border-2 hover:border-medical-teal transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-inter font-medium text-medical-charcoal">
                      Emergency Contact Phone
                    </Label>
                    <Input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      className="border-2 hover:border-medical-teal transition-colors"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-medical-charcoal text-center">
                Confirm Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Appointment Summary */}
                <div className="bg-gradient-to-r from-medical-teal/10 to-medical-orange/10 p-6 rounded-xl">
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-4">
                    Appointment Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-inter text-sm text-gray-600">Service</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {appointmentTypes.find(t => t.id === appointmentType)?.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Duration</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {appointmentTypes.find(t => t.id === appointmentType)?.duration}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Date</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {selectedDate ? format(selectedDate, 'EEEE, MMMM do, yyyy') : ''}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Time</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {selectedTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-4">
                    Patient Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-inter text-sm text-gray-600">Name</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {formData.firstName} {formData.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Email</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {formData.email}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Phone</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {formData.phone}
                      </p>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-gray-600">Date of Birth</p>
                      <p className="font-inter font-medium text-medical-charcoal">
                        {formData.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-12 py-4 text-lg font-inter shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 rounded-xl"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Confirm Appointment'}
                  </Button>
                  <p className="font-inter text-sm text-gray-600 mt-4">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
          >
            Previous Step
          </Button>

          <div className="text-center">
            <p className="font-inter text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </p>
          </div>

          {currentStep < 4 && (
            <Button
              onClick={() => {
                if (currentStep === 1 && !appointmentType) {
                  toast({
                    title: "Selection Required",
                    description: "Please select an appointment type to continue.",
                    variant: "destructive"
                  });
                  return;
                }
                if (currentStep === 2 && (!selectedDate || !selectedTime)) {
                  toast({
                    title: "Selection Required",
                    description: "Please select both date and time to continue.",
                    variant: "destructive"
                  });
                  return;
                }
                if (currentStep === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.reason)) {
                  toast({
                    title: "Required Fields Missing",
                    description: "Please fill in all required fields to continue.",
                    variant: "destructive"
                  });
                  return;
                }
                setCurrentStep(currentStep + 1);
              }}
              className="bg-medical-teal hover:bg-medical-teal/90 text-white"
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedBookingSystem;
