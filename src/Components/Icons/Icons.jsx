import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import './Icons.css';

const categories = [
  { icon: <MicIcon />, label: "Music" },
  { icon: <NightlifeIcon />, label: "Nightlife" },
  { icon: <MicIcon />, label: "Comedy" },
  { icon: <NightlifeIcon />, label: "Food & Drink" },
  { icon: <MicIcon />, label: "Sports" },
  { icon: <NightlifeIcon />, label: "Festivals" },
  { icon: <MicIcon />, label: "Conferences" },
  { icon: <NightlifeIcon />, label: "Workshops" }
];

const CategoryIcons = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (label) => {
    setSelectedEvent(label);
  };

  return (
    <div>
      <div className="category-icons-container">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-icon" onClick={() => handleClick(cat.label)}>
            <div>{cat.icon}</div>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-details">
        </div>
      )}
    </div>
  );
};

export default CategoryIcons;