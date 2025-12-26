
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface EmergencyContactFormProps {
  formData: {
    emergencyContact: string;
    emergencyPhone: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const EmergencyContactForm = ({ formData, handleInputChange }: EmergencyContactFormProps) => {
  return (
    <ScrollReveal direction="up" delay={0.5}>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/30">
        <CardHeader>
          <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-medical-teal to-medical-deep-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              3
            </div>
            Emergency Contact
          </CardTitle>
          <p className="text-sm text-gray-600 font-inter ml-11">
            Optional but recommended for your safety and peace of mind
          </p>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyContact" className="font-inter font-medium text-medical-charcoal">
                Emergency Contact Name
              </Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
                placeholder="Full name of emergency contact"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyPhone" className="font-inter font-medium text-medical-charcoal">
                Emergency Contact Phone
              </Label>
              <Input
                id="emergencyPhone"
                type="tel"
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-inter text-xs text-blue-800 leading-relaxed">
              <strong>Note:</strong> This information will only be used in case of an emergency during your visit.
              We respect your privacy and follow strict professional guidelines for protecting your personal information.
            </p>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default EmergencyContactForm;
