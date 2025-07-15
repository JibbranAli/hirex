import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Users, Award, Target } from 'lucide-react';

const WhyCompaniesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
            Why Should Companies Join <span className="text-red-600">HIREX</span>?
          </h2>
          <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block text-xl font-bold hover:bg-red-700 hover:scale-110 transition-all duration-500 animate-pulse">
            0 Cost to Recruit
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Users className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Validated Tech Talent from Across India</h3>
            <p className="text-gray-600">Pre-screened, project-tested candidates ready for immediate contribution</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Award className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Demo Zones</h3>
            <p className="text-gray-600">Assess student capabilities via working projects and live demonstrations</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.4s' }}>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Target className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">On-Spot Interviews & Offer Rollouts</h3>
            <p className="text-gray-600">Streamlined hiring process with immediate decision-making capabilities</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="text-center">
          <div className="bg-black text-white px-8 py-4 rounded-2xl inline-block hover:bg-gray-800 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl">
            <p className="text-2xl font-bold">50+ Companies Already Confirmed</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyCompaniesSection; 