import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./mainPage.css"
const MainPage = () => {

  return (
    <div>
      <div className='hero'>
        <h1 className='textfront'>Hello WELCOME to the Meme Maker</h1>
        <Link to={"/beforeYouPlay"}>
        <button className='playBtn'>Let's Play ☺</button>
        </Link>
            </div>
    </div>
  )
}

export default MainPage
