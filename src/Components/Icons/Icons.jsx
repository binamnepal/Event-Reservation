import React from 'react';
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

const CategoryIcons = () => (
  <div className="category-icons-container">
    {categories.map((cat, idx) => (
<div className="category-icon">
        <div>{cat.icon}</div>
        <p>{cat.label}</p>
      </div>
    ))}
  </div>
);

export default CategoryIcons;



