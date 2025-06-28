
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const EmergencyResources = () => {
  const emergencyContacts = [
    {
      title: "Crisis Hotline",
      number: "988",
      description: "24/7 mental health crisis support",
    },
    {
      title: "Emergency Services",
      number: "911",
      description: "For immediate medical emergencies",
    },
    {
      title: "Alzheimer's Association",
      number: "1-800-272-3900",
      description: "24/7 helpline for families and caregivers",
    },
    {
      title: "Dr. Hegde Emergency Line",
      number: "+91 89044 18172",
      description: "For urgent medical concerns related to memory care",
    }
  ];

  return (
    <section className="py-16 bg-medical-orange/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-charcoal mb-4">
            Emergency Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Important contact information for emergency situations and urgent support needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-medical-orange">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-medical-orange mr-3" />
                  <h3 className="text-xl font-semibold text-medical-charcoal">
                    {contact.title}
                  </h3>
                </div>
                <div className="mb-3">
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-2xl font-bold text-medical-deep-blue hover:text-medical-orange transition-colors"
                  >
                    {contact.number}
                  </a>
                </div>
                <p className="text-gray-600">
                  {contact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-medical-orange/10 border border-medical-orange/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-medical-charcoal mb-2">
              When to Seek Emergency Care
            </h3>
            <p className="text-gray-600">
              Call 911 immediately if you notice sudden confusion, severe agitation, signs of stroke, 
              difficulty breathing, chest pain, or any other life-threatening symptoms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;
