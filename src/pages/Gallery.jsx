import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const loadMoreImages = () => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      const newImages = Array.from({ length: 10 }, (_, i) => ({
        id: images.length + i + 1,
        url: `https://picsum.photos/400/300?random=${images.length + i + 1}`,
        title: `Image ${images.length + i + 1}`
      }));
      setImages(prev => [...prev, ...newImages]);
      setLoading(false);
      setPage(prev => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting && !loading) {
          loadMoreImages();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 dark:bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div
          ref={loaderRef}
          className="flex justify-center items-center h-20 mt-8"
        >
          {loading && (
            <div className="animate-pulse space-x-4">
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <div className="h-3 w-3 bg-primary rounded-full"></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;