import React from 'react';
import Song from '../../components/Song';
import carl from '../../res/carl.png';
import './feed.css';

const Feed = () => {
  const songs = [
    {
      imageSrc: "song1.png",
      name: "Snooze",
      artist: "SZA",
      year: "2022",
      cost: "2 Eth",
    },
    {
      imageSrc: "song2.png",
      name: "Jackie Brown",
      artist: "Brent Faiyaz",
      year: "2022",
      cost: "1 Eth",
    },
    {
      imageSrc: "song3.png",
      name: "Moonlight",
      artist: "Kali Uchis",
      year: "2023",
      cost: "1 Eth",
    },
    {
      imageSrc: "song4.png",
      name: "Deserve Me",
      artist: "Kali Uchis",
      year: "2023",
      cost: "2 Eth",
    },
    {
      imageSrc: "song5.png",
      name: "America Has a Problem",
      artist: "Beyonce ft. Kendrick",
      year: "2023",
      cost: "2 Eth",
    },
    {
      imageSrc: "song6.png",
      name: "Pink + White",
      artist: "Frank Ocean",
      year: "2016",
      cost: "2 Eth",
    },
    {
      imageSrc: "song7.png",
      name: "Slide",
      artist: "Calvin Harris",
      year: "2017",
      cost: "3 Eth",
    },
    {
      imageSrc: "song8.png",
      name: "The Weekend",
      artist: "SZA",
      year: "2017",
      cost: "3 Eth",
    },
    {
      imageSrc: "song9.png",
      name: "Drew Barrymore",
      artist: "SZA",
      year: "2017",
      cost: "3 Eth",
    },
  ]
  return (
    <div className='feed-container'>
      <img src={carl} className='feed-bg'/>
      <p className='title-explore'>YOUR FEED</p>
      <div className='song-grid'>
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
