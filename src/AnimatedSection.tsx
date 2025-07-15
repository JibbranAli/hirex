import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref as any}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 