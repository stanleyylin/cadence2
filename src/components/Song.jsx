import React, { useState, useEffect } from 'react';

import './song.css';

const Song = ({song}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      const importedImage = await import(`../res/songs/${song.imageSrc}`);
      setImage(importedImage.default);
    };

    importImage();
  }, [song.imageSrc]);

  const [showPopup, setShowPopup] = useState(false);

  const handlePurchase = () => {
    setShowPopup(true);
  };
  

  return (

    
    <div className='song-container'>
      <img src={image}/>
      <div className='lower'>
        <h2>{song.name}</h2>
        <p>{song.artist}</p>
        <p>{song.year}</p>
        <p>{song.cost}</p>
        <button className='buy' onClick={handlePurchase}>{song.option}</button>
        {showPopup && <p className='success'> Thank you for purchasing! Your key is: {song.id} </p>}
      </div>
      
      
    </div>
  )
}


export default Song
