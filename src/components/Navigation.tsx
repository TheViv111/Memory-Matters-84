
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
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
      scrolled ? 'top-2 w-[97%]' : ''
    }`}>
      <div className={`bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 px-6 py-3 transition-all duration-300 ${
        scrolled ? 'bg-white/15 shadow-3xl' : ''
      }`}>
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-playfair text-xl font-bold text-medical-charcoal">
                  Memory Matters
                </div>
                <div className="font-inter text-xs text-medical-teal">
                  Dr. Soumya Hegde • Geriatric Psychiatrist
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                    ? 'text-medical-teal bg-white/20 backdrop-blur-sm' 
                    : 'text-gray-700 hover:text-medical-teal hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Enhanced CTA Button */}
            <Link to="/appointment">
              <Button className="bg-gradient-to-r from-medical-deep-blue via-medical-teal to-medical-deep-blue hover:from-medical-teal hover:via-medical-orange hover:to-medical-teal text-white px-6 py-2 text-sm font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl backdrop-blur-sm">
                Book Appointment
              </Button>
            </Link>
            
            {/* Professional Contact */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
              <Phone className="w-4 h-4 text-medical-orange" />
              <a href="tel:8904418172" className="font-inter text-sm font-medium text-medical-deep-blue hover:text-medical-orange transition-colors">
                89044 18172
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-medical-teal focus:outline-none focus:text-medical-teal transition-colors duration-200 p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30" 
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
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
                  className={`font-inter font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-medical-teal bg-white/30' 
                      : 'text-gray-700 hover:text-medical-teal hover:bg-white/20'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-white/20 space-y-3">
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-orange text-white font-inter rounded-xl shadow-lg">
                    Book Appointment
                  </Button>
                </Link>
                
                <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <Phone className="w-4 h-4 text-medical-orange" />
                  <a href="tel:8904418172" className="font-inter text-sm font-medium text-medical-deep-blue">
                    Emergency: 89044 18172
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
