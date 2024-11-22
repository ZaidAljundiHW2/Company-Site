import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './customComponents/hero';
import CompanyBrief from './customComponents/companyBrief';
import SubmissionCard from './customComponents/submissionCard';
import Footer from './customComponents/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Sections */}
        <section id="home">
          <Hero />
        </section>
        <section id="aboutUs">
          <CompanyBrief />
        </section>
        <section id="contactUs">
          <SubmissionCard />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




