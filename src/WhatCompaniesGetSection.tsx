import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Database, Building2, Users, Award, Globe } from 'lucide-react';

const WhatCompaniesGetSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 hover:text-red-600 transition-colors duration-500">
            What Companies Get at <span className="text-red-600">HIREX</span>
          </h2>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Database className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Talent Directory</h3>
            <p className="text-gray-600">GitHub, portfolios & project details</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Building2 className="w-8 h-8 text-green-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interview Booths</h3>
            <p className="text-gray-600">On-the-spot Technical + HR rounds</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Resume Bank</h3>
            <p className="text-gray-600">Post-event access to all unplaced candidates</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.3s' }}>
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Award className="w-8 h-8 text-orange-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recruiter Support</h3>
            <p className="text-gray-600">Pre-screening by LinuxWorld team</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105" style={{ animationDelay: '0.4s' }}>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Globe className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Branding</h3>
            <p className="text-gray-600">Featured on social media, website, reels</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhatCompaniesGetSection; 