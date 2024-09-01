// src/components/features/Upload/DragAndDrop.tsx
import React from "react";

const DragAndDrop: React.FC = () => {
  return (
    <div className="drag-and-drop">
      <img
        src="/src/assets/icons/upload-icon.png"
        alt="Upload"
        className="upload-icon"
      />
      <p>Drag and drop your files here</p>
      <p>or</p>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose Files
      </label>
      <input id="file-upload" type="file" multiple />
    </div>
  );
};

export default DragAndDrop;
