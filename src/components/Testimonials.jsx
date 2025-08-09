import React from 'react';

const testimonials = [
  {
    name: "Jane Mwangi",
    role: "Private Client – Residential Project",
    quote:
      "Lean Build Limited exceeded our expectations. Their professionalism, timely delivery, and attention to detail are unmatched. I highly recommend them!",
  },
  {
    name: "David Otieno",
    role: "Facilities Manager – Commercial Complex",
    quote:
      "From plumbing installations to smart system integration, their work was seamless. We’ll definitely engage them for future projects.",
  },
  {
    name: "Eng. Achieng’ Oduor",
    role: "Consulting Engineer",
    quote:
      "Their commitment to quality and safety makes Lean Build Limited a reliable partner in construction. I’ve worked with them on multiple successful projects.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-8 tracking-wide drop-shadow-sm">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <h4 className="text-lg font-semibold text-teal-700">{testimonial.name}</h4>
              <p className="text-sm text-gray-700">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;