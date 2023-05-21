import React, { useState } from 'react';
import Song from '../../components/Song';
import carl from '../../res/carl.png';
import rotate from '../../res/rotate-carl.png';
import './feed.css';

const Feed = () => {
  const songs = [
    {
      id: "FAS0394SAF",
      imageSrc: "song1.png",
      name: "Snooze",
      artist: "SZA",
      year: "2022",
      cost: "2 Eth",
      option: "BUY",
    },
    {
      id: "ASPD03UF8",
      imageSrc: "song2.png",
      name: "Jackie Brown",
      artist: "Brent Faiyaz",
      year: "2022",
      cost: "1 Eth",
      option: "BUY",
    },
    {
      id: "ASOD092F0",
      imageSrc: "song3.png",
      name: "Moonlight",
      artist: "Kali Uchis",
      year: "2023",
      cost: "1 Eth",
      option: "BUY",
    },
    {
      id: "AS03913LFM",
      imageSrc: "song4.png",
      name: "Deserve Me",
      artist: "Kali Uchis",
      year: "2023",
      cost: "2 Eth",
      option: "BUY",
    },
    {
      id: "3OFPF9BOPS",
      imageSrc: "song5.png",
      name: "America Has a Problem",
      artist: "Beyonce ft. Kendrick",
      year: "2023",
      cost: "2 Eth",
      option: "BUY",
    },
    {
      id: "FKG0903LF",
      imageSrc: "song6.png",
      name: "Pink + White",
      artist: "Frank Ocean",
      year: "2016",
      cost: "2 Eth",
      option: "BUY",
    },
    {
      id: "MGKE0385M",
      imageSrc: "song7.png",
      name: "Slide",
      artist: "Calvin Harris",
      year: "2017",
      cost: "3 Eth",
      option: "BUY",
    },
    {
      id: "E39402J3OK",
      imageSrc: "song8.png",
      name: "The Weekend",
      artist: "SZA",
      year: "2017",
      cost: "3 Eth",
      option: "BUY",
    },
    {
      id: "XJF930RTO",
      imageSrc: "song9.png",
      name: "Drew Barrymore",
      artist: "SZA",
      year: "2017",
      cost: "3 Eth",
      option: "BUY",
    },
  ]

  

  return (
    <div>
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
      <img src={rotate} className='feed-bg2'/>
    </div>
  )
}

export default Feed
