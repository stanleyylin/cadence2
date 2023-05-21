import React from 'react';
import carl from '../res/carl.png';
import './UploadPage.css';
import UploadButton from '../components/UploadButton';

const UploadPage = () => {
  return (
    <div className='feed-container'>
      <img src={carl} className='feed-bg'/>
      <div className='heading-subcontainer'>
        <h1>Upload Page</h1>
        <p>Upload your music here.</p> 
            <div>
            <h1>Upload Page</h1>
            <UploadButton />
            </div>
      </div>
    </div>
  )
}

export default UploadPage;
