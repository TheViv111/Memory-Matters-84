
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const EducationalVideos = ({ searchQuery }: { searchQuery: string }) => {
  const educationalVideos = [
    {
      title: "Anxiety in the elderly with Dr Soumya Hegde",
      videoId: "uNzQu1L2jXk",
      description: "Comprehensive overview of mental health challenges and treatment approaches."
    },
    {
      title: "Anxiety: An alarm and a motivator",
      videoId: "d2DLgziAR0Y",
      description: "Important insights into cognitive health changes as we age and prevention strategies."
    },
    {
      title: "Anxiety in the elderly: What's different?",
      videoId: "_iJAqVlbocY",
      description: "How families can effectively support loved ones dealing with mental health issues."
    },
    {
      title: "Diagnosing anxiety in the elderly",
      videoId: "7ocAVulSUw8",
      description: "Essential information about recognizing and diagnosing anxiety symptoms in elderly patients."
    },
    {
      title: "Treating anxiety in the elderly",
      videoId: "hF81KFUUHyY",
      description: "Comprehensive guide to treating anxiety disorders in elderly patients and when to seek professional help."
    },
    {
      title: "Anxiety in the elderly: FAQs",
      videoId: "sqWZzesfSiI",
      description: "The importance of early detection and intervention in mental health care."
    },
    {
      title: "My father refuses to seek therapy",
      videoId: "rSMVthBsBG0",
      description: "Understanding and addressing resistance to therapy in elderly family members."
    },
    {
      title: "My mother lives alone",
      videoId: "UCud3PegZCk",
      description: "Building awareness about neurological health and preventive care strategies."
    },
    {
      title: "I'm a senior citizen and my spouse has anxiety",
      videoId: "mt_-GIwBRd0",
      description: "Practical approaches for senior citizens supporting spouses with anxiety disorders."
    }
  ];

  const filteredVideos = educationalVideos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredVideos.length === 0) {
    return (
      <section className="py-12 bg-white">
        <div className="text-center text-gray-500">
          No resources found matching "{searchQuery}"
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
            Educational Videos
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our collection of educational videos covering important topics in anxiety and mental health care for elderly patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex items-start space-x-3 mb-3">
                  <Play className="w-5 h-5 text-medical-teal flex-shrink-0 mt-1" />
                  <h3 className="font-playfair text-xl text-medical-charcoal">
                    {video.title}
                  </h3>
                </div>
                <p className="font-inter text-gray-700 text-sm leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalVideos;
