import React from 'react';

const OurTeam = () => {
  return (
    <section id="ourteam" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">
          Our Team
        </h2>
        <p className="text-teal-800 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          <strong>Lean Build</strong> is powered by a Multidisciplinary Team of Seasoned Professionals dedicated to Excellence in Construction and Project Delivery.
        </p>
        <p className="text-teal-700 text-lg leading-relaxed max-w-3xl mx-auto">
          <strong className="font-semibold">Our dynamic team includes:</strong>
          <br />
          Project Managers, Architects, Engineers, Supervisors, Technicians, and Skilled Artisans.<br />
          Each member brings a wealth of experience and a commitment to ensuring that every project is delivered{" "}
          <span className="text-green-700 font-semibold">
            on Time, within Budget, and to the Highest Standards.
          </span>
        </p>
      </div>
    </section>
  );
};

export default OurTeam;