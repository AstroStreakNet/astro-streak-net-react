const UploadForm: React.FC = () => {
  return (
    <div className="upload-section">
      <div className="input-section-inline">
        <div className="input-section">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-section">
          <label htmlFor="observatory">Observatory Code:</label>
          <input type="text" id="observatory" name="observatory" />
        </div>
      </div>

      <div className="input-section-inline">
        <div className="input-section">
          <label htmlFor="ra">Right Ascension, RA:</label>
          <input type="number" id="ra" name="ra" step="0.01" />
        </div>
        <div className="input-section">
          <label htmlFor="dec">Declination, DEC:</label>
          <input type="number" id="dec" name="dec" step="0.01" />
        </div>
      </div>

      <div className="input-section-inline">
        <div className="input-section">
          <label htmlFor="jd">Julian Date, JD:</label>
          <input type="datetime-local" id="jd" name="jd" />
        </div>
        <div className="input-section">
          <label htmlFor="ed">Exposure Duration, ED:</label>
          <input type="number" id="ed" name="ed" />
        </div>
      </div>

      <div className="input-section">
        <input type="checkbox" id="fits" name="fits" />
        <label htmlFor="fits">File is FITS Format</label>
      </div>

      <div className="input-section">
        <label>Streak Type:</label>
        <div>
          <input type="checkbox" id="cr" name="cr" />
          <label htmlFor="cr">Cosmic Ray, CR</label>
        </div>
        <div>
          <input type="checkbox" id="rso" name="rso" />
          <label htmlFor="rso">Resident Space Object, RSO</label>
        </div>
        <div>
          <input type="checkbox" id="neo" name="neo" />
          <label htmlFor="neo">Near Earth Object, NEO</label>
        </div>
        <div>
          <input type="checkbox" id="da" name="da" />
          <label htmlFor="da">Detector Artifact, DA</label>
        </div>
        <div>
          <input type="checkbox" id="other" name="other" />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="input-section">
        <label>Permissions:</label>
        <div>
          <input type="checkbox" id="ml" name="ml" />
          <label htmlFor="ml">
            Allow Machine Learning training on the image
          </label>
        </div>
        <div>
          <input type="checkbox" id="publish" name="publish" />
          <label htmlFor="publish">Allow public publishing</label>
        </div>
      </div>
      <div className="input-section">
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default UploadForm;
