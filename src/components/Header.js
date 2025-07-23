import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Header.css'

const Header = () => (
  <header className="header glass">
    <div className="header-top">
      <h1 className="glow-text">Pavankumar Singh</h1>
      
    </div>

    <p>Full Stack Developer | React | Java | Spring Boot</p>

    <div className="social">
      <a href="https://www.linkedin.com/in/pavankumarsingh2000/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/pavan-kumar-singh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>

    <div className="social contact-info">
      <a href="mailto:singhpavankumar25@gmail.com">
        <FaEnvelope /> singhpavankumar25@gmail.com
      </a>
      <a href="tel:+919482711620">
        <FaPhone /> +91 9482711620
      </a>
      <p><FaMapMarkerAlt /> Bangalore, India</p>
    </div>
    <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
  </header>
)

export default Header
