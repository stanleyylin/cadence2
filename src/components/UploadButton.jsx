import React, { useRef } from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file as needed
    console.log('Selected file:', file);
  };

  return (
    <div className="upload-button">
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/mpeg"
        onChange={handleFileInputChange}
      />
      <button onClick={() => fileInputRef.current.click()}>Upload Music</button>
    </div>
  );
};

export default UploadButton;
