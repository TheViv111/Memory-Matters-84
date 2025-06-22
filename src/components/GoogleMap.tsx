
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, Clock } from 'lucide-react';

const GoogleMap = () => {
  const clinicAddress = "4, Wind Tunnel Rd, Murugeshpalya, Kaveri Nagar, Bengaluru, Karnataka 560017";
  const encodedAddress = encodeURIComponent(clinicAddress);
  
  return (
    <div className="w-full">
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="relative">
          {/* Google Maps Embed */}
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO4WIX_JTKZCpc&q=${encodedAddress}&zoom=16`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
            title="Memory Matters Clinic Location"
          />
          
          {/* Overlay with clinic info */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-medical-teal mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-playfair font-semibold text-medical-charcoal mb-1">
                  Memory Matters Clinic
                </h3>
                <p className="font-inter text-sm text-gray-700">
                  {clinicAddress}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <Clock className="w-4 h-4 text-medical-teal" />
                  <span className="font-inter text-xs text-gray-600">Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Directions button */}
          <div className="absolute bottom-4 right-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-medical-teal hover:bg-medical-teal/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              <span className="font-inter text-sm font-medium">Get Directions</span>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GoogleMap;
