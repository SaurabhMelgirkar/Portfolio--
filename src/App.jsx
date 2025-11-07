import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

