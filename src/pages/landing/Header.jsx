import React, { useState, useEffect } from 'react';
import './header.css';
import video from '../../res/header-bg.mp4';

const Header = () => {
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const textToType = '1, 2, 3.';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypingText((prevText) => {
        const shouldDelete = prevText.length > 0 && currentIndex === textToType.length;
        const nextIndex = shouldDelete ? currentIndex - 1 : currentIndex;

        return shouldDelete
          ? prevText.slice(0, nextIndex)
          : textToType.slice(0, nextIndex + 1);
      });

      currentIndex = (currentIndex + 1) % (textToType.length + 1);
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

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
        <p>
          Music for all your video PROJECT NEEDS. Powered by blockchain, SEAMLESS TO USE, and as
          easy as {typingText}
        </p>
      </div>
    </header>
  );
};

export default Header;
