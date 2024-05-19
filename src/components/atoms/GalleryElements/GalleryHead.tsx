const GalleryHead = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery Search</h1>*-
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search" />
          <img
            src="search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
        </div>
      </div>

      <div className="Gallery-Line"></div>
    </div>
  );
};

export default GalleryHead;
