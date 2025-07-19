import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Users, 
  MapPin, 
  Calendar,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  XCircle,
  Building2,
  Award,
  Target,
  Code,
  Cloud,
  Brain,
  Database,
  Cpu,
  Globe,
  Star
} from 'lucide-react';
import HeroSection from './HeroSection';
import WhatIsHirexSection from './WhatIsHirexSection';
import WhyCompaniesSection from './WhyCompaniesSection';
import SkillsRolesSection from './SkillsRolesSection';
import StudentStatsSection from './StudentStatsSection';
import HirexExperienceSection from './HirexExperienceSection';
import WhatCompaniesGetSection from './WhatCompaniesGetSection';
import StudentProfilesSection from './StudentProfilesSection';
import CallToActionSection from './CallToActionSection';
import FooterSection from './FooterSection';
import HirexInterestSection from './HirexInterestSection';

// Counter component for animated numbers
const Counter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Intersection Observer Hook for scroll animations
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};

// Skill card component
const SkillCard = ({ title, skills, icon: Icon, index }: { title: string; skills: string[]; icon: any; index: number }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
  <div 
    ref={ref}
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

// Student profile card component
const StudentCard = ({ name, college, year, image, index }: { name: string; college: string; year: string; image: string; index: number }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-teal-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'];
  const colorClass = colors[index % colors.length];
  
  return (
  <div 
    ref={ref}
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
          src={image} 
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colorClass} rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-500`}>
          <Star className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{name}</h3>
      <p className="text-gray-600 text-sm mb-1 font-medium">{college}</p>
      <p className="text-gray-500 text-sm mb-6">Class of {year}</p>
      
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-100 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md">
          <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white" />
        </button>
        <button className="bg-gray-100 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md">
          <Github className="w-5 h-5 text-gray-800 group-hover:text-white" />
        </button>
        <button className="bg-red-100 hover:bg-red-600 p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:rotate-12 shadow-md">
          <ExternalLink className="w-5 h-5 text-red-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  </div>
  );
};

// Feature comparison component
const ComparisonFeature = ({ text, isPositive }: { text: string; isPositive: boolean }) => (
  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
    {isPositive ? (
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
    ) : (
      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
    )}
    <span className={`text-lg ${isPositive ? 'text-gray-900' : 'text-gray-600'} group-hover:translate-x-1 transition-transform duration-300`}>{text}</span>
  </div>
);

// Animated Section Component
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      title: "DevOps Engineer",
      icon: Cpu,
      skills: [
        "Git", "Docker", "Jenkins", "Kubernetes", "GitHub", "Linux", "Terraform", "AWS", "Grafana"
      ]
    },
    {
      title: "MLOps Engineer", 
      icon: Brain,
      skills: [
        "Python", "Docker", "Kubernetes", "MLflow", "Flask", "AWS Sagemaker", "TensorFlow", "Prometheus", "CI/CD"
      ]
    },
    {
      title: "Cloud Engineer",
      icon: Cloud,
      skills: [
        "AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "CloudFormation", "Linux", "VPC", "IAM"
      ]
    },
    {
      title: "Full Stack Developer",
      icon: Code,
      skills: [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Flask", "Docker", "Git"
      ]
    },
    {
      title: "Agentic AI Engineer",
      icon: Brain,
      skills: [
        "Python", "LangChain", "LLMs (GPT, Claude)", "OpenAI API", "Hugging Face", "Streamlit", "Docker", "Gemini"
      ]
    },
    {
      title: "ML Engineer",
      icon: Database,
      skills: [
        "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "Jupyter", "MLflow", "Git"
      ]
    }
  ];

  const students = [
    {
      id: '1',
      name: 'Bhavesh Suthar',
      college: 'Shri Jain PG College',
      passingOutYear: '2025',
      github: 'https://github.com/bhaveshsuthar-63777',
      linkedin: 'https://www.linkedin.com/in/bhavesh-suthar-29a609212/',
      portfolio: 'https://1bhaveshportfolio.netlify.app/',
      photo: 'https://via.placeholder.com/150',
      role: 'Agentic AI - 107',
      availability: ['Offline']
    },
    {
      id: '2',
      name: 'Hardik Gothwal',
      college: 'Poornima College of Engineering',
      passingOutYear: '2026',
      github: 'https://github.com/hardik0501',
      linkedin: 'https://www.linkedin.com/in/hardik-gothwal-519821256',
      portfolio: 'https://hardikresume.netlify.app/',
      photo: 'https://via.placeholder.com/150',
      role: 'DevOps Engineer',
      availability: ['Offline']
    },
    {
      id: '3',
      name: 'Vikash Kumar Singh',
      college: 'Lovely Professional University',
      passingOutYear: '2026',
      github: 'https://github.com/vikashkumar991',
      linkedin: 'https://www.linkedin.com/in/vikash-kumar-singh-784146290',
      portfolio: 'https://dev-vikash.netlify.app',
      photo: 'https://via.placeholder.com/150',
      role: 'DevOps Engineer',
      availability: ['Offline']
    },
    {
      id: '4',
      name: 'Hemant Modi',
      college: 'Vivekananda Global University',
      passingOutYear: '2027',
      github: 'https://github.com/Hemantmodi-15',
      linkedin: 'https://www.linkedin.com/in/hemant-modi-3789a6209',
      portfolio: 'https://hemantmodiportfolio.netlify.app/',
      photo: 'https://via.placeholder.com/150',
      role: 'Machine Learning Engineer',
      availability: ['Offline']
    },
    {
      id: '5',
      name: 'Bhumika Dagdi',
      college: 'SKIT Jaipur',
      passingOutYear: '2026',
      github: 'https://github.com/Bhumika-Dagdi',
      linkedin: 'https://linkedin.com/in/bhumika-dagdi',
      portfolio: 'https://bhumika-dagdi.netlify.app/',
      photo: 'https://via.placeholder.com/150',
      role: 'Machine Learning Engineer',
      availability: ['Offline']
    },
    {
      id: '6',
      name: 'Divya Raghav',
      college: 'B K Birla Institute of Engineering & Technology',
      passingOutYear: '2025',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/in/d-raghav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      portfolio: 'https://divya-raghav.framer.ai/#portfolio',
      photo: 'https://via.placeholder.com/150',
      role: 'Agentic AI - 107',
      availability: ['Offline']
    }
  ];

  const states = [
    "Punjab", "Rajasthan", "Haryana", "Gujarat", "Maharashtra", "Karnataka", 
    "Tamil Nadu", "Telangana", "Odisha", "Madhya Pradesh", "Andhra Pradesh", 
    "Bihar", "Delhi NCR", "Jammu", "Uttarakhand", "Uttar Pradesh", "Jharkhand"
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection isVisible={isVisible} />
      <WhatIsHirexSection />
      <WhyCompaniesSection />
      <SkillsRolesSection skills={skills} />
      <StudentStatsSection states={states} />
      <HirexExperienceSection />
      <WhatCompaniesGetSection />
      <StudentProfilesSection students={students} />
      <HirexInterestSection />
      {/* <CallToActionSection /> */}
      <FooterSection />
    </div>
  );
}

export default App;