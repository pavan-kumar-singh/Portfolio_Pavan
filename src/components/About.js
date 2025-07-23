import React from 'react';
import './About.css';
import { FaUserGraduate } from 'react-icons/fa';

const About = () => (
  <section className="about-section glass" id="about">
    <div className="section-header">
      <FaUserGraduate className="section-icon" />
      <h2>About Me</h2>
    </div>
    <p>
      I am a passionate Full-Stack Developer with expertise in <strong>React, Java, Spring Boot</strong>, 
      and modern web technologies. With experience building <strong>e-commerce applications</strong> 
      and solving real-world technical problems, I focus on delivering quality solutions with 
      clean and maintainable code.
    </p>

    <h3 className="edu-title">🎓 Education</h3>
    <div className="education-timeline">
      <div className="edu-card">
        <h4>Bachelor of Engineering in Computer Science</h4>
        <p>Navodaya Institute of Technology | 2018 – 2022 | Raichur, Karnataka</p>
      </div>
      <div className="edu-card">
        <h4>PUE (12th)</h4>
        <p>Sir MV College | 2018 | Lingsugur, Raichur, Karnataka</p>
      </div>
      <div className="edu-card">
        <h4>SSLC (10th)</h4>
        <p>Little Flower School | 2015 | Lingsugur, Raichur, Karnataka</p>
      </div>
    </div>
  </section>
);

export default About;
