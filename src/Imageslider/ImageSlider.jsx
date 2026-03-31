import React, { useState, useEffect, useCallback, useRef } from 'react';
import "./ImageSlider.css";
import EventPic from "../assets/pic1.jpg"
import Eventpic2 from '../assets/pic2.jpg'

const slides = [
  {
   
    src: EventPic,
    label: 'Grand Wedding',
    caption: 'Kathmandu, 2024',
    color: '#C45C3B',
  },
  {
   
    src: Eventpic2,
    label: 'Corporate Gala',
    caption: 'Pokhara, 2024',
    color: '#8C3213',
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  return (
    <section className="slider">
      <div className="slider__track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slider__slide ${i === current ? 'slider__slide--active' : ''}`}
            style={{ '--slide-color': slide.color }}
          >
            {slide.src ? (
              <img src={slide.src} alt={slide.label} className="slider__img" />
            ) : (
              <div className="slider__placeholder">
                <span className="slider__placeholder-icon">🖼</span>
                <p className="slider__placeholder-text">{slide.label}</p>
              </div>
            )}
            <div className="slider__caption">
              <span className="slider__caption-label">{slide.label}</span>
              <span className="slider__caption-sub">{slide.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="slider__arrow slider__arrow--prev"
        onClick={() => { prev(); resetTimer(); }}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <button
        className="slider__arrow slider__arrow--next"
        onClick={() => { next(); resetTimer(); }}
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="slider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider__dot ${i === current ? 'slider__dot--active' : ''}`}
            onClick={() => { goTo(i); resetTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}