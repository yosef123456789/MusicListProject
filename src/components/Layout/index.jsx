import React, { useState } from 'react'
import Header from "../Header/index";
import Navbar from "../Navbar/index";
import Body from "../Body/index";
import Grid from '../Grid';
import Context from "../../Context/Context";


function Layout() {

  const [textSearch, settextSearch] = useState('never+gonna+give+you+up')
  const [play, setPlay] = useState(123)

  return (
    <div> 
      <Context.Provider value = {{textSearch, settextSearch,play, setPlay}}>
      <Grid
        header={<Header />}
        body={<Body/>}
        lb={<Navbar />}
      />
      </Context.Provider>
    </div>
  )
}

export default Layout