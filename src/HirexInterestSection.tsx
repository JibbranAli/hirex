import React, { useState } from 'react';

const HirexInterestSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    email: '',
    contact: '',
    interestedIn: 'fulltime',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, interestedIn: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using appropriate endpoint based on environment
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3001/api/send-email' 
        : '/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          companyName: form.companyName,
          designation: form.designation,
          email: form.email,
          contact: form.contact,
          interestedIn: form.interestedIn
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({
          fullName: '',
          companyName: '',
          designation: '',
          email: '',
          contact: '',
          interestedIn: 'fulltime',
        });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to submit form. Please try again or contact us directly at technical@lwindia.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[500px] flex flex-col md:flex-row">
      {/* Left Info Section */}
      <div className="md:w-1/2 w-full bg-gradient-to-r from-[#a80000] to-[#e60000] text-white flex flex-col justify-center px-8 py-12 md:py-0 md:pl-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Want to be a part of</h2>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-2">
          India's Fresher<br />Hiring Revolution?
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join us at <span className="font-bold">HIREX 2025</span> & meet the most industry-ready talent you've ever seen.<br />
          <span className="font-bold">We don't talk skills, we prove them</span>
        </p>
        <div className="flex items-center mt-8 space-x-8">
          <div className="flex items-center">
            <span className="bg-white text-red-700 rounded-full p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-base md:text-lg">01<sup>st</sup> - 05<sup>th</sup> August, 2025</span>
          </div>
          <div className="flex items-center">
            <span className="bg-white text-red-700 rounded-full p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10-4v4m0 0l-4 4m4-4l4 4" />
              </svg>
            </span>
            <span className="text-base md:text-lg">Online & Offline (@ Jaipur) available</span>
          </div>
        </div>
      </div>
      {/* Right Form Section */}
      <div className="md:w-1/2 w-full bg-white flex flex-col justify-center px-8 py-12 md:py-0 md:pr-16">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
          Submit your Interest to hire validated, skilled tech talent at ZERO cost
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="flex-1 border-b-2 border-red-700 focus:outline-none focus:border-red-900 py-2 px-2 mb-4 md:mb-0 bg-transparent placeholder:text-gray-500"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange}
              required
              className="flex-1 border-b-2 border-red-700 focus:outline-none focus:border-red-900 py-2 px-2 mb-4 md:mb-0 bg-transparent placeholder:text-gray-500"
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={form.designation}
              onChange={handleChange}
              required
              className="flex-1 border-b-2 border-red-700 focus:outline-none focus:border-red-900 py-2 px-2 bg-transparent placeholder:text-gray-500"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Official E-mail ID"
              value={form.email}
              onChange={handleChange}
              required
              className="flex-1 border-b-2 border-red-700 focus:outline-none focus:border-red-900 py-2 px-2 mb-4 md:mb-0 bg-transparent placeholder:text-gray-500"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              value={form.contact}
              onChange={handleChange}
              required
              className="flex-1 border-b-2 border-red-700 focus:outline-none focus:border-red-900 py-2 px-2 bg-transparent placeholder:text-gray-500"
            />
          </div>
          <div className="flex items-center space-x-8 mt-2">
            <span className="text-gray-700 font-medium">Interested in</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="interestedIn"
                value="fulltime"
                checked={form.interestedIn === 'fulltime'}
                onChange={handleRadio}
                className="accent-red-700"
              />
              <span className="text-gray-700">Hiring Full Time</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="interestedIn"
                value="interns"
                checked={form.interestedIn === 'interns'}
                onChange={handleRadio}
                className="accent-red-700"
              />
              <span className="text-gray-700">Hiring Interns</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-700 hover:bg-red-800'
            } text-white px-8 py-3 rounded-md font-bold text-lg mt-4 transition-all duration-300 shadow-md`}
          >
            {loading ? 'Sending...' : 'Submit Interest'}
          </button>
          {error && (
            <div className="text-red-600 font-semibold mt-2">{error}</div>
          )}
          {submitted && (
            <div className="text-green-600 font-semibold mt-2">Thank you for your interest! We'll get back to you soon.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default HirexInterestSection; 