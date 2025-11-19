import React, { useEffect, useRef } from 'react'
import { FaEnvelope, FaDownload, FaFilePdf } from 'react-icons/fa'
import { SiReact, SiJavascript, SiPython, SiMongodb, SiGithub, SiTensorflow, SiMysql } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const sectionRef = useScrollAnimation()
  const blackHoleRef = useRef(null)
  const skillsContainerRef = useRef(null)
  const profileRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blackHoleRef.current) {
        const rect = blackHoleRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const distance = Math.sqrt(x * x + y * y)
        const maxDistance = 200
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          blackHoleRef.current.style.transform = `translate(${x * force * 0.15}px, ${y * force * 0.15}px) scale(${1 + force * 0.15})`
        } else {
          blackHoleRef.current.style.transform = 'translate(0, 0) scale(1)'
        }
      }

      if (skillsContainerRef.current) {
        const rect = skillsContainerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / 25
        const y = (e.clientY - centerY) / 25
        
        skillsContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(0)`
      }

      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / 30
        const y = (e.clientY - centerY) / 30
        
        profileRef.current.style.transform = `perspective(1000px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg) translateZ(0)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleResumeDownload = () => {
    if (window.gtag) {
      window.gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'Resume Download',
        value: 1
      })
    }
  }

  const skills = [
    { icon: SiReact, name: 'React', angle: 0, radius: 90 },
    { icon: SiJavascript, name: 'JS', angle: 51, radius: 90 },
    { icon: SiPython, name: 'Python', angle: 102, radius: 90 },
    { icon: SiTensorflow, name: 'TensorFlow', angle: 153, radius: 90 },
    { icon: SiGithub, name: 'Git', angle: 204, radius: 90 },
    { icon: SiMongodb, name: 'MongoDB', angle: 255, radius: 90 },
    { icon: SiMysql, name: 'MySQL', angle: 306, radius: 90 },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Enhanced Black Hole Effect */}
      <div 
        ref={blackHoleRef}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-40 transition-transform duration-500 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(157, 78, 221, 0.8) 0%, rgba(199, 125, 255, 0.4) 25%, rgba(157, 78, 221, 0.2) 50%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Side - Profile and Text Content */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center gap-6 mb-6">
              <div 
                ref={profileRef}
                className="relative transition-transform duration-300 ease-out"
              >
                <img
                  src="/assets/WhatsApp Image 2025-10-19 at 11.43.14 PM.jpeg"
                  alt="Saurabh Melgirkar"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-primary object-cover shadow-2xl shadow-purple-primary/50"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/128?text=SM'
                  }}
                />
                <div className="absolute inset-0 rounded-full border-4 border-purple-secondary animate-pulse opacity-50"></div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-secondary mb-1">
                  Saurabh Melgirkar
                </h2>
                <p className="text-lg text-text-light/80">
                  Python Full-Stack Developer
                </p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
                Transforming Ideas into
              </span>
              <br />
              <span className="text-text-light">Seamless User Experience</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-light/80 leading-relaxed">
              A dedicated and solution-oriented graduate, presently enrolled in D. Y. Patil Institute's MCA program. I am skilled in Python, Java, JavaScript, and contemporary development tools, with a solid background in full-stack projects. I leverage robust backend logic with responsive front-end design to deliver scalable and maintainable solutions, eager to provide forward-thinking development teams with useful, real-world solutions. I have been awarded at university and state levels for innovation and technical excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/assets/saurabh_melgirkar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-purple-primary hover:bg-purple-secondary text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-primary/50 hover:shadow-purple-secondary/50 hover:scale-105"
              >
                <FaFilePdf /> View Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-purple-primary text-purple-primary rounded-lg font-semibold hover:bg-purple-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View my work →
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border border-text-light text-text-light rounded-lg font-semibold hover:bg-text-light hover:text-dark-bg transition-all duration-300 flex items-center gap-2"
              >
                Contact <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Side - Skills Showcase */}
          <div className="relative h-96 flex items-center justify-center">
            <div 
              ref={skillsContainerRef}
              className="relative w-full h-full transition-transform duration-500 ease-out"
            >
              {/* Enhanced Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(157, 78, 221, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(157, 78, 221, 0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
              
              {/* Skills Icons in Circular Pattern with Enhanced Effects */}
              {skills.map((skill, index) => {
                const Icon = skill.icon
                const x = Math.cos((skill.angle * Math.PI) / 180) * skill.radius
                const y = Math.sin((skill.angle * Math.PI) / 180) * skill.radius
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-125 hover:z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="bg-dark-bg/90 backdrop-blur-md border-2 border-purple-primary/40 rounded-xl p-4 hover:border-purple-primary hover:shadow-2xl hover:shadow-purple-primary/60 transition-all duration-500 group">
                      <Icon className="text-4xl text-text-light group-hover:text-purple-primary transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-xl bg-purple-primary/0 group-hover:bg-purple-primary/10 transition-all duration-500"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

