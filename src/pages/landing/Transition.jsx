import React, { useState, useEffect } from 'react';
import './transition.css';
import artist1 from '../../res/artists/artist1.png';
import artist2 from '../../res/artists/artist2.png';
import artist3 from '../../res/artists/artist3.png';
import { Link } from 'react-router-dom';

const Transition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [artist1, artist2, artist3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="transition-container">
      <div className='transition-left'>
        <p>YOUR FAVOURITE ARTISTS FOR YOUR PROJECTS</p>
        <Link to="/feed"> 
          <button className='explore-button'>EXPLORE</button>
        </Link>
      </div>
      <img
        src={images[currentImageIndex]}
        alt="Slideshow"
        className="image"
      />
      
    </div>
  );
}

export default Transition
