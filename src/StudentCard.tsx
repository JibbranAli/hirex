import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { Linkedin, Github, ExternalLink, Star, MapPin } from 'lucide-react';

const StudentCard = ({ 
  name, 
  college, 
  passingOutYear, 
  photo, 
  github, 
  linkedin,
  portfolio, 
  role, 
  availability, 
  index 
}: { 
  name: string; 
  college: string; 
  passingOutYear: string; 
  photo: string; 
  github: string;
  linkedin: string;
  portfolio: string;
  role: string;
  availability: string[];
  index: number 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-teal-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'];
  const colorClass = colors[index % colors.length];
  
  return (
    <div 
      ref={ref as any}
      className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105 transform overflow-hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Decorative background elements matching reference */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${colorClass} rounded-full opacity-20 transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500`}></div>
      <div className={`absolute bottom-0 left-0 w-16 h-16 ${colorClass} rounded-full opacity-15 transform -translate-x-4 translate-y-4 group-hover:scale-125 transition-transform duration-500`}></div>
      <div className="relative z-10 p-8">
        <div className="relative mb-6">
          <img 
            src={photo} 
            alt={name}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colorClass} rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-500`}>
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{name}</h3>
        <p className="text-gray-600 text-sm mb-1 font-medium">{college}</p>
        <p className="text-gray-500 text-sm mb-2">Class of {passingOutYear}</p>
        <p className="text-red-600 text-sm font-semibold mb-3">{role}</p>
        <div className="flex justify-center items-center mb-4">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          <span className="text-xs text-gray-500">{availability.join(', ')}</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-100 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md"
          >
            <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white" />
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md"
          >
            <Github className="w-5 h-5 text-gray-800 group-hover:text-white" />
          </a>
          <a 
            href={portfolio} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-100 hover:bg-red-600 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md"
          >
            <ExternalLink className="w-5 h-5 text-red-600 group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentCard; 