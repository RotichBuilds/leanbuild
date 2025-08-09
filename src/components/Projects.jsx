import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 'smart-home-wiring',
    title: 'Smart Home Wiring',
    description: 'Automated lighting and security systems integrated into modern homes.',
    images: ['/images/project1.jpg', '/images/project1-2.jpg'],
    details: 'This project involved complete smart automation for a 5-bedroom villa, including Alexa integration and mobile app control.'
  },
  {
    id: 'office-fit-out',
    title: 'Office Fit-Out',
    description: 'Custom partitioning, smart access, and ELV integration for a corporate office.',
    images: ['/images/project2.jpg', '/images/project2-2.jpg'],
    details: 'A 10,000 sq. ft. office designed with high-efficiency networking, biometric access, and custom lighting systems.'
  },
  {
    id: 'data-center-cabling',
    title: 'Data Center Cabling',
    description: 'Structured cabling and power solutions for high-performance data centers.',
    images: ['/images/project3.jpg', '/images/project3-2.jpg'],
    details: 'We implemented redundant structured cabling, rack systems, and UPS backup for 99.9% uptime assurance.'
  },
  {
    id: 'apartment-renovation',
    title: 'Apartment Renovation',
    description: 'Modern interior and electrical upgrades for multi-unit residential buildings.',
    images: ['/images/project4.jpg', '/images/project4-2.jpg'],
    details: 'The project included energy-efficient lighting, smart meters, and modern design finishes in 24 units.'
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleRouteToProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-teal-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
                <p className="text-teal-700 text-sm">{project.description}</p>
                {/*<button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRouteToProject(project.id);
                  }}
                  className="mt-4 inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                >
                  View Project
                </button>*/}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;