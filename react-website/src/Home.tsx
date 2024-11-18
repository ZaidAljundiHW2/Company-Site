import React from 'react';
import NavBar from './customComponents/navBar'; // Import the NavBar
import Hero from './customComponents/hero';
import CompanyBrief from './customComponents/companyBrief';
import SubmissionCard from './customComponents/submissionCard';

const Home = () => {
  return (
    <div>
      <NavBar /> {/* Transparent navbar */}
      <Hero />
      <CompanyBrief />
      <SubmissionCard />
    </div>
  );
};

export default Home;