import React, { useState } from "react";
import EmailJs from "./EmailJs";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const isActive = showForm; // "you" is active when form is open

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-4">
        Have a project in mind? We'd love to hear from you. </p>
        {/*{" "}
          <button
            onClick={() => setShowForm(true)}
            className={`relative inline font-semibold px-2 py-1 rounded underline decoration-teal-300 cursor-pointer transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
              ${
                isActive
                  ? "bg-teal-600 text-white hover:bg-teal-700 decoration-teal-800"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }
            `}
            aria-label="Open contact form"
          >
            you

            {/* Tooltip */}
            {/*<span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-teal-800 text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
              🏗️ Let’s build something great together — contact us!
            </span>
          </button>
        </p> */}

        {/* Your existing contact info */}
        <div className="text-gray-800 text-base space-y-2 leading-relaxed">
          <p className="text-xl font-semibold text-teal-900">Lean Build Limited</p>
          <p>P.O. Box 285 – 20152, Nakuru.</p>
          <p>
            Phone:&nbsp;
            <a href="tel:+254720569463" className="text-teal-700 hover:underline">
              +254 720 569 463
            </a>{" "}
            or{" "}
            <a href="tel:+254700323400" className="text-teal-700 hover:underline">
              +254 700 323 400
            </a>
          </p>
          <p>
            Email:&nbsp;
            <a href="mailto:info@leanbuild.co.ke" className="text-teal-700 hover:underline">
              info@leanbuild.co.ke
            </a>
          </p>
          <p>Location: Greyville Hub, Nairobi, Kenya. </p>
        </div>
      </div>

      {/* Show contact form modal when active */}
      {showForm && <EmailJs onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Contact;
