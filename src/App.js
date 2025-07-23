import React from 'react'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About';
import Experience from './components/Experience'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Skills />
      <About/>
      <Projects />
      <Experience/>      
      <Footer />
    </div>
  )
}

export default App
