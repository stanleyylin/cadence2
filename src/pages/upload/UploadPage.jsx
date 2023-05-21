import React from 'react';
import './uploadpage.css';
import UploadForm from '../../components/UploadForm';
import swirly from '../../res/swirly.mp4';

const UploadPage = () => {
  return (
    <div className='upload-container'>
      <div className='upload-bg'></div>
      <div className="overlay"></div>
      <div className='heading-upload'>
        <h1>UPLOAD YOUR MUSIC</h1>
        <p>UPLOAD YOUR MUSIC BELOW AND SHOW OFF YOUR AWESOME WORK. EARN WHAT YOU DESERVE!</p> 
        <UploadForm />

      </div>
      <div className='video-container'>
        <video autoPlay loop muted className='video-ending'>
            <source src={swirly} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default UploadPage;
