// src/components/features/Upload/UploadForm.tsx
import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const UploadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    observatory: '',
    ra: '',
    dec: '',
    jd: '',
    ed: '',
    isFits: false,
    streakType: {
      cr: false,
      rso: false,
      neo: false,
      da: false,
      other: false
    },
    permissions: {
      ml: false,
      publish: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <Input
        type="text"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        name="name"
        required
      />
      <Input
        type="text"
        label="Observatory Code"
        value={formData.observatory}
        onChange={handleInputChange}
        name="observatory"
      />
      <Input
        type="number"
        label="Right Ascension (RA)"
        value={formData.ra}
        onChange={handleInputChange}
        name="ra"
      />
      <Input
        type="number"
        label="Declination (DEC)"
        value={formData.dec}
        onChange={handleInputChange}
        name="dec"
      />
      <Input
        type="date"
        label="Julian Date (JD)"
        value={formData.jd}
        onChange={handleInputChange}
        name="jd"
      />
      <Input
        type="number"
        label="Exposure Duration (ED)"
        value={formData.ed}
        onChange={handleInputChange}
        name="ed"
      />
      {/* Add checkbox inputs for isFits, streakType, and permissions */}
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default UploadForm;
