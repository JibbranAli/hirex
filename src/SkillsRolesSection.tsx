import React from 'react';
import AnimatedSection from './AnimatedSection';
import SkillCard from './SkillCard';

const SkillsRolesSection = ({ skills }: { skills: any[] }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
            Skills & <span className="text-red-600">Roles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet candidates specialized in cutting-edge technologies and ready for industry challenges
          </p>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsRolesSection; 