import React, { useState } from 'react';
import { ImageGrid } from '../components/gallery/ImageGrid';
import { PhotoViewer } from '../components/gallery/PhotoViewer';
import { photos } from '../data/gallery-photos';
import Footer from '../components/Footer';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev < photos.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
           Explore My Journey Through Photos
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dive into a personal gallery featuring moments from events I’ve attended and behind-the-scenes glimpses of my creative work.
          </p>
        </div>

        <ImageGrid
          photos={photos}
          onImageClick={handleImageClick}
        />
      </main>

      <PhotoViewer
        photos={photos}
        currentIndex={currentImageIndex}
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
      
      <Footer />
    </div>
  );
};

export default Gallery;