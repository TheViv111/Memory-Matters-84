
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    contactPreference: string;
  };
  onFieldChange: (field: string, value: string) => void;
}

const ContactFormFields = ({ formData, onFieldChange }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="font-inter font-medium text-medical-charcoal">
            Full Name *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onFieldChange('name', e.target.value)}
            required
            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
            placeholder="Enter your full name"
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
            onChange={(e) => onFieldChange('phone', e.target.value)}
            className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
            placeholder="Enter your phone number"
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
          onChange={(e) => onFieldChange('email', e.target.value)}
          required
          className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <Label className="font-inter font-medium text-medical-charcoal">
          Subject *
        </Label>
        <Select value={formData.subject} onValueChange={(value) => onFieldChange('subject', value)}>
          <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl z-50">
            <SelectItem value="records">Medical Records</SelectItem>
            <SelectItem value="services">Services Information</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="font-inter font-medium text-medical-charcoal">
          Preferred Contact Method
        </Label>
        <Select value={formData.contactPreference} onValueChange={(value) => onFieldChange('contactPreference', value)}>
          <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
            <SelectValue placeholder="How would you like us to respond?" />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl z-50">
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
          onChange={(e) => onFieldChange('message', e.target.value)}
          placeholder="Please describe your question or concern..."
          required
          className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
          rows={5}
        />
      </div>
    </>
  );
};

export default ContactFormFields;
