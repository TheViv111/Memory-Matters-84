
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PersonalInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    previousPatient: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const PersonalInfoForm = ({ formData, handleInputChange }: PersonalInfoFormProps) => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/30">
      <CardHeader>
        <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-medical-teal to-medical-deep-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
            1
          </div>
          Personal Information
        </CardTitle>
        <p className="text-sm text-gray-600 font-inter ml-11">
          Please provide accurate information for appointment confirmation
        </p>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="font-inter font-medium text-medical-charcoal">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="font-inter font-medium text-medical-charcoal">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
              placeholder="Enter your last name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-inter font-medium text-medical-charcoal">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-inter font-medium text-medical-charcoal">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="font-inter font-medium text-medical-charcoal">
              Date of Birth *
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
            />
          </div>


          <div className="md:col-span-2 space-y-2">
            <Label className="font-inter font-medium text-medical-charcoal">
              Are you a previous patient? *
            </Label>
            <Select value={formData.previousPatient} onValueChange={(value) => handleInputChange('previousPatient', value)}>
              <SelectTrigger className="hover:border-medical-teal transition-colors duration-200 bg-white">
                <SelectValue placeholder="Please select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, I've been seen before</SelectItem>
                <SelectItem value="no">No, this is my first visit</SelectItem>
                <SelectItem value="family">Family member was a patient</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
