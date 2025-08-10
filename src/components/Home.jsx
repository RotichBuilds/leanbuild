import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
    className="relative flex flex-col justify-center items-center bg-gradient-to-b from-white via-gray-100 to-gray-200 px-4 sm:px-6 md:px-12 lg:px-20 text-center overflow-auto py-12"
    style={{ minHeight: 'calc(100vh - 64px)' }} // subtract navbar height here
    >
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-0">

        {/* Highlighted Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-tealbrand /*uppercase*/ tracking-widest mb-4 animate-pulse">
          We Build. We Connect. We Automate.
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-md">
          Welcome to Lean Build Limited
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
          Delivering <span className="font-medium text-tealbrand">Smart Construction Solutions </span> 
          with Integrity, Innovation, and Impact.
        </p>

        {/* CTA Buttons */}
        {/*
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-2 sm:px-0">
          <Link
            to="projects"
            className="bg-tealbrand text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealbrand transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            className="bg-white border border-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300"
          >
            Contact Us
          </Link>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-2 sm:px-0">
          <Link
            to="/projects"
            className="bg-tealbrand text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealbrand transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300"
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

export default Home;
