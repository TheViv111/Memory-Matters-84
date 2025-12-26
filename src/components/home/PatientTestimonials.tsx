
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientTestimonials = () => {
  const testimonials = [
    {
      name: "Anonymous Patient Review",
      relation: "Verified Patient",
      content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members. Truly a gem! Mon-Fri 9 to 4, Sat 9 to 1 at the clinic. Need to take prior appointment.",
      rating: 5,
      verified: true,
      treatment: "Memory Assessment"
    },
    {
      name: "Sujata Rao",
      relation: "Daughter of Patient",
      content: "Dr. Hegde's compassionate approach made such a difficult time more manageable. She took time to explain everything and helped us understand Dad's condition with patience and clarity. The follow-up care has been exceptional.",
      rating: 5,
      verified: true,
      treatment: "Dementia Care"
    },
    {
      name: "Arvind K.",
      relation: "Patient",
      content: "The memory assessment was thorough yet comfortable. Dr. Hegde and her team made me feel heard and respected throughout the entire process. The treatment plan was clearly explained and very effective.",
      rating: 5,
      verified: true,
      treatment: "Cognitive Evaluation"
    },
    {
      name: "Priya Sharma",
      relation: "Family Member",
      content: "We were struggling with my mother's mood changes. Dr. Hegde not only helped with the medical treatment but also educated our entire family on how to provide better support. Life-changing experience.",
      rating: 5,
      verified: true,
      treatment: "Mood Disorders"
    },
    {
      name: "Dr. Sandeep Reddy",
      relation: "Referring Physician",
      content: "I regularly refer my elderly patients to Dr. Hegde. Her expertise in geriatric psychiatry is unmatched, and the feedback from patients and families is consistently outstanding. Highly professional.",
      rating: 5,
      verified: true,
      treatment: "Professional Referral"
    },
    {
      name: "Anonymous Family",
      relation: "Caregiver Support",
      content: "The family support services were invaluable during our journey with Alzheimer's. Dr. Hegde provided not just medical care but emotional support and practical guidance that helped us navigate this challenging time.",
      rating: 5,
      verified: true,
      treatment: "Family Support"
    }
  ];

  const stats = [
    { number: "1000+", label: "Patients Treated", icon: <Heart className="w-6 h-6 text-medical-teal" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="w-6 h-6 text-yellow-500" /> },
    { number: "98%", label: "Patient Satisfaction", icon: <CheckCircle className="w-6 h-6 text-green-500" /> },
    { number: "15+", label: "Years Experience", icon: <Quote className="w-6 h-6 text-medical-deep-blue" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-medical-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
            <span className="text-medical-teal font-inter text-sm font-medium">Patient Stories</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            What Our Families Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients and families who have experienced compassionate, expert care
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-3 p-3 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-full w-fit mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-medical-deep-blue mb-2">{stat.number}</div>
              <div className="font-inter text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`h-full border-l-4 border-medical-teal hover:shadow-2xl transition-all duration-300 hover:scale-105 ${index === 0 ? 'bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 ring-2 ring-medical-teal/20 shadow-xl' : 'bg-white shadow-lg'
              }`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-600 font-medium">Verified</span>
                    </div>
                  )}
                </div>

                <Quote className="w-8 h-8 text-medical-teal/30 mb-4" />

                <p className="font-inter text-gray-700 mb-6 italic leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-medical-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.relation}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-medical-teal/10 rounded-full">
                    <span className="text-xs text-medical-teal font-medium">{testimonial.treatment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/appointment">
            <button className="bg-white text-medical-deep-blue px-8 py-3 rounded-xl font-inter font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule Your Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
