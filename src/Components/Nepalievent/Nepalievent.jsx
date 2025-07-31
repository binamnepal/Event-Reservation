import React, { useState } from "react";
import { Mic, Martini } from "lucide-react";
import nepaliEvents from "../../../nepalieEvent.json"; // Make sure this file is updated
import "./nepalievent.css";

// Icon mapping
const iconMap = {
  microphone: <Mic size={32} className="text-red-600" />,
  cocktail: <Martini size={32} className="text-red-600" />,
};

const NepaliEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (categoryName) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
    const element = document.getElementById(categoryName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter to selected category only
  const filteredEvents = selectedCategory
    ? nepaliEvents.filter((item) => item.name === selectedCategory)
    : [];

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h2 className="text-3xl">Explore Live Events in Nepal 🇳🇵</h2>

      {/* Top Category Icons */}
      <div className="icon-grid">
        {nepaliEvents.map((category, index) => (
          <button
            key={index}
            onClick={() => handleClick(category.name)}
            className={`category-icon ${
              selectedCategory === category.name ? "active" : ""
            }`}
          >
            {iconMap[category.icon]}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Event Cards - only if a category is selected */}
      <div className="event-grid mt-8">
        {filteredEvents.map((category, index) => (
          <div id={category.name} key={index} className="event-card">
            <div className="flex items-center gap-2 mb-2 text-red-600">
              {iconMap[category.icon]}
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {category.events
                .filter((event) => event.hasTickets)
                .map((event, idx) => (
                  <li key={idx} className="flex justify-between items-center gap-4 my-2">
                    <div>
                      <span className="font-medium">{event.title}</span>
                      <span className="text-sm text-green-600 ml-2">Tickets Available</span>
                    </div>
                    <a
                      href={event.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700"
                    >
                      Buy Ticket
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      </div>
  );
};

export default NepaliEvents;
