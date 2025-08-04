import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react"; // Add this import
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";      
import Contact from "./Components/Contact/Contact"; 
import ImageSlider from "./Imageslider/ImageSlider";
import SearchModal from "./Components/Search/SearchModel/SearchModal"; // Add this import
import EventsSlider from "./Components/Eventslider/Eventslider";
import SearchIcon from "./Components/Search/SearchIcons/SearchIcon"; // Add this import

function App() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Add this state

  return (
    <>
      <Navbar />
      {/* Add Search Icon (position this wherever you prefer) */}
      <SearchIcon onClick={() => setIsSearchOpen(true)} />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <ImageSlider />
            <EventsSlider/> 
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Add SearchModal here - will render when isSearchOpen is true */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}

export default App;

