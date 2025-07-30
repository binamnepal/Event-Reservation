import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import CategoryIcons from "./Components/Icons/Icons";
import Home from "./Components/Home/home";
import About from "./Components/About/About";      
import Contact from "./Components/Contact/Contact"; 
import ImageSlider from "./Imageslider/ImageSlider";
function App() {
  const location = useLocation();
  const hideIconsOn = ["/login", "/about", "/contact"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ImageSlider/>

      
      {!hideIconsOn.includes(location.pathname) && <CategoryIcons />}


    </>
  );
}

export default App;


