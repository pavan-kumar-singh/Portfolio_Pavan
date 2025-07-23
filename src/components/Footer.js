import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone,FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => (
  <footer className="footer glass">
    <div className="footer-content">
      <h2 className="footer-title">Pavankumar Singh</h2>
      <p>Full Stack Developer | React | Java | Spring Boot</p>
      
      <div className="footer-social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:pavankumar@example.com"><FaEnvelope /></a>
        <a href="tel:+919999999999"><FaPhone /></a>
      </div>
      
      <p className="footer-copy">
        © {new Date().getFullYear()} Pavankumar Singh | All Rights Reserved. <p><FaMapMarkerAlt /> Bangalore, India</p>
      </p>
    </div>
  </footer>
)

export default Footer
