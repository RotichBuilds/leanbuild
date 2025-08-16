import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
    >
      <div
        className="relative bg-white rounded-lg max-w-3xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
          aria-label="Close Modal"
        >
          <FiX size={28} />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold mb-4 text-center">{project.title}</h2>

        {/* Swiper with images */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="rounded-md"
        >
          {project.images.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgUrl}
                alt={`Project ${project.title} - Slide ${index + 1}`}
                className="w-full h-80 object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Updated descriptions */}
        {project.description && (
          <p className="mt-4 text-gray-600 text-center">{project.description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;