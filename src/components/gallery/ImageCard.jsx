import React, { useState } from 'react';

const ImageCard = ({ photo, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-[1.02]"
      onClick={onClick}
    >
      {!isLoaded && !isError && (
        <div 
          className="animate-pulse bg-gray-200 dark:bg-gray-700"
          style={{ aspectRatio: `${photo.width}/${photo.height}` }}
        />
      )}
      
      <img
        src={photo.url}
        alt={photo.alt}
        className={`w-full h-auto object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } group-hover:brightness-110`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        loading="lazy"
      />
      
      {/* Always visible bottom info overlay */}
      {isLoaded && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
          <div className="text-white">
            <p className="text-xs font-medium mb-1 opacity-90">{photo.category}</p>
            <p className="text-xs opacity-75">by {photo.photographer}</p>
          </div>
        </div>
      )}
      
      {isError && (
        <div className="flex items-center justify-center h-48 text-gray-400 dark:text-gray-600">
          <p className="text-sm">Failed to load image</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;