
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Award } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    // Additional scroll to top for immediate feedback
    window.scrollTo(0, 0);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Simplified Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 group" onClick={handleLinkClick}>
            <div className="w-10 h-10 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="font-playfair text-xl font-bold text-medical-charcoal">
              Memory Matters
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Resources', path: '/resources' },
              { name: 'FAQs', path: '/faqs' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`font-inter font-medium transition-all duration-200 relative group px-3 py-2 rounded-lg ${
                  isActive(item.path) 
                    ? 'text-medical-teal bg-medical-teal/10' 
                    : 'text-gray-700 hover:text-medical-teal hover:bg-gray-50'
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Simplified CTA Button */}
            <Link to="/appointment" onClick={handleLinkClick}>
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-6 py-2 text-sm font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
                Book Appointment
              </Button>
            </Link>
            
            {/* Contact */}
            <a href="tel:+918904418172" className="flex items-center space-x-2 px-3 py-2 text-medical-deep-blue hover:text-medical-orange transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-inter text-sm font-medium">+91 89044 18172</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-medical-teal focus:outline-none focus:text-medical-teal transition-colors duration-200 p-2 rounded-lg bg-gray-50 hover:bg-gray-100" 
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Resources', path: '/resources' },
                { name: 'FAQs', path: '/faqs' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block font-inter font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-medical-teal bg-medical-teal/10' 
                      : 'text-gray-700 hover:text-medical-teal hover:bg-gray-50'
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <Link to="/appointment" onClick={handleLinkClick}>
                  <Button className="w-full bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white font-inter rounded-lg shadow-lg">
                    Book Appointment
                  </Button>
                </Link>
                
                <a href="tel:+918904418172" className="flex items-center justify-center space-x-2 px-4 py-3 text-medical-deep-blue">
                  <Phone className="w-4 h-4" />
                  <span className="font-inter text-sm font-medium">+91 89044 18172</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
