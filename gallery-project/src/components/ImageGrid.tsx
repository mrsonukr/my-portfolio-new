import React from 'react';
import { Photo } from '../types';
import { ImageCard } from './ImageCard';

interface ImageGridProps {
  photos: Photo[];
  onImageClick: (index: number) => void;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ photos, onImageClick }) => {
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