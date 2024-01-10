    import React from 'react'
import "./BeforeYouPlay.css"
import { Link } from 'react-router-dom'
import Numbers from "../numbers/numbers"
    
const BeforeYouPlay = () => {
        
    return (
        <div className='containerBeforeYouPlay'>
            <h1>Before You PLay!</h1>
            <div className='rules'>
                <p>1:You will get two memes you will choose between what you prefer</p>
                <p>2:You will choose how many memes you will make</p>
                <p>3:Even if u didn't like the memes that it showed up there's a skip button</p>
            </div>
            <div className='num'>
                <Numbers/>
            <Link to={"gameStarted"}>
            <button className='playBtn'>Let's play 🤗</button>
            </Link>
            </div>
            
            
        </div>
    )
    }
    export default BeforeYouPlay
