import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Home/Footer";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ImageSlider from "./Imageslider/ImageSlider";
import SearchModal from "./Components/Search/SearchModel/SearchModal"
import EventsSlider from "./Components/Eventslider/Eventslider";
import SearchIcon from "./Components/Search/SearchIcons/SearchIcon";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />

      <Routes>
        <Route path="/" element={
          <>
            <ImageSlider />
            <EventsSlider />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <SearchIcon onClick={() => setIsSearchOpen(true)} />
    </>
  );
}

export default App;