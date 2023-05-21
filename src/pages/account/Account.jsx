import React from 'react';
import Song from '../../components/Song';
import carl from '../../res/rotate-carl.png';
import carl2 from '../../res/carl2.png';
import './account.css';


const songs = [
  {
    id: "ALJDSF89Q3",
    imageSrc: "song1.png",
    name: "Snooze",
    artist: "SZA",
    year: "2022",
    cost: "2 Eth",
    option: "DOWNLOAD",
  },
  {
    id: "ZX9C0DFKLIF",
    imageSrc: "song2.png",
    name: "Jackie Brown",
    artist: "Brent Faiyaz",
    year: "2022",
    cost: "1 Eth",
    option: "DOWNLOAD",
  },
  {
    id: "OFIUAD939",
    imageSrc: "song3.png",
    name: "Moonlight",
    artist: "Kali Uchis",
    year: "2023",
    cost: "1 Eth",
    option: "DOWNLOAD",
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
