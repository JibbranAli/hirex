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
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Database icon or similar */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Talent Directory</h3>
            <p className="text-gray-600 text-sm">Full access to verified student profiles, including GitHub links, portfolios, and real-world project showcases</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Interview icon */}
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h6"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Interview Booth</h3>
            <p className="text-gray-600 text-sm">Dedicated space for live technical + HR interview rounds during the event</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Resume icon */}
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 9h6M9 13h6"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Resume Bank</h3>
            <p className="text-gray-600 text-sm">Post-event access to resumes of all unplaced, skilled candidates</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Globe/Branding icon */}
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Branding & Visibility</h3>
            <p className="text-gray-600 text-sm">Your company will be prominently featured across our social media, website, event PR, and highlight reels</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Award/Support icon */}
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Recruiter Support</h3>
            <p className="text-gray-600 text-sm">Pre-screened candidates, coordinated schedules, and on-ground support by the LinuxWorld team</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Star/Early Access icon */}
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Early Access to Top Talent</h3>
            <p className="text-gray-600 text-sm">Get priority access to shortlist and connect with top-performing students even before the event day</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhatCompaniesGetSection; 