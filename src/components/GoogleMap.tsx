
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const GoogleMap = () => {
  const clinicAddress = "4, Wind Tunnel Rd, Murugeshpalya, Kaveri Nagar, Bengaluru, Karnataka 560017";
  
  return (
    <div className="w-full">
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
        <div className="relative">
          {/* Google Maps Embed using provided code */}
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe 
                width="100%" 
                height="400" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=%204,%20Wind%20Tunnel%20Rd,%20Murugeshpalya,%20Kaveri%20Nagar,%20Bengaluru,%20Karnataka%20560017&t=&z=19&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0"
                className="w-full h-96 rounded-t-lg"
                title="Memory Matters Clinic Location"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Overlay with clinic info */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl max-w-xs border border-medical-teal/20">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-medical-teal mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-playfair font-semibold text-medical-charcoal mb-1">
                  Memory Matters Clinic
                </h3>
                <p className="font-inter text-sm text-gray-700 leading-snug">
                  Dr. Soumya Hegde : Memory Matters
                </p>
                <p className="font-inter text-xs text-gray-600 mt-1">
                  {clinicAddress}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <Clock className="w-4 h-4 text-medical-teal" />
                  <span className="font-inter text-xs text-gray-600">Mon-Sat: 9AM-4PM</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <Phone className="w-4 h-4 text-medical-teal" />
                  <span className="font-inter text-xs text-gray-600">89044 18172</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Directions button */}
          <div className="absolute bottom-4 right-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-medical-teal hover:bg-medical-teal/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 font-inter"
            >
              <Navigation className="w-4 h-4" />
              <span className="text-sm font-medium">Get Directions</span>
            </a>
          </div>
        </div>
      </Card>
      
      {/* Additional clinic information */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-medical-teal/10 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-medical-teal" />
            </div>
            <div>
              <p className="font-inter font-medium text-medical-charcoal">Office Hours</p>
              <p className="font-inter text-sm text-gray-600">Mon-Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-medical-deep-blue/10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-medical-deep-blue" />
            </div>
            <div>
              <p className="font-inter font-medium text-medical-charcoal">Contact</p>
              <p className="font-inter text-sm text-gray-600">89044 18172</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-inter font-medium text-medical-charcoal">Parking</p>
              <p className="font-inter text-sm text-gray-600">Available on-site</p>
            </div>
          </div>
        </Card>
      </div>
      
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 400px;
          width: 100%;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 400px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;
