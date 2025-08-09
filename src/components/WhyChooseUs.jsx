import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "End-to-End Construction, MEP and Smart Building Solutions",
  "Compliance with Kenyan and International Building Codes",
  "Use of Quality-Assured Materials and Certified Professionals",
  "Transparency in Communication from Project Initiation to Completion",
  "Strict Commitment to Timelines and Budget Control",
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">
          Why Choose Us
        </h2>
        <p className="text-lg text-teal-700 mb-10 max-w-2xl mx-auto">
          At Lean Build Limited, we offer more than just Construction — we deliver Trust, Innovation, and Excellence in every Project.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start text-left max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <CheckCircle className="text-green-700 mt-1h min-w-[24px]" size={24} />
              <p className="text-base text-teal-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;