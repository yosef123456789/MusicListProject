import React, { useContext, useEffect, useState } from "react";
import Song from "../Song/index";
import Context from "../../Context/Context";
import axios from "axios";




function Body() {

  const [resSearch, setresSearch] = useState();
  const { textSearch, play, setPlay } = useContext(Context)

  const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: textSearch},
    headers: {
      'X-RapidAPI-Key': 'e0c638ddebmsh882352c9413be60p1adabbjsn2b91b91d0c08',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data.items)
        setresSearch(res.data.items)
      })
      .catch((err) => console.log(err.massege || err))
  }, [textSearch])

  return <div>

      {resSearch
        &&
        resSearch.map(song =>
            <div
            key={song.id}
            onClick={() => setPlay(song)}>
            <Song song={song} />
            </div> 
            )}
  </div>
}
export default Body;





