import memesData from "../memesData";
import { useState } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

  return (
    <div className="meme">
      <main>
        <div className="form">
          <input type="text" id="topText" placeholder="Top text" className="form--input" />

          <input
            type="text"
            id="bottomText"
            placeholder="Bottom text"
            className="form--input"
          />
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image 🖼
          </button>
        </div>
        <img src={meme.randomImage} className="meme--image" alt={meme.randomImage} />
      </main>
    </div>
  );
}

export default Meme;
