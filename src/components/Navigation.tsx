
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center">
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
                className={`font-inter text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-medical-teal font-medium'
                    : 'text-gray-700 hover:text-medical-teal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Emergency Contact */}
            <div className="flex items-center space-x-2 text-medical-deep-blue">
              <Phone size={16} />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </div>
            
            <Link to="/appointment">
              <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white font-inter">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-medical-teal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
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
              
              <div className="flex items-center space-x-2 text-medical-deep-blue pt-2">
                <Phone size={16} />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </div>
              
              <Link to="/appointment" onClick={() => setIsOpen(false)}>
                <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white font-inter w-full">
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
