// src/components/features/Home/HomeImageList.tsx
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage';
import ImageTile from '../../common/ImageTile/ImageTile';
import { Link } from 'react-router-dom';
import LoadingMessage from '../../common/LoadingMessage/LoadingMessage';
import React from 'react';
import useFetchImageList from '../../../hooks/useFetchImageList';

const HomeImageList: React.FC = () => {
  const { isLoading, isError, data, error } = useFetchImageList();

  if (isLoading) return <LoadingMessage />;
  if (isError) return <ErrorMessage message={`Error fetching images: ${error?.message}`} />;
  if (!data) return <ErrorMessage message="No images available." />;

  const firstRowImages = data.slice(0, 6);

  return (
    <div className="home-image-list">
      <div className="image-grid">
        {firstRowImages.map((image) => (
          <ImageTile key={image.name} image={image} />
        ))}
      </div>
      <Link to="/gallery" className="view-gallery-link">View Gallery &#8250;</Link>
    </div>
  );
};

export default HomeImageList;