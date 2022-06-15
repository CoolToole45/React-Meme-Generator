import React from "react";
import "../css/Meme.css";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    function handleOnChage(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getRandomImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomUrl
        }));
    }

    return (
        <main>
            <div className="controls">
                <input 
                type="text"
                name="topText"
                value={meme.topText}
                onChange={handleOnChage}
                placeholder="Top Text"
                id="top-text-inp"/>

                <input 
                type="text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleOnChage}
                placeholder="Bottom Text"
                id="bottom-text-inp"/>

                <button id="generate-btn" onClick={getRandomImage}>Generate A Meme</button>
            </div>
            <div className="img-container">
                <img 
                src={meme.randomImage}
                id="memeImage"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}