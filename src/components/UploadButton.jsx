import React from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform any necessary operations with the uploaded file
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      <label htmlFor="file-upload" className="upload-button">
        Upload MP3
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".mp3"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadButton;
