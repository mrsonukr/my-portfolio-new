import React from "react";
import { Github, ExternalLink, Image, Star } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectCard = ({ project, loading }) => {
  if (loading) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-500 ease-in-out animate-pulse min-h-[300px]">
        <div className="relative aspect-square bg-gray-700 overflow-hidden">
          <div className="w-full h-full bg-gray-700"></div>
        </div>
        <div className="p-3">
          <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6 mb-3"></div>
          <div className="flex gap-1">
            <div className="flex-1 h-8 bg-gray-700 rounded"></div>
            <div className="flex-1 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const hasBanner =
    project.banner && project.banner !== "https://example.com/banner.jpg";

  const {
    name = 'Untitled',
    banner = '',
    description = '',
    category = 'Uncategorized',
    html_url = '',
    demoLink = '',
    date = '',
    stars = 0
  } = project;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-500 ease-in-out group cursor-pointer">
      {/* Banner Image */}
      <div className="relative aspect-square bg-gray-700 overflow-hidden">
        {hasBanner ? (
          <div className="w-full h-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <LazyLoadImage
              src={banner}
              alt={name}
              effect="blur"
              className="w-full h-full object-cover"
              placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg";
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <Image className="w-12 h-12 text-gray-600" />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
            {category || 'Project'}
          </span>
        </div>

        {/* Date Badge */}
        {date && (
          <div className="absolute top-3 left-3">
            <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
              {date}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-400 mb-2 line-clamp-2 min-h-[2.5em]">
          {description || "No description available"}
        </p>

        {/* Stars/Stats */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {stars > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-medium text-white">{stars}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">
              {category || 'Web'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1">
          <a
            href={demoLink || html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-black px-2 py-1.5 rounded text-xs font-medium hover:bg-opacity-80 transition-colors duration-200 flex items-center justify-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Preview
          </a>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-1"
          >
            <Github className="w-3 h-3" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
