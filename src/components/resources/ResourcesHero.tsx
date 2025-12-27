
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const ResourcesHero = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) => {
  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
          Patient & Family Resources
        </h1>
        <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Comprehensive educational materials, support resources, and tools to help you
          navigate your neurological health journey with confidence and knowledge.
        </p>

        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search resources..."
            className="pl-10 py-3 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
