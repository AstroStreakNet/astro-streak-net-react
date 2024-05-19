import UploadDragnDrop from "src/components/atoms/UploadElements/UploadDragnDrop";
import UploadForm from "src/components/atoms/UploadElements/UploadForm";

const UploadElements: React.FC = () => {
  return (
    <div className="Upload-page">
      {/* Line below the navbar */}
      <div className="Upload-line"></div>
      {/* Upload Title */}
      <h2 className="upload-title">Upload</h2>

      {/* Upload Container */}
      <div className="upload-container">
        {/* Upload Drag and Drop Section */}
        <div className="upload-drag-drop">
          <UploadDragnDrop />
        </div>
        {/* Upload Form Section */}
        <div className="upload-form">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default UploadElements;
