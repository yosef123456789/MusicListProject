import React from 'react'
import { useContext } from 'react'
import Context from '../../Context/Context'
import ReactPlayer from 'react-player'





function ShowVideo() {

const {play} = useContext(Context)
console.log(play);

  return (
    <div>
<ReactPlayer url= {play.url} />
    </div>
  )
}

export default ShowVideo