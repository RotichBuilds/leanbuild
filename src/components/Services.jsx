import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Building Works',
      items: [
        'Structural Construction',
        'Roofing and Rainwater Disposal',
        'Renovations and Remodeling',
        'Internal Finishes and External Works',
      ],
    },
    {
      category: 'Mechanical and Plumbing Works',
      items: [
        'Water Supply and Drainage',
        'Sanitary Installations',
        'Rainwater Harvesting Systems',
      ],
    },
    {
      category: 'Smart Systems Integration',
      items: [
        'Smart Water Reticulation',
        'Lighting Automation',
        'Building Management Systems (BMS)',
        'IoT Integration and Remote Control',
      ],
    },
  ];

  return (
    <section id="services" className="bg-teal-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-700 max-w-3xl mb-4">{service.category}</h3>
              <ul className="space-y-2 text-gray-700">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;