
import React from 'react';
import { Heart, Brain } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-deep-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="text-center z-10">
        {/* Logo and branding */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse overflow-hidden p-1">
            <img src="/logo.jpeg" alt="Memory Matters Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h1 className="font-playfair text-3xl text-medical-charcoal font-semibold">
              Memory Matters
            </h1>
            <p className="text-sm text-gray-600">Memory & Senior Mental Health</p>
          </div>
        </div>

        {/* Loading animation */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Heart className="w-8 h-8 text-medical-teal animate-pulse" />
            <Brain className="w-8 h-8 text-medical-deep-blue animate-pulse delay-500" />
            <Heart className="w-8 h-8 text-medical-teal animate-pulse delay-1000" />
          </div>

          {/* Loading bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-medical-teal to-medical-deep-blue rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <p className="font-playfair text-xl text-medical-charcoal">Loading...</p>
          <p className="font-inter text-sm text-gray-600">Preparing your compassionate care experience</p>
        </div>

        {/* Dr. Hegde info */}
        <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg max-w-sm mx-auto">
          <p className="font-inter text-sm text-medical-charcoal">
            <span className="font-semibold">Dr. Soumya Hegde</span>
          </p>
          <p className="font-inter text-xs text-gray-600">Geriatric Psychiatrist</p>
          <p className="font-inter text-xs text-medical-teal mt-1">Mon-Sat: 9:00 AM - 4:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
