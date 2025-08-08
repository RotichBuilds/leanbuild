import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return; // Only run scroll logic on homepage

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "projects", "contact"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const renderNavItem = (item) =>
    isHome ? (
      <ScrollLink
        key={item.id}
        to={item.id}
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className={`cursor-pointer font-medium transition-colors duration-200 ${
          active === item.id ? "text-tealbrand" : "text-gray-700"
        } hover:text-tealbrand`}
        onClick={() => setNavOpen(false)}
      >
        {item.label}
      </ScrollLink>
    ) : (
      <RouterLink
        key={item.id}
        to="/"
        className="cursor-pointer font-medium text-gray-700 hover:text-tealbrand"
        onClick={() => setNavOpen(false)}
      >
        {item.label}
      </RouterLink>
    );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <RouterLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-tealbrand"
          onClick={() => setNavOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Lean Build Logo"
            className="h-8 w-auto" // You can increase h-8 to h-10 or more if needed
          />
          <span>Lean Build</span>
        </RouterLink>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>{renderNavItem(item)}</li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} aria-label="Toggle Menu">
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <li key={item.id}>{renderNavItem(item)}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;