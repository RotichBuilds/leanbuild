import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-4">
          Have a project in mind? We'd love to hear from you.
        </p>

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
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
