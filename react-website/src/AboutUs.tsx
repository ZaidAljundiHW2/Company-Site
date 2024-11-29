import React, { useState } from 'react';
import NavBar from './customComponents/navBar'; // Import the NavBar
import AboutUsHero from './customComponents/aboutUsHero';
import './AboutUs.css'; // Import the CSS file
import AboutUsCard from './customComponents/aboutUsCard'; // Import AboutUsCard directly

const AboutUs: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true); // State to toggle AboutUsCard visibility

  // Handler to close the AboutUsCard
  const handleClose = () => {
    setIsCardVisible(false);
  };

  return (
    <div>
      {/* Black navbar for About Us page */}
      <NavBar bgColor="black" /> 

      {/* Hero Section */}
      <AboutUsHero />

      {/* Conditionally Render AboutUsCard */}
      {isCardVisible && <AboutUsCard onClose={handleClose} />}
    </div>
  );
};

export default AboutUs;
