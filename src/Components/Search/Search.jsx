import { useState } from 'react';
import './Search.css';
import eventData from '../../../nepalieEvent.json'; // Make sure this path is correct

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const searchLower = searchTerm.toLowerCase();

    eventData.forEach((category) => {
      if (selectedCategory === 'All' || selectedCategory === category.name) {
        category.events.forEach(event => {
          if (event.title.toLowerCase().includes(searchLower)) {
            // Extract location from title (format: "Event Name - Location")
            const location = event.title.split(' - ')[1] || event.title.split(', ')[1] || '';
            
            results.push({
              ...event,
              category: category.name,
              name: event.title,
              location: location,
              status: event.hasTickets ? 'Tickets Available' : 'Coming Soon'
            });
          }
        });
      }
    });

    setSearchResults(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>FROMPOP BALLADS TOEMO ENCORES</h1>
        <p className="tagline">Get Into Live Music</p>
      </header>

      <div className="search-section">
        <h2>Explore Live Events in Nepal 🇳🇵</h2>
        
        <div className="search-controls">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>
              <i className="fas fa-search"></i> Search
            </button>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {eventData.map(category => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-section">
        {searchResults.length > 0 ? (
          <div className="events-grid">
            {searchResults.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                {event.location && <p className="location">{event.location}</p>}
                <p className={`status ${event.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {event.status}
                </p>
                {event.hasTickets && (
                  <a href={event.buyLink} className="buy-btn" target="_blank" rel="noopener noreferrer">
                    Buy Ticket
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : searchTerm ? (
          <p className="no-results">No events found matching your search.</p>
        ) : null}
      </div>
    </div>
  );
};

export default Search;