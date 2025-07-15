import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const SkillCard = ({ title, skills, icon: Icon, index }: { title: string; skills: string[]; icon: any; index: number }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref as any}
      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 hover:scale-105 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-3 rounded-xl group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-all duration-500" />
        </div>
        <h3 className="text-xl font-bold ml-4 text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard; 