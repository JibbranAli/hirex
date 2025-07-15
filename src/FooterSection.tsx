import React from 'react';
import AnimatedSection from './AnimatedSection';

const FooterSection = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <AnimatedSection>
        <h3 className="text-3xl font-black mb-4 hover:text-red-500 transition-colors duration-500">
          <span className="text-red-500">HIREX</span> 2025
        </h3>
        <p className="text-gray-300 mb-4">
          Hosted by LinuxWorld Informatics Pvt Ltd
        </p>
        <p className="text-gray-300">
          Powered by Mr. Vimal Daga
        </p>
      </AnimatedSection>
    </div>
  </footer>
);

export default FooterSection; 