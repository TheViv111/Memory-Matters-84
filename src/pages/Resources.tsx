
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Download, 
  Heart, 
  Phone, 
  Clock,
  Search,
  ExternalLink
} from 'lucide-react';

const Resources = () => {
  const articles = [
    {
      title: "Understanding Early Signs of Memory Loss",
      category: "Memory Care",
      readTime: "5 min read",
      excerpt: "Learn to recognize the difference between normal aging and concerning memory changes.",
      featured: true
    },
    {
      title: "Caring for Someone with Alzheimer's Disease",
      category: "Caregiver Support",
      readTime: "8 min read",
      excerpt: "Practical tips and strategies for family caregivers supporting loved ones with Alzheimer's."
    },
    {
      title: "Nutrition and Brain Health: What You Need to Know",
      category: "Prevention",
      readTime: "6 min read",
      excerpt: "Evidence-based nutritional approaches to support cognitive function and brain health."
    },
    {
      title: "Creating a Safe Home Environment for Dementia",
      category: "Home Safety",
      readTime: "10 min read",
      excerpt: "Step-by-step guide to making your home safer and more comfortable for someone with dementia."
    },
    {
      title: "Managing Behavioral Changes in Dementia",
      category: "Caregiver Support",
      readTime: "7 min read",
      excerpt: "Understanding and responding to common behavioral changes in dementia patients."
    },
    {
      title: "The Importance of Regular Neurological Check-ups",
      category: "Prevention",
      readTime: "4 min read",
      excerpt: "Why routine neurological evaluations matter for maintaining cognitive health."
    }
  ];

  const downloadableResources = [
    {
      title: "Memory Care Planning Checklist",
      description: "Comprehensive checklist for families planning memory care",
      type: "PDF Guide",
      pages: "12 pages"
    },
    {
      title: "Medication Management Tracker",
      description: "Printable tracker for organizing multiple medications",
      type: "PDF Form",
      pages: "2 pages"
    },
    {
      title: "Emergency Contact Information Sheet",
      description: "Template for organizing important emergency contacts",
      type: "PDF Template",
      pages: "1 page"
    },
    {
      title: "Daily Care Activity Log",
      description: "Log for tracking daily activities and behaviors",
      type: "PDF Form",
      pages: "4 pages"
    }
  ];

  const supportGroups = [
    {
      name: "Alzheimer's Family Support Group",
      schedule: "First Thursday of every month, 6:00 PM",
      format: "In-person & Virtual",
      description: "Support and education for families affected by Alzheimer's disease"
    },
    {
      name: "Caregiver Wellness Circle",
      schedule: "Every other Tuesday, 2:00 PM",
      format: "In-person",
      description: "Focus on caregiver self-care and stress management"
    },
    {
      name: "Memory Loss Support Network",
      schedule: "Third Saturday of every month, 10:00 AM",
      format: "Virtual",
      description: "Open to all families dealing with memory-related conditions"
    },
    {
      name: "Young Onset Dementia Support",
      schedule: "Second Monday of every month, 7:00 PM",
      format: "Virtual",
      description: "Specialized support for families affected by early-onset dementia"
    }
  ];

  const faqItems = [
    {
      question: "When should I be concerned about memory changes?",
      answer: "While some memory changes are normal with aging, be concerned if you notice significant changes in daily functioning, difficulty completing familiar tasks, confusion with time or place, or changes in judgment or decision-making."
    },
    {
      question: "What should I expect during a memory assessment?",
      answer: "A comprehensive memory assessment typically includes a detailed medical history, cognitive testing, physical examination, and may include brain imaging. The process usually takes 2-3 hours and family members are encouraged to attend."
    },
    {
      question: "How can I support a family member with dementia?",
      answer: "Focus on maintaining routines, creating a safe environment, using clear communication, being patient, and taking care of your own health. Consider joining support groups and utilizing respite care services."
    },
    {
      question: "Are there treatments available for memory disorders?",
      answer: "While there's no cure for most memory disorders, various treatments can help manage symptoms, slow progression, and improve quality of life. These include medications, cognitive therapies, and lifestyle interventions."
    },
    {
      question: "What resources are available for caregivers?",
      answer: "We offer caregiver education, support groups, respite care resources, and connections to community services. Our team can help you develop a comprehensive care plan and access available resources."
    }
  ];

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Patient & Family Resources
          </h1>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive educational materials, support resources, and tools to help you 
            navigate your neurological health journey with confidence and knowledge.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search resources..." 
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-medical-teal to-medical-lavender rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-6 h-6" />
                  <span className="font-inter text-sm uppercase tracking-wide">Featured Article</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl mb-4">
                  Understanding Early Signs of Memory Loss
                </h2>
                <p className="font-inter text-lg mb-6 opacity-90">
                  Learn to recognize the difference between normal aging and concerning memory changes. 
                  This comprehensive guide helps families understand when to seek professional evaluation.
                </p>
                <Button variant="secondary" className="bg-white text-medical-teal hover:bg-gray-100">
                  Read Full Article
                </Button>
              </div>
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Memory care consultation"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
            Educational Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                  <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
            Downloadable Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Download className="w-8 h-8 text-medical-teal flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                        {resource.title}
                      </h3>
                      <p className="font-inter text-gray-700 mb-3 text-sm">
                        {resource.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <span className="font-inter text-xs text-gray-500">{resource.type}</span>
                          <span className="font-inter text-xs text-gray-500">{resource.pages}</span>
                        </div>
                        <Button size="sm" className="bg-medical-deep-blue hover:bg-medical-deep-blue/90">
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
              Support Groups
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with others who understand your journey. Our support groups provide 
              a safe space to share experiences and learn from one another.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportGroups.map((group, index) => (
              <Card key={index} className="border-l-4 border-medical-teal">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-medical-teal flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                        {group.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-medical-teal" />
                          <span className="font-inter text-sm text-gray-700">{group.schedule}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4 text-medical-teal" />
                          <span className="font-inter text-sm text-gray-700">{group.format}</span>
                        </div>
                      </div>
                      <p className="font-inter text-gray-700 mb-4 text-sm">
                        {group.description}
                      </p>
                      <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                        Join Group
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-lg text-medical-charcoal mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-inter text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-16 bg-medical-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-medical-teal mx-auto mb-6" />
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Crisis & Emergency Resources
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            If you're experiencing a medical emergency or crisis situation, 
            these resources are available 24/7.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-inter font-semibold mb-2">Medical Emergency</h3>
                <p className="font-inter text-2xl font-bold text-medical-teal">911</p>
                <p className="font-inter text-sm opacity-80">Life-threatening situations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-inter font-semibold mb-2">Crisis Hotline</h3>
                <p className="font-inter text-lg font-bold text-medical-teal">988</p>
                <p className="font-inter text-sm opacity-80">Mental health emergencies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-inter font-semibold mb-2">Our Emergency Line</h3>
                <p className="font-inter text-lg font-bold text-medical-teal">(555) 123-4567</p>
                <p className="font-inter text-sm opacity-80">For existing patients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl text-medical-charcoal mb-6">
            Stay Informed
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest research, tips, and resources 
            delivered directly to your inbox.
          </p>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input placeholder="Enter your email address" type="email" />
                <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full">
                  Subscribe to Newsletter
                </Button>
                <p className="font-inter text-xs text-gray-500">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
