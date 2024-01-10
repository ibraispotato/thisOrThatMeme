/* eslint-disable react/style-prop-object */
import React, { useState,useEffect } from 'react'
import "./GameStarted.css"
import { Link } from 'react-router-dom'

const GameStarted = () => {
  const [RandomImg, setRandomImg] = useState([])
  const [num, setNum] = useState()
  // const [num2,setNum2] = useState()
  

  const randome = Math.floor(Math.random() * RandomImg.length)
  const randomeTwo = Math.floor(Math.random() * RandomImg.length)

  // console.log(RandomImg[randomeTwo])
  const memes = async () => {
     
    try {
        await fetch("https://api.imgflip.com/get_memes").then(response => response.json())
        .then(response => setRandomImg(response.data.memes))
    } catch (error) {
        console.error(error);
    }
  }

  const click = () => {
  const randome = Math.floor(Math.random() * RandomImg.length)
    setNum(prev => ({
      ...prev,
      num: randome
    }))
  }
  // console.log(RandomImg[randome])
useEffect(() => {
memes()
}, [])

  return (
    <div>
      {/* <h1>{RandomImg[randome]?.name}</h1> */}
      <div className='imgs'>
        <div className='blue'>
          <Link to={`${randome}`}>
          <img className='img' id='blues' alt='' src={RandomImg[randome]?.url} />
          </Link>
          <Link to={`${randome}`}>
          <h1 className='linko'>{RandomImg[randome]?.name}</h1>
          </Link>
          
        </div>
        <div className='btnAndOr'>
             <div className='or'>
          <div className='ors'>
            <p className='textor'>or</p>
          </div>
          
        </div>
          <div>
            
            <button onClick={click} className='skip'>Skip</button>
            
          
        </div>
       </div>
     
        <div className='red'>
          <Link to={`${randomeTwo}`}>
          <img className='img' id='reds' alt='' src={RandomImg[randomeTwo]?.url}/>
          </Link>
          <Link to={`${randomeTwo}`}>
          <h1 className='linko'>{RandomImg[randomeTwo]?.name}</h1>
          </Link>
          
        </div>
      
      </div>
      
    </div>
  )
}

export default GameStarted
