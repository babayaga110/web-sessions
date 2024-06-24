import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

export default function Meme() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm()

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    img: "http://i.imgflip.com/1bij.jpg"
  });
  const [memeTemplates, setMemeTemplates] = useState([]);

  useEffect(() => {
    setTopText(watch("topText"));
    setBottomText(watch("bottomText"));
  }
  , [watch("topText"), watch("bottomText")]);

  useEffect( ()=>{
     async function getMemes() {
      await fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
          setMemeTemplates(data.data.memes);
        });
    }
    getMemes();
  },[])

  const generateMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeTemplates.length);
    const randomMeme = memeTemplates[randomIndex];
    setMemes({
      topText: topText,
      bottomText: bottomText,
      img: randomMeme.url
    });
  };



  return (
    <main>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter top text"
          name="topText"
          {...register("topText")} 
        />
        <input
          type="text"
          placeholder="Enter bottom text"
          name="bottomText"
          {...register("bottomText")} 
        />
      </div>
      <button className="generate-btn" onClick={generateMeme}>Generate Meme</button>
      <div className="meme-container">
        <img src={memes.img} alt="meme" />
        <h2 className="top-text">{memes.topText}</h2>
        <h2 className="bottom-text">{memes.bottomText}</h2>
      </div>
    </main>
  );
}
