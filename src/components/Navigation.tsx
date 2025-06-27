import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Heart } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Dr. Hegde',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Resources',
    path: '/resources'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-medical-teal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Practice Name */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-3">
              
              <div>
                <div className="font-playfair text-xl font-bold text-medical-charcoal">
                  Memory Matters
                </div>
                <div className="font-inter text-xs text-medical-teal">
                  Dr. Soumya Hegde
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/faqs" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 relative group">
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            
            {/* CTA Button */}
            <Link to="/appointment">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-orange text-white px-6 py-2 font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Appointment
              </Button>
            </Link>
            
            {/* Emergency Contact */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-medical-orange/5 rounded-lg border border-medical-orange/20">
              <Phone className="w-4 h-4 text-medical-orange" />
              <a href="tel:8904418172" className="font-inter text-sm font-medium text-medical-deep-blue hover:text-medical-orange transition-colors">
                89044 18172
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-medical-teal focus:outline-none focus:text-medical-teal transition-colors duration-200" aria-label="Toggle navigation menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 px-2 py-1" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 px-2 py-1" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 px-2 py-1" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/faqs" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 px-2 py-1" onClick={() => setIsOpen(false)}>
                FAQs
              </Link>
              <Link to="/contact" className="font-inter font-medium text-gray-700 hover:text-medical-teal transition-colors duration-200 px-2 py-1" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-orange text-white font-inter">
                    Book Appointment
                  </Button>
                </Link>
                
                <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-medical-orange/5 rounded-lg border border-medical-orange/20">
                  <Phone className="w-4 h-4 text-medical-orange" />
                  <a href="tel:8904418172" className="font-inter text-sm font-medium text-medical-deep-blue">
                    Emergency: 89044 18172
                  </a>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;