import React from 'react'
import NavBar from "./customComponents/navBar"
import Hero from "./customComponents/hero"
import CompanyBrief from "./customComponents/companyBrief"
import SubmissionCard from './customComponents/submissionCard'
import Footer from './customComponents/footer'

const App = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <CompanyBrief />
        <SubmissionCard />
        <Footer />
    </div>
  )
}

export default App;



