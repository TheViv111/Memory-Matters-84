
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const PatientTestimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  const testimonials = [
    {
      content: "Good morning Dear Dr Soumya\nWanted to share with you the news that am.joining Nightingale medical trust in Dec\nYou deserve all the credit dear, in making me confident and introducing me to various options available \nCan't thank you enough🙏🏻\nGood day"
    },
    {
      content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members. Truly a gem! Mon-Fri 9 to 4, Sat 9 to 1 at the clinic. Need to take prior appointment."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-medical-beige/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
            <span className="text-medical-teal font-inter text-sm font-medium">Patient Stories</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients and families who have experienced compassionate, expert care
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className="h-full border-l-4 border-medical-teal shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 h-full flex flex-col items-center text-center justify-center">
                    <Quote className="w-10 h-10 text-medical-teal/20 mb-6" />
                    <p className="font-inter text-gray-700 text-lg italic leading-relaxed whitespace-pre-line">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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
