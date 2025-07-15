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
            Industry-ready talent from top engineering colleges across India
          </p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default StudentProfilesSection; 