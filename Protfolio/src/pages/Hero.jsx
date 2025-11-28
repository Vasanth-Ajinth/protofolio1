import React, { useState } from "react";
import "./Hero.css";

function Hero() {

  const [index, setIndex] = useState(0);

  const images = [
    
    "/intern.png",
    "/part.png",
    "/train.png"
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-container">
      <img src="/vasu.jpg" alt="Profile" className="hero-profile" />

      <h1 className="hero-name">Hi, I'm Vasanth</h1>
      <p className="hero-title">Front-End Developer | React Beginner</p>

      <a href="/vasanth.docx" download className="hero-button">
        Download Resume
      </a>
      <br />
       <hr />

      {/* Slider */}
      <div className="slider-box">

      
        <h1 style={{color:"#01ffffff"}}>Internship Certificates</h1>
        <br />
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img src={img} key={i} className="slide-img" alt="certificate" />
          ))}
        </div>
      </div>

      <div className="btns">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>

    </div>
  );
}

export default Hero;
