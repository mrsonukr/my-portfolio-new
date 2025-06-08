import React from 'react';
import ImageCard from './ImageCard';

export const ImageGrid = ({ photos, onImageClick }) => {
  return (
    <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {photos.map((photo, index) => (
        <div key={photo.id} className="break-inside-avoid">
          <ImageCard
            photo={photo}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};