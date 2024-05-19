const UploadDragDrop: React.FC = () => {
  return (
    <div className="upload-section">
      <div className="drag-drop-area">
        {/* Logo image */}
        <img
          src="uploadDocs.png"
          alt="Upload Logo"
          className="drag-file-image"
        />

        {/* Choose files button */}
        <input
          type="file"
          id="fileInput"
          multiple
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput" className="select-files-button">
          Choose Files
        </label>

        {/* Text below the button */}
        <p className="drag-drop-text">or drag here</p>
      </div>
    </div>
  );
};

export default UploadDragDrop;
