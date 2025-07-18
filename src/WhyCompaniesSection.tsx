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
            ZERO Cost to Recruit
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Users className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Access to 500+ skilled fresher talent from The Creator 2025 program</h3>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Award className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Zero cost to hire — No consultancy or recruitment fee</h3>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Target className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Students trained in DevOps, AI, Cloud, MLOps, Full Stack & more</h3>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Users className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Spot interviews & offers based on real projects</h3>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="text-center">
          <div className="bg-green-500 text-white px-8 py-4 rounded-2xl inline-block hover:bg-green-600 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl">
            <p className="text-2xl font-bold">50+ Companies Already Confirmed</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyCompaniesSection; 