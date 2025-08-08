import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const mockProjectData = [
  {
    id: 'project-1',
    title: 'Elegant Staircase Railing',
    description: 'Custom stainless steel and glass railing for a modern home.',
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg',
    ],
  },
  {
    id: 'project-2',
    title: 'Luxury Balcony Fence',
    description: 'Powder-coated aluminum railings with wood-textured finish.',
    images: [
      '/images/project2-1.jpg',
      '/images/project2-2.jpg',
    ],
  },
  // Add more as needed
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = mockProjectData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="p-6 text-center text-red-600">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-teal-600 hover:text-teal-800 mb-4"
        >
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </button>

        <h1 className="text-3xl font-bold mb-2 text-teal-700">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`${project.title} - ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg border border-teal-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
