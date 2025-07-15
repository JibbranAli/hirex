import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Calendar, MapPin } from 'lucide-react';

const CallToActionSection = () => (
  <section className="py-20 bg-gradient-to-r from-red-600 to-black text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-black mb-6 hover:scale-105 transition-transform duration-500">
          Want to be a part of India's Hiring Revolution?
        </h2>
        <p className="text-xl mb-6">
          Join us at HIREX 2025 on 7th August, Jaipur & meet the most industry-ready talent you've ever seen.
        </p>
        <p className="text-2xl font-bold mb-8 text-red-200">
          We don't talk skills, we prove them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center text-lg hover:text-red-200 transition-colors duration-300">
            <Calendar className="w-5 h-5 mr-2" />
            7th August, 2025
          </div>
          <div className="flex items-center text-lg hover:text-red-200 transition-colors duration-300">
            <MapPin className="w-5 h-5 mr-2" />
            Jaipur, Rajasthan
          </div>
        </div>
        <button className="bg-white text-red-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:rotate-1 animate-pulse hover:animate-none">
          Register as HR Head – 0 Cost
        </button>
      </AnimatedSection>
    </div>
  </section>
);

export default CallToActionSection; 