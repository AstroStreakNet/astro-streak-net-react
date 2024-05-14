const UploadDragDrop: React.FC = () => {
  return (
    <div className="upload-section">
      <div className="upload-box">
        {/* Box for uploading images */}
        <input type="file" id="fileInput" multiple />
        <label htmlFor="fileInput">Click to Upload or Drag & Drop Here</label>
      </div>
      <div className="drag-drop-area">
        {/* Drag and drop area */}
        <p>Drag & Drop Image Here</p>
      </div>
    </div>
  );
};

export default UploadDragDrop;
