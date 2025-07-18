import React from 'react';
import AnimatedSection from './AnimatedSection';
import StudentCard from './StudentCard';

const StudentProfilesSection = ({ students }: { students: any[] }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
            Meet Our <span className="text-red-600">Students</span>
          </h2>
          <p className="text-xl text-gray-600">
            Industry-ready talent from engineering colleges across India
          </p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a href="/portfolios" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-500 hover:bg-red-700 hover:scale-110 animate-pulse">
            See All Portfolios...
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default StudentProfilesSection; 