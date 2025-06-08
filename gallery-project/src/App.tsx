import React, { useState } from 'react';
import { Header } from './components/Header';
import { ImageGrid } from './components/ImageGrid';
import { PhotoViewer } from './components/PhotoViewer';
import { photos } from './data/photos';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleImageClick = (index: number) => {
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Beautiful Photography
          </h2>
          <p className="text-gray-600">
            Explore our curated collection of stunning images from talented photographers around the world.
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
    </div>
  );
}

export default App;