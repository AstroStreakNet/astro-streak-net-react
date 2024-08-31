// src/components/common/ImageTile/ImageTile.tsx
import { Image } from '../../../types/image';
import React from 'react';

interface ImageTileProps {
  image: Image;
}

const ImageTile: React.FC<ImageTileProps> = ({ image }) => {
  return (
    <div className="image-tile">
      <img src={image.url} alt={image.name} />
      <p>{image.name}</p>
    </div>
  );
};

export default ImageTile;