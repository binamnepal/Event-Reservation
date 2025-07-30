import React, { useState } from 'react';
import EventPic from "../assets/pic1.jpg"
import Eventpic2 from '../assets/pic2.jpg'

import './imageslider.css'
const images = [
 EventPic,
 Eventpic2
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button onClick={handlePrev} className="nav-button">←</button>
      <img src={images[currentIndex]} alt="event" className="slider-image" />
      <button onClick={handleNext} className="nav-button">→</button>
    </div>
  );
};

export default ImageSlider;