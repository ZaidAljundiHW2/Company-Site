import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import AboutSukoon from './aboutSukoon';
import TrySukoon from './trySukoon'; // Import the TrySukoon component
import Footer from './customComponents/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-sukoon" element={<AboutSukoon />} />
          <Route path="/try-sukoon" element={<TrySukoon />} /> {/* New route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




