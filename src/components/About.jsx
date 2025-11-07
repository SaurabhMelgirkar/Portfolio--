import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          ABOUT ME
        </h2>
        <div ref={sectionRef} className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-8 md:p-12 box-glow hover-glow animate-fade-in transition-all duration-300 hover:border-purple-secondary/60">
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            A dedicated and solution-oriented MCA student passionate about building innovative, real-world applications. 
            Skilled in Python, Java, JavaScript, and full-stack web technologies. Experienced in developing AI-powered projects 
            and automation systems that enhance efficiency and user experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

