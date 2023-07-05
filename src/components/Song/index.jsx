import React from 'react'
import styles from "../Body/";

function Song({ song }) {
  return (
    <div>
      {song.thumbnails && <img src={song.thumbnails[0].url} alt={song.title} />}
      <h4>{song.title} </h4>
    </div>
  )
}

export default Song