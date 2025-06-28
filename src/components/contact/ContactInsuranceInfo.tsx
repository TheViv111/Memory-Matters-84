
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactInsuranceInfo = () => {
  return (
    <ScrollReveal direction="right" delay={0.4}>
      <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
        <CardHeader className="pb-4">
          <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
            <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-medical-teal" />
            </div>
            Insurance & Billing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-inter text-gray-700 text-sm">
              We accept most major insurance plans including:
            </p>
            <ul className="font-inter text-sm text-gray-700 space-y-2 ml-2">
              {[
                "Cashless and reimbursement options",
                "Corporate insurance plans",
                "Government health schemes",
                "Private insurance providers"
              ].map((item, index) => (
                <li key={index} className="flex items-center hover:text-medical-deep-blue transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-medical-teal to-medical-orange rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-gray-200">
              <p className="font-inter text-sm text-medical-teal bg-gradient-to-r from-medical-teal/5 to-medical-orange/5 p-3 rounded-lg">
                Call us at 89044 18172 to verify your specific insurance coverage
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default ContactInsuranceInfo;
