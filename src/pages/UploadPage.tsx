// src/pages/UploadPage.tsx
import DragAndDrop from "../components/features/Upload/DragAndDrop";
import React from "react";
import UploadForm from "../components/features/Upload/UploadForm";

const UploadPage: React.FC = () => {
  return (
    <div className="upload-page">
      <h1 className="upload-title">Upload Your Image</h1>
      <DragAndDrop />
      <UploadForm />
    </div>
  );
};

export default UploadPage;
