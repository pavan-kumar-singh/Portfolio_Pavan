import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => (
  <motion.section
    className="hero glass"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="profile-img" />
    <div className="hero-text">
      <h2>Hello, I'm <span>Pavankumar Singh</span></h2>
      <p>
        I am a graduate with expertise in Technical Support, and Full-Stack Development. 
        Experienced in resolving Airtel Wi-Fi issues at Altruist Technologies, ensuring high customer satisfaction. 
        Proficient in Java, SQL, Web Technologies, and developed an e-commerce platform during an internship at KodNest Technologies. 
        Certified Full-Stack Java Developer with strong problem-solving and communication skills. Adaptable team player with a passion for learning and innovation.
      </p>
      <a href="mailto:pavankumar@example.com" className="cta-btn">
        Hire Me
      </a>
    </div>
  </motion.section>
)

export default Hero
