import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: "Technical Support Engineer",
    company: "Altruist Technologies",
    duration: "2022 - 2023",
    description:
      "Resolved Airtel Wi-Fi issues ensuring high customer satisfaction. Collaborated with cross-functional teams to improve service quality.",
  },
  {
    role: "Java Full-Stack Developer Intern",
    company: "KodNest Technologies",
    duration: "2021 - 2022",
    description:
      "Developed a secure e-commerce platform using Java, Spring Boot, and MySQL. Implemented responsive UI using React and CSS.",
  },
]

const Experience = () => (
  <motion.section
    className="experience-section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="section-header">
      <FaBriefcase className="section-icon" />
      <h2>Experience</h2>
    </div>
    <div className="experience-grid">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="experience-card"
          id="experience"
          whileHover={{ scale: 1.03 }}
        >
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <p className="duration">{exp.duration}</p>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default Experience
