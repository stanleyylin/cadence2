import React from 'react';
import Song from '../../components/Song';
import carl from '../../res/carl.png';
import './feed.css';

const Feed = () => {
  const songs = [
    {
      imageSrc: "../res/artist1.png",
      name: "The Weekend",
      artist: "SZA",
      year: "2022",
      price: 2,
    },
  ]
  return (
    <div className='feed-container'>
      <img src={carl} className='feed-bg'/>
      <p>EXPLORE</p>
      <div>
        {songs.map((currSong) => (
          <Song 
            song = {currSong}
          />
        ))}  
      </div>
      
    </div>
  )
}

export default Feed
