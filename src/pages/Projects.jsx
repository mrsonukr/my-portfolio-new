import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';
import Filter from '../components/ui/Filter';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'all',
    'web',
    'mobile',
    'ui/ux',
    'backend'
  ];

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [paginatedProjects, setPaginatedProjects] = useState([]);

  useEffect(() => {
    const filtered = allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page when filters change
    window.scrollTo({ top: 0 });
    setIsLoading(false);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    setPaginatedProjects(filteredProjects.slice(startIndex, endIndex));
    window.scrollTo({ top: 0 });
  }, [currentPage, filteredProjects]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full" style={{ minHeight: '800px' }}>

        <div className="mx-auto mb-12">
          <Filter 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))}
            placeholder="Search projects..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <ProjectCard key={`skeleton-${i}`} loading={true} />
            ))
          ) : (
            paginatedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${currentPage === page
                    ? 'bg-primary text-black'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;