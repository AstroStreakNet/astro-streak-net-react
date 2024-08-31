// src/components/features/ImageInfo/ImageDetails.tsx
import { Image } from '../../../types/image';
import React from 'react';

interface ImageDetailsProps {
  image: Image;
}

const ImageDetails: React.FC<ImageDetailsProps> = ({ image }) => {
  return (
    <div className="image-details">
      <img src={image.url} alt={image.name} className="image-full" />
      <div className="image-info">
        <h2>{image.name}</h2>
        <p>Uploader: {image.uploader}</p>
        <p>Upload Date: {new Date(image.uploadDate).toLocaleDateString()}</p>
        <div className="image-tags">
          {image.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;