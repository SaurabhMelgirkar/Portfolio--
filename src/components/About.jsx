import React from 'react'
import { FaFolder, FaCode, FaQuestionCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const sectionRef = useScrollAnimation()

  const stats = [
    { icon: <FaFolder />, number: '5+', label: 'Projects Completed' },
    { icon: <FaCode />, number: '15+', label: 'Technologies Mastered' },
    { icon: <FaQuestionCircle />, number: '2', label: 'VS extensions' },
    { icon: <FaQuestionCircle />, number: '2', label: 'Research Papers' },
  ]

  const skillTags = ['React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'MongoDB']

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-text-light/70 text-lg">
            Building thoughtful, performant experiences across web and AI
          </p>
        </div>

        <div ref={sectionRef} className="space-y-12 animate-fade-in">
          {/* Who I Am Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-primary text-xl">*</span>
                <h3 className="text-2xl font-bold text-text-light">Who I Am</h3>
              </div>
              <p className="text-text-light/80 leading-relaxed">
                A passionate Fullstack Developer and AI/ML Enthusiast with expertise in modern web technologies and artificial intelligence. 
                I specialize in building scalable applications and writing clean, maintainable code.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-bg/50 border border-purple-primary/20 rounded-lg p-4 hover:border-purple-primary/60 transition-all duration-300"
                >
                  <div className="text-purple-primary text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-text-light mb-1">{stat.number}</div>
                  <div className="text-text-light/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What Drives Me Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-primary text-xl">◎</span>
              <h3 className="text-2xl font-bold text-text-light">What Drives Me</h3>
            </div>
            <p className="text-text-light/80 leading-relaxed max-w-3xl">
              I'm motivated by the potential of AI-powered educational platforms, efficient web applications, and machine learning 
              to solve real-world problems. Every project is an opportunity to learn, innovate, and make a meaningful impact.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            {skillTags.map((tag, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-dark-bg/50 border border-purple-primary/30 rounded-lg text-text-light hover:border-purple-primary hover:bg-purple-primary/10 transition-all duration-300"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="text-center space-y-4 pt-8">
            <div className="text-purple-primary text-6xl font-serif">"</div>
            <p className="text-text-light/80 italic text-lg max-w-3xl mx-auto">
              The best way to predict the future is to create it. Every line of code I write is a step towards building tomorrow's solutions today.
            </p>
            <p className="text-purple-primary font-semibold">- Saurabh Melgirkar</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

