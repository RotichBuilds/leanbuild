import React from 'react';
import { CheckCircle } from 'lucide-react';

const coreValues = [
  { label: "Integrity", desc: "We uphold honesty and transparency in all projects." },
  { label: "Excellence", desc: "Quality is our signature." },
  { label: "Innovation", desc: "We apply modern technologies and solutions." },
  { label: "Safety", desc: "We prioritize health and safety in all operations." },
  { label: "Sustainability", desc: "We promote eco-friendly and efficient practices." },
  { label: "Compliance", desc: "We are fully registered and licensed by NCA and comply with all statutory regulations." },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h2 className="text-3xl font-bold text-teal-800 mb-8 tracking-wide drop-shadow-sm text-center">
          Company Overview
        </h2>

        {/* Company Overview Card */}
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 w-full flex justify-center mb-6 border border-teal-100">
          <div className="max-w-5xl text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              <strong className="text-teal-700">Lean Build Limited</strong> is a registered and licensed construction company in Kenya, offering comprehensive solutions in general construction,
              mechanical and plumbing installations, and smart systems integration.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to delivering innovative, safe, and sustainable construction services tailored to the evolving needs of modern infrastructure in residential,
              commercial, and institutional sectors — seamlessly integrating advanced technologies into every stage of our service delivery.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-3 w-full mb-6">
          <div className="bg-white border border-teal-200 rounded-xl shadow-md p-6 w-full hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-teal-700 mb-3 text-center">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base text-center">
              To be a leading provider of integrated construction and smart building solutions in East Africa.
            </p>
          </div>

          <div className="bg-white border border-teal-200 rounded-xl shadow-md p-6 w-full hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-teal-700 mb-3 text-center">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base text-center">
              To provide client-focused, efficient, and sustainable construction and MEP solutions through skilled workmanship, modern technology, and strict adherence to standards.
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="bg-gray-50 rounded-xl shadow-lg px-4 sm:px-6 py-6 w-full border border-teal-100">
          <h3 className="text-2xl font-semibold text-teal-700 mb-4 sm:mb-6 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-3 hover:shadow-md transition w-full border border-gray-100"
              >
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-teal-700">{value.label}</h4>
                  <p className="text-gray-700 text-sm leading-snug">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;