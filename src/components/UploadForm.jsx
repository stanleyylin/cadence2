import React, { useRef, useState } from 'react';
import './uploadform.css';

const UploadForm = () => {
  const fileInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState('');

  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [cost, setCost] = useState('');
  const [formError, setFormError] = useState('');

  const [success, setSuccess] = useState(false);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleThumbnailInputChange = (event) => {
    const file = event.target.files[0];
    setThumbnail(URL.createObjectURL(file));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!selectedFile || !thumbnail || !name || !artist || !cost) {
      setFormError('Please fill out all fields and upload the required files.');
      return;
    }

    // DO STUFF HERE
    console.log('Submitted file:', selectedFile);
    console.log('Thumbnail:', thumbnail);
    console.log('Name:', name);
    console.log('Artist:', artist);
    console.log('Cost:', cost);

    // Reset stuff
    setSelectedFile(null);
    setThumbnail('');
    setName('');
    setArtist('');
    setCost('');
    setFormError('');
    setSuccess(true);
  };

  return (
    <div className="upload-form">
      <div className='lil-thang'>

      {/* mp3 file */}
      <input
          ref={fileInputRef}
          type="file"
          accept="audio/mpeg"
          className='hide'
          onChange={handleFileInputChange}
        />
        <button 
          className='mp3-button'
          onClick={() => fileInputRef.current.click()}>
            Upload Music
        </button>

        {selectedFile && (
          <p className='file-name'>
            {selectedFile.name}
          </p>
        )}
      </div>

      {/* thumbnail */}
      {thumbnail && (
          <div>
            <img src={thumbnail} alt="Thumbnail" className='stanley'/>
          </div>
        )}
        <div>
          <input
            ref={thumbnailInputRef}
            type="file"
            accept="image/*"
            className='hide'
            onChange={handleThumbnailInputChange}
          />
          <button 
            className='thumbnail-button'
            onClick={() => thumbnailInputRef.current.click()}>
            Upload Thumbnail
          </button>
        </div>

      <form onSubmit={handleSubmit} className='form'>
        {/* title of song */}
        <input
          type="text"
          value={name}
          placeholder="TITLE"
          className='text-input'
          onChange={(e) => setName(e.target.value)}
        />

        {/* artist name */}
        <input
            type="text"
            value={artist}
            placeholder="ARTIST"
            className='text-input'
            onChange={(e) => setArtist(e.target.value)}
          />

        {/* cost of song */}
        <input
          type="number"
          value={cost}
          placeholder="COST"
          min="0"
          className='text-input'
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit" className='submit-button'>Submit</button>
        {formError && <div className="error-message">{formError}</div>}
        {success && <div className="momo"><p>Uploaded</p></div>}
      </form>
    </div>
  );
};

export default UploadForm;
