            import React,{useState,useEffect} from 'react'
    import { useParams } from 'react-router'
    import { Link } from 'react-router-dom';
    import { useStateContext } from "../context/contexts"
    import "./photoEditor.css"
    import { v4 as uuidv4 } from 'uuid'
    uuidv4()


        const PhotoEditor = () => {
            const [RandomImg, setRandomImg] = useState([])
            const [text, setText] = useState([])
            const { setAddOne, addOne,numberChoosen } = useStateContext()
            const [urls, setUrls] = useState("")
            const [time,setTime] = useState(false)
            // console.log(time)
            useEffect(() => {
                setTime(urls === "" ?false : true)
                
            },[time,urls])
            console.log(addOne)
            
            const add = (item) => {
                
                setAddOne( 
                    [...addOne,{ider:uuidv4(), id: RandomImg[id].id, url: urls, ids: id,click:false }])
            }
        
            const { id } = useParams()
            
            // console.log(addOne.includes(RandomImg[id].id))
            const memes = async () => {
            
                try {
                    await fetch("https://api.imgflip.com/get_memes").then(response => response.json())
                    .then(response => setRandomImg(response.data.memes))
                } catch (error) {
                    console.error(error);
                }
            }
            useEffect(() => {
                memes()
                }, [])
            const update = (e, index) => {
                const texts = e.target.value || '';
                setText(
                    text.map((c, i) => {
                        if (index === i) {
                            return texts
                        } else {
                            return c
                        }
                    })
                )
            }
            // console.log(addOne)
            const genMeme = (textr) => {
                const ids = RandomImg[id].id
                const formData = new FormData();
                formData.append("username", "iqiish");
                formData.append("password", "amjad900");
                formData.append('template_id', ids);
                text.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));
                fetch("https://api.imgflip.com/caption_image", {
                    method: "POST",
                    body: formData
                }).then((data) => data.json().then((data) => {
                    setUrls(data.data.url)
                    
                    
                })).catch((err) => {
                    alert("dude fill up the text")
                    
                })
                // console.log(formData)
            }
            
            useEffect(() => {
                setText(Array(RandomImg[id]?.box_count).fill(""))
                //
            }, [RandomImg, id])
            
            return (
                <div className='o'>
                        
                    <h1 className='timeText'>{time?"There you go you did it! 😇":"When you fill up the inputs shall you please Wait untill we send you a messege 🙄" }</h1>
                    <div className='edit'>
                        <img alt='' className='photoimg' src={RandomImg[id]?.url} />
                        <div className='imgandinput'>
                        <div className='inputs'>
                        {text?.map((res, index) => (
                        <input onChange={(e) => update(e,index)} key={index} />
                        
                    ))}
                    </div>
                    
                    <div className='btners'>
                                {<button className='playBtn' onClick={urls === "" ? genMeme : console.log("lol")}>Generate 🤩</button>}
                    
                    
                    <Link to={`${addOne.length===parseInt(numberChoosen)&&urls!==""?"/thEnd<3":(time?"/beforeYouPlay/gameStarted":"")}`}>
                        <button className='playBtn continue' onClick={urls!==""?time ?add:console.log("lol"):console.log("lol")}>continue 🥳</button>
                    </Link>
                    <Link to={'/beforeYouPlay/gameStarted'}>
                        <button className='playBtn back'>Back 🤨</button>
                    </Link>
                    </div>
                    
                        </div>
                        </div>
                </div>
            )
            }

            export default PhotoEditor
