
import React from 'react';

const GalleryHeader: React.FC = () => {
  return (
    <div className="gallery-header">
      <h1 className="gallery-title">Gallery Search</h1>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search" />
        <img src="/assets/icons/search-icon.png" alt="Search Icon" className="search-icon" />
      </div>
    </div>
  );
};

export default GalleryHeader;