import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Pass the project array as a prop from a parent component
const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  if (!project)
    return <p className="text-center text-red-600 mt-10">Project not found!</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-4">{project.title}</h2>
      <p className="text-sm sm:text-base text-teal-700 mb-6">{project.details}</p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {project.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${project.title}-${idx}`}
              className="w-full h-50 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;