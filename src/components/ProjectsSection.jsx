import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.mssonukr.workers.dev/api/repos/mrsonukr');
        const data = await response.json();
        const featuredProjects = data.filter(project => project.featurePost === "true");
        setProjects(featuredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <ProjectCard key={`skeleton-${i}`} loading={true} />
            ))
          ) : (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} loading={false} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;