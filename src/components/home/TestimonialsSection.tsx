
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anonymous Patient Review",
      relation: "Verified Patient",
      content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members. Truly a gem! M-S 9 to 4 at the clinic. Need to take prior appointment.",
      rating: 5,
      featured: true
    },
    {
      name: "Sarah Johnson",
      relation: "Daughter of Patient",
      content: "Dr. Hegde's compassionate approach made such a difficult time more manageable. She took time to explain everything and helped us understand Dad's condition. Her expertise in geriatric care is evident in every interaction.",
      rating: 5
    },
    {
      name: "Michael Chen",
      relation: "Patient",
      content: "The comprehensive assessment was thorough yet comfortable. Dr. Hegde and her team made me feel heard and respected throughout the entire process. I finally feel hopeful about managing my depression.",
      rating: 5
    },
    {
      name: "Elizabeth Murphy",
      relation: "Caregiver",
      content: "Dr. Hegde not only treated my mother but also provided invaluable support to our entire family. Her understanding of both the medical and emotional aspects of dementia care is exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Stories of Hope & Healing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6 rounded-full"></div>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients and families who have found renewed hope and healing through our compassionate care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`relative border-l-4 border-medical-teal hover:shadow-2xl transition-all duration-500 hover:scale-105 ${testimonial.featured ? 'bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 ring-2 ring-medical-teal/20 md:col-span-2' : 'bg-gradient-to-br from-white to-gray-50/50'}`}>
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-medical-teal/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="font-inter text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-medical-charcoal text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.relation}</p>
                  </div>
                  {testimonial.featured && (
                    <div className="inline-flex items-center px-3 py-1 bg-medical-teal/10 rounded-full border border-medical-teal/30">
                      <span className="text-xs text-medical-teal font-medium">Featured Review</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
