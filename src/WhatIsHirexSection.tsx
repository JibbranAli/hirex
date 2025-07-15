import React from 'react';
import AnimatedSection from './AnimatedSection';

const WhatIsHirexSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
              What is <span className="text-red-600">HIREX</span>?
            </h2>
            <p className="text-xl text-red-600 font-bold mb-6">
              Redefining Hiring in India – Skill. Project. Performance.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              HIREX is India's First Experiential Hiring Conclave where CGPA, college name, and pedigree take a backseat — and real, production-grade projects take centerstage.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              It is the culmination event of "The Creator 2025", our exclusive Summer Internship Program where engineering students from 100+ top colleges across India are trained, mentored, and guided to build real-world projects under the leadership of Mr. Vimal Daga.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At HIREX, you don't interview on resumes — you hire based on what's been built, deployed, and tested.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="HIREX Platform"
              className="rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl hover:from-red-600/30 transition-all duration-500"></div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhatIsHirexSection; 