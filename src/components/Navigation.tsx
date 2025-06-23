
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Dr. Hegde', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="font-playfair text-xl text-medical-charcoal font-semibold">
                Memory Matters
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Neurology & Memory Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter text-sm transition-all duration-200 hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-medical-teal font-medium border-b-2 border-medical-teal'
                    : 'text-gray-700 hover:text-medical-teal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Emergency Contact */}
            <a 
              href="tel:8904418172"
              className="flex items-center space-x-2 text-medical-deep-blue hover:scale-105 transition-transform duration-200 hover:text-medical-teal"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">89044 18172</span>
            </a>
            
            <Link to="/appointment">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-medical-teal transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-medical-teal font-medium'
                      : 'text-gray-700 hover:text-medical-teal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <a 
                href="tel:8904418172"
                className="flex items-center space-x-2 text-medical-deep-blue pt-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={16} />
                <span className="text-sm font-medium">89044 18172</span>
              </a>
              
              <Link to="/appointment" onClick={() => setIsOpen(false)}>
                <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white font-inter w-full shadow-lg">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
