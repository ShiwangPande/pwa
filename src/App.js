
import './App.css';
import Tabbar from './Components/Tabbar';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader.js";
import Mug from "./Pages/Mug.js";
import Makeup from "./Pages/Makeup.js";
import Photography from "./Pages/Photography.js";
import Stiching from "./Pages/Stiching.js";
import Computer from "./Pages/Computer.js";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <>
      {
        loading ?

          <Loader loading={loading} size={300} /> :
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/mug" element={<Mug />} />
              <Route path="/makeup" element={<Makeup />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/stiching" element={<Stiching />} />
              <Route path="/computer" element={<Computer />} />
            </Routes>
            <Tabbar />
          </Router>
      }
    </>
  );
}

export default App;
