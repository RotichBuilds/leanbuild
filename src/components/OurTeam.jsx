import React from 'react';

const OurTeam = () => {
  return (
    <section id="ourteam" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>Lean Build</strong> is powered by a Multidisciplinary Team of Seasoned Professionals dedicated to Excellence in Construction and Project Delivery.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          <strong>Our dynamic team includes:</strong>
          <br />
          Project Managers, Architects, Engineers, Supervisors, Technicians, and Skilled Artisans.
          Each member brings a wealth of experience and a commitment to ensuring that every project is delivered <span className="text-green-700 font-medium">on Time, within Budget, and to the Highest Standards.</span>
        </p>
      </div>
    </section>
  );
};

export default OurTeam;