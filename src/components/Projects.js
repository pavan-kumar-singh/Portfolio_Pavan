import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import '../styles.css'
import { FaRocket } from "react-icons/fa";

const projects = [
  {
    title: 'Online Course Portal',
    desc: 'Secure platform for courses with Java, Spring Boot, and MySQL.',
    link: '#',
    github: '#'
  },
  {
    title: 'E-Commerce Web App',
    desc: 'React + Spring Boot app with payment gateway integration.',
    link: '#',
    github: '#'
  },
  {
    title: 'Blog Application',
    desc: 'Spring Boot + React app with image upload & comments.',
    link: '#',
    github: '#'
  }
]

const Projects = () => (
  <motion.section
    className="projects-section glass"
    initial={{ opacity: 0 }}
    id='projects'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <div className="section-header">
      <FaRocket className="section-icon" />
      <h2>Projects</h2>
    </div>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div className="buttons">
            <a href={project.link} className="btn live">Live Demo</a>
            <a href={project.github} className="btn code">Code</a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default Projects
