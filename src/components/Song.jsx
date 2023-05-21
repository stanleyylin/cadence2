import React from 'react'

const Song = ({song}) => {

  return (
    <div className='song-container'>
      <img src={song.imageSrc}/>
      <h2>{song.name}</h2>
      <p>{song.artist}</p>
      <p>{song.year}</p>
      <p>{song.cost}</p>
      <button></button>
      
    </div>
  )
}

export default Song
