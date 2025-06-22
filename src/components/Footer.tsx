
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold">Memory Matters</h3>
                <p className="text-sm text-gray-300">Neurology & Memory Care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Compassionate care for memory and neurological conditions. Dr. Soumya Hegde and our team 
              provide comprehensive, patient-centered services to support you and your family.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-medical-teal" />
                <span>+91 9867739963</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-medical-teal" />
                <span>info@memorymattersmd.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-medical-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dr. Soumya Hegde : Memory Matters</p>
                  <p>4, Wind Tunnel Rd, Murugeshpalya</p>
                  <p>Kaveri Nagar, Bengaluru, Karnataka 560017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-medical-teal transition-colors">
                About Dr. Hegde
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-medical-teal transition-colors">
                Our Services
              </Link>
              <Link to="/appointment" className="block text-gray-300 hover:text-medical-teal transition-colors">
                Book Appointment
              </Link>
              <Link to="/resources" className="block text-gray-300 hover:text-medical-teal transition-colors">
                Patient Resources
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-medical-teal transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-medical-teal" />
                <span className="text-sm">Mon-Thu: 8:00 AM - 5:00 PM</span>
              </div>
              <div className="pl-6 text-sm">Friday: 8:00 AM - 4:00 PM</div>
              <div className="pl-6 text-sm">Saturday: 9:00 AM - 1:00 PM</div>
              <div className="pl-6 text-sm">Sunday: Closed</div>
              <div className="pt-2 text-sm text-medical-teal">
                Emergency calls accepted 24/7
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Memory Matters Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-medical-teal text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-medical-teal text-sm transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-400 text-sm">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
