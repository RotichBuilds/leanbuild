import React from 'react';

const SectionWrapper = ({ id, children, bg = 'bg-white' }) => {
  return (
    <section
      id={id}
      className={`${bg} py-12 md:py-16 px-6 md:px-12`} // uniform vertical & horizontal padding
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;