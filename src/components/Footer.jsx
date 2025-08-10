import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-teal-800 text-white px-4 md:px-10 pt-2 pb-4 md:pt-4 md:pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left: Logo + Description */}
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Lean Build Logo" className="h-14 w-auto object-contain"/>
          <p className="text-sm max-w-xs text-gray-200">
            We are committed to Deliver Excellence in Construction, Smart Systems, and Sustainable Building Solutions.
          </p>
        </div>

        {/* Center: Horizontal Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          
          <ul className="flex flex-wrap justify-center gap-6 text-base">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-5 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaTwitter /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaTiktok /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaLinkedinIn /></a>
            <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-teal-700 mt-1 pt-1 pb-0 mb-0 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Lean Build Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;