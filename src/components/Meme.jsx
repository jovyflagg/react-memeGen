import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    console.log(memeImage);
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
        <img src={memeImage} className="meme--image" alt={memeImage} />
      </main>
    </div>
  );
}

export default Meme;
