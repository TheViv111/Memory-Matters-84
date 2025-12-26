
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface MedicalInfoFormProps {
  formData: {
    reason: string;
    medications: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const MedicalInfoForm = ({ formData, handleInputChange }: MedicalInfoFormProps) => {
  return (
    <ScrollReveal direction="up" delay={0.4}>
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50/30">
        <CardHeader>
          <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-medical-teal to-medical-deep-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              2
            </div>
            Medical Information
          </CardTitle>
          <p className="text-sm text-gray-600 font-inter ml-11">
            Help us prepare for your visit with relevant medical details
          </p>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="reason" className="font-inter font-medium text-medical-charcoal">
              Reason for Visit *
            </Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange('reason', e.target.value)}
              placeholder="Please describe your symptoms, concerns, or the reason for your visit. Be as detailed as possible to help us prepare for your consultation."
              required
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white min-h-[100px] resize-none"
              rows={4}
            />
            <p className="text-xs text-gray-500 font-inter">
              Include symptoms, duration, and any triggers or patterns you've noticed
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medications" className="font-inter font-medium text-medical-charcoal">
              Current Medications & Supplements
            </Label>
            <Textarea
              id="medications"
              value={formData.medications}
              onChange={(e) => handleInputChange('medications', e.target.value)}
              placeholder="List all medications, vitamins, and supplements you're currently taking. Include dosages and frequency if known. Example: Aspirin 81mg daily, Vitamin D 1000IU daily"
              className="hover:border-medical-teal focus:border-medical-teal transition-colors duration-200 bg-white min-h-[80px] resize-none"
              rows={3}
            />
            <p className="text-xs text-gray-500 font-inter">
              Include prescription medications, over-the-counter drugs, vitamins, and herbal supplements
            </p>
          </div>

          <div className="bg-medical-teal/5 border border-medical-teal/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-inter font-medium text-medical-charcoal text-sm mb-1">
                  Preparing for Your Visit
                </h4>
                <p className="font-inter text-xs text-gray-600 leading-relaxed">
                  Please bring a list of your current medications and any recent test results.
                  If this is a follow-up visit, bring any symptom diaries or notes you've been keeping.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default MedicalInfoForm;
