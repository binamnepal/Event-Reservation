import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventData from '../../../nepalieEvent.json';
import './nepalievent.css';

const Nepalievents = () => {
  const [activeCategory, setActiveCategory] = useState('Music');
  const currentEvents = eventData.find(cat => cat.name === activeCategory)?.events || [];

  const getCategoryDescription = (category) => {
    const descriptions = {
      "Music": "Experience the vibrant music scene of Nepal with live performances across genres",
      "Nightlife": "Discover Kathmandu's hottest clubs and Pokhara's lakeside parties",
      "Comedy": "Laugh out loud with Nepal's funniest comedians and improv acts",
      "Food & Drink": "Taste Nepal's diverse culinary traditions at food festivals",
      "Sports": "Participate or watch exciting sporting events across Nepal",
      "Festivals": "Celebrate Nepal's rich cultural heritage at traditional festivals",
      "Conferences": "Learn from experts at professional and academic conferences",
      "Workshops": "Develop new skills through hands-on workshops and classes"
    };
    return descriptions[category] || `Explore ${category} events in Nepal`;
  };

  return (
    <div className="all-events-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Explore Live Events in Nepal <span className="np-flag">NP</span></h1>
        <p className="tagline">Discover amazing experiences across the country</p>
      </div>

      {/* Category Navigation */}
      <div className="category-nav">
        {eventData.map(category => (
          <button
            key={category.name}
            className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <i className={`fas fa-${category.icon}`}></i> {category.name}
          </button>
        ))}
      </div>

      {/* Current Category Section */}
      <div className="current-category">
        <h2 className="category-title">{activeCategory} Events</h2>
        <p className="category-description">
          {getCategoryDescription(activeCategory)}
        </p>
        
        <div className="events-grid">
          {currentEvents.map((event, index) => (
            <div key={index} className="event-card">
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
                  <div className="ticket-badge">Tickets Available</div>
                )}
              </div>
              <div className="event-details">
                <h3>{event.title.split(' - ')[0]}</h3>
                <div className="event-meta">
                  <span><i className="fas fa-map-marker-alt"></i> {event.title.split(' - ')[1] || 'Nepal'}</span>
                  {event.date && <span><i className="fas fa-calendar-alt"></i> {new Date(event.date).toLocaleDateString()}</span>}
                </div>
                <a 
                  href={event.buyLink} 
                  className="buy-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Buy Tickets <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nepalievents;