import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <div className="relative overflow-hidden ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
        {project.date}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex gap-3">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          <span>Live Demo</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
