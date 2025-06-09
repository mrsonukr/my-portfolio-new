import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Heart, Share2 } from 'lucide-react';
import { useKeyboard } from '../../hooks/useKeyboard';

export const PhotoViewer = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const currentPhoto = photos[currentIndex];

  useKeyboard(isOpen, onNext, onPrev, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsImageLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentIndex]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110"
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110"
        disabled={currentIndex === photos.length - 1}
      >
        <ChevronRight size={24} />
      </button>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110"
      >
        <X size={24} />
      </button>

      {/* Action Buttons */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110">
          <Heart size={20} />
        </button>
        <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110">
          <Share2 size={20} />
        </button>
        <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white hover:scale-110">
          <Download size={20} />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative max-w-[90vw] max-h-[90vh] mx-4">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/30 border-t-white" />
          </div>
        )}
        
        <img
          src={currentPhoto.url}
          alt={currentPhoto.alt}
          className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 ${
            isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Image Info */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white max-w-md mx-auto">
          <h3 className="font-semibold text-lg mb-1">{currentPhoto.alt}</h3>
          <p className="text-sm opacity-90 mb-2">by {currentPhoto.photographer}</p>
          <div className="flex items-center justify-between text-xs opacity-75">
            <span className="bg-white/20 px-2 py-1 rounded-full">{currentPhoto.category}</span>
            <span>{currentIndex + 1} of {photos.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};