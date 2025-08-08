import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 relative">
      {/* Fixed Navbar at top */}
      <Navbar />

      {/* Main content, pushed down by navbar height */}
      <main className="pt-16 flex-grow z-10">
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <Footer />

      {/* Global modal mount point for React Portals (optional) */}
      <div id="modal-root" className="fixed inset-0 z-[9999] pointer-events-none" />
    </div>
  );
};

export default Layout;