
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-medical-charcoal to-medical-deep-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl border-2 border-white/20">
                <img src="/logo.jpeg" alt="Memory Matters Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold">Memory Matters</h3>
                <p className="text-sm text-gray-300">Specialist Clinic for Memory & Senior Mental Health</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Compassionate care for memory and neurological conditions. Dr. Soumya Hegde and our team
              provide comprehensive, patient-centered services to support you and your family on your health journey.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+918904418172"
                className="flex items-center space-x-3 hover:text-medical-teal transition-colors duration-200"
              >
                <Phone size={18} className="text-medical-teal" />
                <span>+91 89044 18172</span>
              </a>
              <a
                href="mailto:memorymattersindia@gmail.com"
                className="flex items-center space-x-3 hover:text-medical-teal transition-colors duration-200"
              >
                <Mail size={18} className="text-medical-teal" />
                <span>memorymattersindia@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 hover:text-medical-teal transition-colors duration-200">
                <MapPin size={18} className="text-medical-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dr. Soumya Hegde : Memory Matters</p>
                  <p>No.6, Wind Tunnel Road, Murugeshpalya</p>
                  <p>Kaveri Nagar, Bengaluru, Karnataka 560017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-medical-teal transition-colors duration-200 hover:translate-x-1">
                About Dr. Hegde
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-medical-teal transition-colors duration-200 hover:translate-x-1">
                Our Services
              </Link>
              <Link to="/resources" className="block text-gray-300 hover:text-medical-teal transition-colors duration-200 hover:translate-x-1">
                Patient Resources
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-medical-teal transition-colors duration-200 hover:translate-x-1">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2 hover:text-medical-teal transition-colors duration-200">
                <Clock size={16} className="text-medical-teal" />
                <span className="text-sm">Mon-Fri: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-medical-teal transition-colors duration-200">
                <Clock size={16} className="text-medical-teal" />
                <span className="text-sm">Saturday: 9:00 AM - 1:00 PM</span>
              </div>
              <div className="pl-6 text-sm">Sunday: Closed</div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 space-y-2">
              <a
                href="tel:+918904418172"
                className="block bg-medical-teal hover:bg-medical-teal/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Memory Matters Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-medical-teal text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-medical-teal text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <a
              href="https://instagram.com/memorymattersindia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-medical-teal transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <span className="text-gray-400 text-sm">Confidential & Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
