import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-gray-200 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Highlighted Slogan */}
        <p className="text-xl md:text-2xl font-semibold text-tealbrand uppercase tracking-[0.3em] mb-4 animate-pulse">
          We Build. We Connect. We Automate.
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-md">
          Welcome to Lean Build Limited
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Delivering <span className="font-medium text-tealbrand">Smart Construction Solutions </span> 
          with Integrity, Innovation, and Impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-tealbrand text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealbrand transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Optional: Light background texture */}
      <div className="absolute inset-0 opacity-5 z-0 bg-[url('/background-pattern.svg')] bg-cover bg-center pointer-events-none" />
    </section>
  );
};

export default Hero;