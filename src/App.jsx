import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import CategoryIcons from "./Components/Icons/Icons";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/contact"  />
      <Route path='/login' element= {<Login />} />
      </Routes>
      <CategoryIcons/>
    </>
    



    
  );
}

export default App;

