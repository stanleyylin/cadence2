import React from 'react';
import Song from '../../components/Song';
import carl from '../../res/rotate-carl.png';
import carl2 from '../../res/carl2.png';
import './account.css';


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
];

const Account = () => {
  return (
    <div className='account-container'>
      <img src={carl2} className='account-bg'/>
      <p className='title-account'>YOUR ACCOUNT</p>
      
      <div className='your-music'>
        {songs.map((currSong) => (
          <Song 
            song = {currSong}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Account
