import React, { useState, useEffect, useRef } from 'react';
import './SearchModal.css';

const suggestions = [
  'Wedding in Kathmandu',
  'Corporate conference',
  'Birthday party',
  'Cultural festival',
  'Music events Nepal',
  'Outdoor events',
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="search-modal">
        <div className="search-modal__header">
          <div className="search-modal__input-wrap">
            <svg className="search-modal__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="search-modal__input"
              placeholder="Search events, services, locations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="search-modal__clear" onClick={() => setQuery('')} aria-label="Clear">✕</button>
            )}
          </div>
          <button className="search-modal__close" onClick={onClose}>Cancel</button>
        </div>

        <div className="search-modal__body">
          {!query && (
            <>
              <p className="search-modal__label">Popular searches</p>
              <div className="search-modal__suggestions">
                {suggestions.map((s) => (
                  <button key={s} className="search-modal__suggestion" onClick={() => setQuery(s)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          {query && (
            <div className="search-modal__results">
              <p className="search-modal__label">Results for "<strong>{query}</strong>"</p>
              <div className="search-modal__empty">
                <span>🔍</span>
                <p>Browse our <a href="/contact">contact page</a> to inquire about a specific event type.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}