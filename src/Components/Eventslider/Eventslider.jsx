import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTicketAlt } from 'react-icons/fa';
import { FiClock, FiMapPin } from 'react-icons/fi';
import './EventsSlider.css';
import eventData from '../../../nepalieEvent.json';

const EventsSlider = () => {
  const [activeCategory, setActiveCategory] = useState('Music');
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentEvents = eventData.find(cat => cat.name === activeCategory)?.events || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === currentEvents.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? currentEvents.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentEvents.length]);

  return (
    <section className="events-slider">
      <div className="slider-header">
        <h2 className="slider-title">Featured Events in Nepal</h2>
        <div className="category-tabs">
          {eventData.map((category) => (
            <button
              key={category.name}
              className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.name);
                setCurrentSlide(0);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="slider-track">
          {currentEvents.map((event, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
                opacity: index === currentSlide ? 1 : 0.7,
              }}
            >
              <div className="event-card">
                <div className="event-image">
                  <img
                    src={event.image}
                    alt={event.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/500x300?text=Event+Image';
                    }}
                  />
                  {event.hasTickets && (
                    <div className="ticket-badge">
                      <FaTicketAlt /> Tickets Available
                    </div>
                  )}
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title.split(' - ')[0]}</h3>
                  <div className="event-meta">
                    <span className="meta-item">
                      <FiMapPin /> {event.title.split(' - ')[1] || 'Nepal'}
                    </span>
                    {event.date && (
                      <span className="meta-item">
                        <FiClock /> {new Date(event.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <a
                    href={event.buyLink}
                    className="buy-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right-arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="slider-dots">
        {currentEvents.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsSlider;