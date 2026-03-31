import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight, FaTicketAlt, FaRegImage } from 'react-icons/fa';
import { FiClock, FiMapPin, FiPlay, FiPause } from 'react-icons/fi';
import './EventsSlider.css';
import eventData from '../../../nepalieEvent.json';

const EventsSlider = () => {
  const [activeCategory, setActiveCategory] = useState(eventData[0]?.name || 'Music');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  
  const intervalRef = useRef(null);

  // Memoize current events to prevent unnecessary recalculations
  const currentEvents = useMemo(() => {
    return eventData.find(cat => cat.name === activeCategory)?.events || [];
  }, [activeCategory]);

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentEvents.length <= 1) return;
    setCurrentIndex(prev => (prev + 1) % currentEvents.length);
  }, [currentEvents.length]);

  const prevSlide = useCallback(() => {
    if (currentEvents.length <= 1) return;
    setCurrentIndex(prev => (prev - 1 + currentEvents.length) % currentEvents.length);
  }, [currentEvents.length]);

  // Handle Autoplay logic
  useEffect(() => {
    if (isAutoPlaying && currentEvents.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return clearAutoPlay;
  }, [isAutoPlaying, nextSlide, clearAutoPlay, currentEvents]);

  // Reset index when category changes
  const handleCategoryChange = (name) => {
    setActiveCategory(name);
    setCurrentIndex(0);
    setImageErrors({});
  };

  // Helper parsers
  const parseEvent = (fullTitle) => {
    const [title, location] = fullTitle.split(' - ');
    return { title, location: location || 'Nepal' };
  };

  // Swipe Logic
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 70) { nextSlide(); setTouchStart(null); }
    if (touchStart - touchEnd < -70) { prevSlide(); setTouchStart(null); }
  };

  if (!eventData.length) return <div className="loader">No events found.</div>;

  return (
    <section className="events-slider-wrapper">
      <header className="slider-header">
        <div className="header-text">
          <h2 className="slider-title">Featured Events</h2>
          <p className="slider-subtitle">Discover what's happening in Nepal</p>
        </div>
        
        <nav className="category-tabs" role="tablist">
          {eventData.map((cat) => (
            <button
              key={cat.name}
              className={`category-tab ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.name)}
              role="tab"
              aria-selected={activeCategory === cat.name}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </header>

      <div 
        className="main-slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Navigation Arrows */}
        {currentEvents.length > 1 && (
          <>
            <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous"><FaChevronLeft /></button>
            <button className="nav-btn next" onClick={nextSlide} aria-label="Next"><FaChevronRight /></button>
          </>
        )}

        <div className="slider-viewport">
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentEvents.map((event, index) => {
              const { title, location } = parseEvent(event.title);
              return (
                <div key={index} className="event-slide">
                  <div className="event-card-inner">
                    <div className="image-container">
                      {imageErrors[index] ? (
                        <div className="img-fallback"><FaRegImage /><span>No Image</span></div>
                      ) : (
                        <img 
                          src={event.image} 
                          alt={title} 
                          onError={() => setImageErrors(p => ({...p, [index]: true}))}
                        />
                      )}
                      {event.hasTickets && <span className="ticket-tag"><FaTicketAlt /> Tickets</span>}
                    </div>
                    
                    <div className="info-container">
                      <h3 className="info-title">{title}</h3>
                      <div className="info-meta">
                        <span><FiMapPin /> {location}</span>
                        {event.date && <span><FiClock /> {new Date(event.date).toDateString()}</span>}
                      </div>
                      {event.buyLink && (
                        <a href={event.buyLink} target="_blank" rel="noreferrer" className="cta-button">
                          Book Now
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="slider-footer">
        <div className="pagination-dots">
          {currentEvents.map((_, i) => (
            <span 
              key={i} 
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
        <button 
          className="play-pause-toggle" 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? <FiPause /> : <FiPlay />}
        </button>
      </footer>
    </section>
  );
};

export default EventsSlider;