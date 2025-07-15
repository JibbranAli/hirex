import React from 'react';
import AnimatedSection from './AnimatedSection';
import ComparisonFeature from './ComparisonFeature';

const HirexExperienceSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
            The <span className="text-red-600">HIREX</span> Experience
          </h2>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-2xl hover:bg-red-100 hover:scale-105 transition-all duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Say Goodbye To</h3>
            <div className="space-y-4">
              <ComparisonFeature text="CGPA filters" isPositive={false} />
              <ComparisonFeature text="Tier-1 College Bias" isPositive={false} />
              <ComparisonFeature text="Theoretical Interviews" isPositive={false} />
              <ComparisonFeature text="Mass Resumes" isPositive={false} />
              <ComparisonFeature text="No Validation" isPositive={false} />
            </div>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl hover:bg-green-100 hover:scale-105 transition-all duration-500 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Say Hello To</h3>
            <div className="space-y-4">
              <ComparisonFeature text="Real Project Evaluations" isPositive={true} />
              <ComparisonFeature text="Live Demos & Project Booths" isPositive={true} />
              <ComparisonFeature text="Interview Tokening System" isPositive={true} />
              <ComparisonFeature text="Skill-Based Pre-Matched Candidates" isPositive={true} />
              <ComparisonFeature text="Dedicated Hiring Booths" isPositive={true} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HirexExperienceSection; 