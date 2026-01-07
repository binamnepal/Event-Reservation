import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaTicketAlt } from 'react-icons/fa';
import { FiClock, FiMapPin } from 'react-icons/fi';
import './EventsSlider.css';
import eventData from '../../../nepalieEvent.json';

const EventsSlider = () => {
  const [activeCategory, setActiveCategory] = useState('Music');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const intervalRef = useRef(null);

  const currentEvents = eventData.find(cat => cat.name === activeCategory)?.events || [];

  // Clear interval helper
  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    if (!isAutoPlaying || currentEvents.length <= 1) return;
    
    clearAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % currentEvents.length);
    }, 5000);
  }, [isAutoPlaying, currentEvents.length, clearAutoPlay]);

  // Auto-rotate slides
  useEffect(() => {
    startAutoPlay();
    return () => clearAutoPlay();
  }, [startAutoPlay, clearAutoPlay]);

  // Handle slide transition with debounce
  const handleTransition = useCallback((newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentEvents.length === 0) return;
    const newIndex = (currentIndex + 1) % currentEvents.length;
    handleTransition(newIndex);
    clearAutoPlay();
    startAutoPlay();
  }, [currentIndex, currentEvents.length, handleTransition, clearAutoPlay, startAutoPlay]);

  const prevSlide = useCallback(() => {
    if (currentEvents.length === 0) return;
    const newIndex = (currentIndex - 1 + currentEvents.length) % currentEvents.length;
    handleTransition(newIndex);
    clearAutoPlay();
    startAutoPlay();
  }, [currentIndex, currentEvents.length, handleTransition, clearAutoPlay, startAutoPlay]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    handleTransition(index);
    clearAutoPlay();
    startAutoPlay();
  }, [currentIndex, isTransitioning, handleTransition, clearAutoPlay, startAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Handle category change
  const handleCategoryChange = useCallback((categoryName) => {
    setActiveCategory(categoryName);
    setCurrentIndex(0);
    setImageErrors({});
    clearAutoPlay();
    startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  // Handle image errors
  const handleImageError = useCallback((eventIndex) => {
    setImageErrors(prev => ({ ...prev, [eventIndex]: true }));
  }, []);

  // Parse event location
  const getEventLocation = (title) => {
    const parts = title.split(' - ');
    return parts[1] || 'Nepal';
  };

  // Parse event title
  const getEventTitle = (title) => {
    return title.split(' - ')[0];
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return null;
    }
  };

  // Handle empty state
  if (!eventData || eventData.length === 0) {
    return (
      <section className="events-slider">
        <div className="empty-state">
          <p>No events available at the moment.</p>
        </div>
      </section>
    );
  }

  if (currentEvents.length === 0) {
    return (
      <section className="events-slider">
        <div className="slider-header">
          <h2 className="slider-title">Featured Events in Nepal</h2>
          <div className="category-tabs">
            {eventData.map((category) => (
              <button
                key={category.name}
                className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.name)}
                aria-label={`View ${category.name} events`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="empty-state">
          <p>No events in this category.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="events-slider" aria-label="Events slider">
      <div className="slider-header">
        <h2 className="slider-title">Featured Events in Nepal</h2>
        <div className="category-tabs" role="tablist">
          {eventData.map((category) => (
            <button
              key={category.name}
              className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.name)}
              role="tab"
              aria-selected={activeCategory === category.name}
              aria-label={`View ${category.name} events`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="slider-container">
        <button
          className="slider-arrow left-arrow"
          onClick={prevSlide}
          disabled={currentEvents.length <= 1 || isTransitioning}
          aria-label="Previous event"
        >
          <FaChevronLeft />
        </button>

        <div className="slider-track" role="region" aria-live="polite">
          {currentEvents.map((event, index) => {
            const isActive = index === currentIndex;
            const eventTitle = getEventTitle(event.title);
            const eventLocation = getEventLocation(event.title);
            const formattedDate = formatDate(event.date);

            return (
              <div
                key={`${activeCategory}-${index}`}
                className={`slide ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
                aria-hidden={!isActive}
              >
                <div className="event-card">
                  <div className="event-image">
                    {imageErrors[index] ? (
                      <div className="image-placeholder">
                        <span>Image unavailable</span>
                      </div>
                    ) : (
                      <img
                        src={event.image}
                        alt={`${eventTitle} event image`}
                        loading={index === currentIndex ? 'eager' : 'lazy'}
                        onError={() => handleImageError(index)}
                      />
                    )}
                    {event.hasTickets && (
                      <div className="ticket-badge" aria-label="Tickets available">
                        <FaTicketAlt /> Tickets Available
                      </div>
                    )}
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{eventTitle}</h3>
                    <div className="event-meta">
                      <span className="meta-item">
                        <FiMapPin aria-hidden="true" /> {eventLocation}
                      </span>
                      {formattedDate && (
                        <span className="meta-item">
                          <FiClock aria-hidden="true" /> {formattedDate}
                        </span>
                      )}
                    </div>
                    {event.buyLink && (
                      <a
                        href={event.buyLink}
                        className="buy-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get tickets for ${eventTitle}`}
                      >
                        Get Tickets
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="slider-arrow right-arrow"
          onClick={nextSlide}
          disabled={currentEvents.length <= 1 || isTransitioning}
          aria-label="Next event"
        >
          <FaChevronRight />
        </button>
      </div>

      {currentEvents.length > 1 && (
        <div className="slider-controls">
          <div className="slider-dots" role="tablist" aria-label="Event navigation">
            {currentEvents.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
          <button
            className="autoplay-toggle"
            onClick={() => setIsAutoPlaying(prev => !prev)}
            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      )}

      <div className="slider-counter" aria-live="polite" aria-atomic="true">
        {currentIndex + 1} / {currentEvents.length}
      </div>
    </section>
  );
};

export default EventsSlider;