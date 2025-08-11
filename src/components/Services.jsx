import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeItem, setActiveItem] = useState(null);

  const services = [
    {
      category: 'Building Works',
      items: [
        {
          title: 'Structural Construction',
          desc: 'Building the framework of structures, including foundations, columns, beams, and load-bearing walls.',
        },
        {
          title: 'Roofing and Rainwater Disposal',
          desc: 'Installing durable roofs and gutter systems to protect buildings and channel rainwater away safely.',
        },
        {
          title: 'Renovations and Remodeling',
          desc: 'Upgrading or reconfiguring existing spaces to improve appearance, function, or layout.',
        },
        {
          title: 'Internal Finishes and External Works',
          desc: 'Completing interiors and exteriors with plastering, painting, flooring, landscaping, and driveways.',
        },
      ],
    },
    {
      category: 'Mechanical and Plumbing Works',
      items: [
        {
          title: 'Water Supply and Drainage',
          desc: 'Installing and maintaining systems that deliver clean water and remove wastewater safely.',
        },
        {
          title: 'Sanitary Installations',
          desc: 'Fitting toilets, sinks, showers, and other hygiene fixtures.',
        },
        {
          title: 'Rainwater Harvesting Systems',
          desc: 'Collecting, storing, and reusing rainwater for sustainable water management.',
        },
      ],
    },
    {
      category: 'Smart Building Systems',
      items: [
        {
          title: 'Smart Water Reticulation',
          desc: 'Automated control and monitoring of water distribution for efficiency and leak prevention.',
        },
        {
          title: 'Lighting Automation',
          desc: 'Smart lighting systems that adjust brightness, color, and schedules for comfort and savings.',
        },
        {
          title: 'Building Management Systems (BMS)',
          desc: 'Centralized control of HVAC, lighting, security, and utilities for improved performance.',
        },
        {
          title: 'IoT Integration and Remote Control',
          desc: 'Connecting devices for real-time monitoring, automation, and remote access.',
        },
      ],
    },
  ];

  return (
    <section id="services" className="bg-teal-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-700 mb-4">{service.category}</h3>
              <ul className="space-y-3 text-gray-700">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="relative group"
                    onMouseEnter={() => setActiveItem(`${index}-${i}`)}
                    onMouseLeave={() => setActiveItem(null)}
                    onClick={() =>
                      setActiveItem(activeItem === `${index}-${i}` ? null : `${index}-${i}`)
                    }
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="font-medium">{item.title}</span>
                    </div>

                    {/* Tooltip */}
                    {activeItem === `${index}-${i}` && (
                      <div
                        className="absolute z-10 left-0 mt-2 w-64 p-3 
                        bg-white border border-teal-300 rounded-lg shadow-lg 
                        text-sm text-teal-800 animate-fadeIn"
                      >
                        {item.desc}
                        <div className="absolute -top-2 left-6 w-3 h-3 bg-white border-l border-t border-teal-300 rotate-45"></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;