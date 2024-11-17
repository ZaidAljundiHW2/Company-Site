import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import CompanyLogo from '@/images/companyLogo.png'
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo */}
      <div className="footer-logo">
      <img src= {CompanyLogo} alt = "Company Logo" height = {100} width = {100} style = {{backgroundColor: 'transparent'}}></img>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>

      {/* Locations and Contact Info */}
      <div className="locations">
        <p>Dubai Alqouz – City Center</p>
        <p>Dubai,Media City 1408</p>
        <p>vectortech@gmail.com</p>
        <p>+971 54 345 0163</p>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Vector Tech UAE. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


