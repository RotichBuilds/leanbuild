import React from 'react';
import { CheckCircle } from 'lucide-react';

const Compliance = () => {
  const items = [
    'Registered under Companies Act of Kenya',
    'KRA Registered and Tax Compliant',
    'NCA Registered, Licensed and Compliant',
  ];

  return (
    <section id="compliance" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">
          Compliance & Registration
        </h2>
        <ul className="text-teal-700 space-y-6 max-w-3xl mx-auto text-lg">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-4"
            >
              <CheckCircle className="text-green-700" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compliance;