
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
      content: "I will be eternally grateful to you for your guidance and wonderful care of her. Thank you very much. You are a wonderful rare human being and are richly blessed working in a field where very few are willing to take care of elders. Thank you 🙏.",
      author: "Sandeep"
    },
    {
      content: "Thanks much Soumya! Dad had the nicest things to say about you always and thought very highly of you. Referred to you as top level professional with a high degree of empathy. And our gratitude to you for helping us to understand him better 🙏🏽"
    },
    {
      content: "Good morning Dr. Soumya,\n\nWanted to share with you the news that I have found a job. You deserve all the credit in making me confident and introducing me to various options available.\n\nCan't thank you enough 🙏🏻\nGood day."
    },
    {
      content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members.\n\nTruly a gem!\n\nMon-Fri: 9 AM to 4 PM\nSat: 9 AM to 1 PM"
    },
    {
      content: "I knew this smile will blossom, just didn't know well. Thanks to the Supreme, thanks to you, thanks to life 🙏🏻, she smiles better than ever before 🤗"
    },
    {
      content: "I was looking for a geriatric psychiatrist and that's how I came across her. It was our first visit to Dr. Soumya Hegde. I had been there for my father's treatment for his depression and anxiety. The doctor was really friendly, calm, pleasant, empathetic, confident and a very good listener. She listened patiently to us and apart from discussing the medications she also suggested few life style changes. We are looking forward to our next visit."
    },
    {
      content: "Doctor Soumya is a gem of a person. So incredibly patient and understanding. Would highly recommend!"
    },
    {
      content: "Doctor, you have been a great support to us time and again. Dad passed very peacefully in his sleep. A good person like him had a very pain free and peaceful end. He was extremely healthy and fit from the past 2 years and had no health issues. Thank you for your support and good wishes. I will be grateful to you always.",
      author: "Shobha"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-white to-medical-beige/30 overflow-hidden">
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

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto px-12 md:px-0"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-l-4 border-medical-teal shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 h-full flex flex-col items-center text-center justify-center">
                    <Quote className="w-10 h-10 text-medical-teal/20 mb-6" />
                    <p className="font-inter text-gray-700 text-lg italic leading-relaxed whitespace-pre-line mb-6">
                      "{testimonial.content}"
                    </p>
                    {testimonial.author && (
                      <p className="font-inter font-semibold text-medical-teal text-base">
                        — {testimonial.author}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white" />
        </Carousel>

      </div>
    </section>
  );
};

export default PatientTestimonials;
