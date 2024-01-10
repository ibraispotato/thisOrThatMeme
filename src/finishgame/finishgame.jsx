        import React, { useState } from 'react'
    import { useStateContext } from "../context/contexts"
    import Loader from "../loading/loading.jsx"
    import "./finishgame.css"
    import { useClipboard } from 'use-clipboard-copy';
    // import { PacmanLoader } from 'react-spinners'

        const Finishgame = () => {
            const { setAddOne, addOne, numberChoosen } = useStateContext()
            const [load, SetLoading] = useState(true);
            // const [copied, setCopied] = useState(false);
            const clipboard = useClipboard()
            setTimeout(() => {
                SetLoading(false)
            }, 2000);
           
        return (
            <div>
            
                    
                {load ? <Loader /> :
                    <>
                        <div className='collection'>
                        <h1 className='textcolletion'>We've collected your Collections</h1>
                    </div>
                        <div className='imgsandthings'>
                            {addOne.map(((res,index) => (
                                <>
                                    <div className='inside' key={index}>
                                        <img className='imgdone' alt='' src={res.url} />
                                        <div className='betn'>
                                            <button className='playBtn save' onClick={(e)=> clipboard.copy(addOne[index]?.url)}>{'Copy link'}</button>
                                        </div>
                                    
                                    </div>
                                    
                                </>
                            )))}
                            
                        </div>
                    </>
                    
                        }
                
            </div>
        )
        }

        export default Finishgame
