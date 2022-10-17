/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import memesData from '../../memesData'
import { Button } from 'antd'



const MemeForm =() =>{


 const[isShown, setIsShown] = useState(false)
 const[messages, setMessages] =useState(["HELLO", "yeywyy", "yetwfw"])

    const toggle=()=>{
        console.log(isShown)
setIsShown(prevShown =>!prevShown)
    }


    // let url
// const[memeImage, setMemeImage] = useState("")
const[meme, setMeme] =useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/261o3j.jpg"
})
const[allMemeImages, setAllMemeImages] = useState(memesData)


 const getMemeImages =()=>{
    const memesArray = allMemeImages.data.memes
    const randomNumber =Math.floor(Math.random() * memesArray.length)
    // console.log(randomNumber)
    const url = memesArray[randomNumber].url;
    // setMemeImage(memesArray[randomNumber].url)
    // console.log(url)
    setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
    }))
 }

const handleChange=(event)=>{
const{name, value} = event.target
setMeme(prevMeme =>({
    ...prevMeme,
    [name]: value
}))
}
    return (
        <div>
        <div style={{ padding: "30px" , alignContent:"center"}}>
            {messages.length>0 ? <p>You have {messages.length} {messages.length>1 ? "messages" :"message"}</p> : <p>You're caught up </p>}
            
                {isShown && <button onClick={toggle}>Punchline</button>} 
            <div className='form'>
                <input type="text" 
                placeholder='Hello worls' 
                className='input-text' 
                onChange={handleChange}
                name="topText"
                value={meme.topText}
                />
                <input type="text"
                 placeholder='Test ' 
                 className='input-text'
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}
                  />
           
              
                <Button onClick={getMemeImages} className="button-form">Get a new meme image  🖼</Button>
            </div>
        </div>
        <div style ={{position: 'relative'}} >
        <img src={meme.randomImage} className ='meme-image'/>
        <h2  className='upper--text' style={{position: "absolute", top:"30px", fontSize:"50px", color:"white"}}>{meme.topText}</h2>
        <h2 className='bottom--text' style={{position: "absolute", top:"420px", fontSize:"50px", color:"white"}}>{meme.bottomText}</h2>

        </div>
       </div>
    )
}

export default MemeForm