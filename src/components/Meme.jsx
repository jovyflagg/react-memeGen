function Meme() {
    return(
        <div className="meme">
           <main>
                <form className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button className="form--button">Get a new meme image 🖼 </button>
                </form>
           </main>

        </div>
    )
}

export default Meme