// App.js (Update your App component)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Donate from './components/Donate';
import OurTeam from './components/OurTeam'; // Import OurTeam

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
            <Route path="/our-team" element={<OurTeam />} /> {/* Add the route for OurTeam */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;