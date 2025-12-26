import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Video, Clock, CheckCircle } from 'lucide-react';

interface AppointmentTypesProps {
  appointmentType: string;
  setAppointmentType: (type: string) => void;
}

const AppointmentTypes = ({ appointmentType, setAppointmentType }: AppointmentTypesProps) => {
  const appointmentOptions = [
    {
      icon: <MapPin className="w-8 h-8 text-medical-teal" />,
      type: "in-person",
      title: "In-Person Visit",
      description: "Comprehensive evaluation in our comfortable clinic setting",
      duration: "60-90 minutes",
      features: ["Complete physical examination", "Comprehensive cognitive assessment", "Family members welcome", "Immediate results discussion"],
      popular: true
    },
    {
      icon: <Video className="w-8 h-8 text-medical-teal" />,
      type: "virtual",
      title: "Virtual Consultation",
      description: "Convenient online consultation from your home",
      duration: "45-60 minutes",
      features: ["Secure HD video call", "Document sharing capability", "Follow-up care included", "Perfect for routine visits"],
      popular: false
    }
  ];

  return (
    <section className="py-12 bg-medical-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl text-medical-charcoal mb-4">
            Choose Your Consultation Type
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Select the consultation format that works best for your needs and schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appointmentOptions.map((option, index) => (
            <Card
              key={index}
              className={`cursor - pointer transition - all duration - 300 hover: shadow - xl hover: scale - 105 relative ${appointmentType === option.type
                  ? 'ring-2 ring-medical-teal bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 shadow-lg'
                  : 'hover:shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-medical-teal/5'
                } `}
              onClick={() => setAppointmentType(option.type)}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-medical-teal to-medical-deep-blue text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-6">
                <div className="mb-4 transform transition-transform duration-200 hover:scale-110">
                  {option.icon}
                </div>

                <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                  {option.title}
                </h3>

                <p className="font-inter text-gray-700 mb-4 text-sm leading-relaxed">
                  {option.description}
                </p>

                <div className="flex items-center space-x-2 mb-4 p-2 bg-medical-teal/10 rounded-lg">
                  <Clock className="w-4 h-4 text-medical-teal" />
                  <span className="font-inter text-sm font-medium text-medical-charcoal">{option.duration}</span>
                </div>

                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-medical-teal mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-xs text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {appointmentType === option.type && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-medical-teal/20 to-medical-deep-blue/20 rounded-lg border border-medical-teal/30">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-medical-teal" />
                      <span className="font-inter text-sm font-medium text-medical-charcoal">
                        {option.title} Selected
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentTypes;
