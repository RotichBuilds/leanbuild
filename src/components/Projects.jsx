import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local images
import modernised_rural_elev1 from '../assets/raw/modernised_rural/modernised_rural_elev1.jpg';
import modernised_rural_elev2 from '../assets/raw/modernised_rural/modernised_rural_elev2.jpg';
import modernised_rural_elev3 from '../assets/raw/modernised_rural/modernised_rural_elev3.jpg';
import modernised_rural_elev4 from '../assets/raw/modernised_rural/modernised_rural_elev4.jpg';
import modernised_rural_elev5 from '../assets/raw/modernised_rural/modernised_rural_elev5.jpg';

import minimalistic_interior1 from '../assets/raw/minimalistic_interior/minimalistic_interior1.jpg';
import minimalistic_interior2 from '../assets/raw/minimalistic_interior/minimalistic_interior2.jpg';
import minimalistic_interior3 from '../assets/raw/minimalistic_interior/minimalistic_interior3.jpg';
import minimalistic_interior4 from '../assets/raw/minimalistic_interior/minimalistic_interior4.jpg';
import minimalistic_interior5 from '../assets/raw/minimalistic_interior/minimalistic_interior5.jpg';


const projects = [
  {
    id: 'modernised_rural_concepts',
    title: 'Modernised Rural Concepts',
    description: 'Compact, elegant modern home designed for comfort, aesthetics, and functionality.',
    images: [modernised_rural_elev1, modernised_rural_elev2, modernised_rural_elev3, modernised_rural_elev4, modernised_rural_elev5],
    details:
      'Its use of natural materials, clean lines, and integration with landscaped outdoor spaces gives it a luxurious yet approachable feel, ideal for a suburban or semi-rural setting.'
  },
  {
    id: 'interior_concepts',
    title: 'Minimalistic Interior Concepts',
    description: '',
    images: [minimalistic_interior1, minimalistic_interior2, minimalistic_interior3, minimalistic_interior4,minimalistic_interior5],
    details:
      ''
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
        <h2 className="text-3xl font-bold text-teal-900 mb-8 tracking-wide drop-shadow-sm">
          Our Projects
        </h2>
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