// src/pages/ImageInfoPage.tsx
import ErrorMessage from '../components/common/ErrorMessage/ErrorMessage';
import ImageDetails from '../components/features/ImageInfo/ImageDetails';
import LoadingMessage from '../components/common/LoadingMessage/LoadingMessage';
import React from 'react';
import { useFetchImage } from '../hooks';
import { useParams } from 'react-router-dom';

const ImageInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: image, isLoading, error } = useFetchImage(id);

  if (isLoading) return <LoadingMessage />;
  if (error) return <ErrorMessage message={`Error fetching image: ${error.message}`} />;
  if (!image) return <ErrorMessage message="Image not found." />;

  return (
    <div className="image-info-page">
      <ImageDetails image={image} />
    </div>
  );
};

export default ImageInfoPage;