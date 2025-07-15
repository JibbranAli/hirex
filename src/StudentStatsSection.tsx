import React from 'react';
import AnimatedSection from './AnimatedSection';
import Counter from './Counter';

const StudentStatsSection = ({ states }: { states: string[] }) => (
  <section className="py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 hover:text-red-500 transition-colors duration-500">
            Student <span className="text-red-500">Statistics</span>
          </h2>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-red-600/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-red-600/20 hover:scale-105 transition-all duration-500 group">
            <div className="text-5xl md:text-6xl font-black text-red-500 mb-4">
              <Counter end={1000} suffix="+" />
            </div>
            <p className="text-xl font-semibold group-hover:text-red-300 transition-colors duration-300">Students from 100+ Engineering Colleges</p>
          </div>
          <div className="text-center bg-red-600/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-red-600/20 hover:scale-105 transition-all duration-500 group" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-6xl font-black text-red-500 mb-4">
              <Counter end={267} suffix="+" />
            </div>
            <p className="text-xl font-semibold group-hover:text-red-300 transition-colors duration-300">Final Year Students – Available for Full-Time</p>
          </div>
          <div className="text-center bg-red-600/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-red-600/20 hover:scale-105 transition-all duration-500 group" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl md:text-6xl font-black text-red-500 mb-4">
              <Counter end={201} suffix="+" />
            </div>
            <p className="text-xl font-semibold group-hover:text-red-300 transition-colors duration-300">Pre-Final Year Students – Available for Internships</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Regional Coverage</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {states.map((state, index) => (
              <span 
                key={index} 
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default StudentStatsSection; 