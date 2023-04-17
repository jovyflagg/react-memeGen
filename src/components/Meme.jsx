import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target
    
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    
  }

  return (
      <main>
        <div className="form">
          <input
            type="text"
            id="topText"
            placeholder="Top text"
            className="form--input"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />

          <input
            type="text"
            id="bottomText"
            placeholder="Bottom text"
            className="form--input"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt={meme.randomImage} />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
  );
}

export default Meme;
