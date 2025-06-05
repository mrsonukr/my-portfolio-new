import React from 'react';
import { Github, ExternalLink, Image } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({ project, loading }) => {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <Image className="w-12 h-12 text-gray-400 dark:text-gray-600" />
        </div>
        <div className="p-6">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="flex gap-3 mt-4">
            <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  const hasBanner = project.banner && project.banner !== "https://example.com/banner.jpg";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="relative overflow-hidden h-48">
        {hasBanner ? (
          <LazyLoadImage
            src={project.banner}
            alt={project.name}
            effect="blur"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E"
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <Image className="w-12 h-12 text-gray-400 dark:text-gray-600" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
          {project.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description || 'No description available'}
        </p>
        <div className="flex gap-3">
          <a
            href={project.demoLink || project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.html_url}
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
};

export default ProjectCard;