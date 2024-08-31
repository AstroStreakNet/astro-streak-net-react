// src/pages/GalleryPage.tsx
import GalleryHeader from '../components/features/Gallery/GalleryHeader';
import GalleryList from '../components/features/Gallery/GalleryList';
import React from 'react';

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <GalleryHeader />
      <GalleryList />
    </div>
  );
};

export default GalleryPage;