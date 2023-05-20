import React from 'react'
import './header.css';
import video from '../../res/header-bg.mp4';

const Header = () => {
  return (
    <header className='heading-container'>
      <div>
        <video autoPlay loop muted className='video-element'>
        <source src={video} type='video/mp4' />
        </video>
        <div className='video-overlay'></div>
      </div>
      <div className='heading-subcontainer'>
        <h1>MEET CADENCE</h1>
        <p>Music for all your video PROJECT NEEDS. Powered by blockchain, SEAMLESS TO USE, and as easy as 1, 2, 3.</p> 
      </div>

    </header>
  )
}

export default Header
