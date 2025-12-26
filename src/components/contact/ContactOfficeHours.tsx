
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const ContactOfficeHours = () => {
  return (
    <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-lg group">
      <CardHeader className="pb-4">
        <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center group-hover:text-medical-deep-blue transition-colors duration-300">
          <div className="bg-gradient-to-br from-medical-teal/10 to-medical-orange/10 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-6 h-6 text-medical-teal" />
          </div>
          Office Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[
            { day: "Monday - Friday", hours: "9:00 AM - 4:00 PM" },
            { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
            { day: "Sunday", hours: "Closed", closed: true }
          ].map((schedule, index) => (
            <div key={index} className="flex justify-between items-center hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 p-3 rounded-lg transition-all duration-300">
              <span className="font-inter text-gray-700">{schedule.day}</span>
              <span className={`font-inter font-medium ${schedule.closed ? 'text-red-600' : 'text-medical-charcoal'}`}>
                {schedule.hours}
              </span>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <p className="font-inter text-sm text-medical-deep-blue font-medium">
              Emergency calls accepted 24/7 for existing patients
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactOfficeHours;
