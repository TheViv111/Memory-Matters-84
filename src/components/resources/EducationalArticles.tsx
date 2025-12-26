import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
const EducationalArticles = () => {
  const articles = [{
    title: "Normal Aging vs. Dementia",
    category: "Memory Care",
    readTime: "5 min read",
    excerpt: "Understand the critical differences between age-related memory changes and early signs of cognitive decline.",
    featured: true
  }, {
    title: "Managing Caregiver Burnout",
    category: "Caregiver Support",
    readTime: "7 min read",
    excerpt: "Practical strategies and self-care tips for family members supporting loved ones with memory conditions."
  }, {
    title: "Benefits of Cognitive Stimulation",
    category: "Treatment",
    readTime: "6 min read",
    excerpt: "How evidence-based cognitive stimulation therapy (CST) helps maintain brain function and quality of life."
  }, {
    title: "Adapting the Home for Safety",
    category: "Environment",
    readTime: "8 min read",
    excerpt: "A guide to creating a dementia-friendly home environment to reduce confusion and prevent falls."
  }, {
    title: "Brain-Healthy Mediterranean Diet",
    category: "Nutrition",
    readTime: "5 min read",
    excerpt: "Exploring the link between nutritional patterns and the preservation of cognitive health in seniors."
  }, {
    title: "Responding to Challenging Behaviors",
    category: "Behavioral Health",
    readTime: "9 min read",
    excerpt: "Techniques for understanding and managing common behavioral symptoms associated with dementia."
  }];
  return <>
    {/* Featured Article */}


    {/* Educational Articles */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
          Educational Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-medical-teal/10 text-medical-teal rounded-full text-sm font-inter">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm font-inter">{article.readTime}</span>
                </div>
                <h3 className="font-playfair text-xl text-medical-charcoal mb-3">
                  {article.title}
                </h3>
                <p className="font-inter text-gray-700 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white w-full mt-auto">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>;
};
export default EducationalArticles;