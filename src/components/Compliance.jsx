import React from 'react';
import { CheckCircle } from 'lucide-react';

const Compliance = () => {
  const items = [
    'Registered under the Companies Act of Kenya',
    'KRA Registered and Tax Compliant',
    'NCA Registered, Licensed and Compliant',
  ];

  return (
    <section id="compliance" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Compliance & Registration
        </h2>
        <ul className="text-lg text-gray-700 space-y-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-3 text-base md:text-lg"
            >
              <CheckCircle className="text-green-600" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compliance;