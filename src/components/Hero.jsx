import React from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa'
import Typewriter from './Typewriter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const tagline = "Building intelligent and scalable web solutions with code and creativity."

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={useScrollAnimation()} className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="/assets/WhatsApp Image 2025-10-19 at 11.43.14 PM.jpeg"
                alt="Saurabh Melgirkar - Python Full-Stack Developer"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-primary box-glow object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/256?text=SM'
                }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-secondary animate-pulse opacity-50"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-light">
              SAURABH SUDHIR MELGIRKAR
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-purple-secondary font-semibold">
              Python Full-Stack Developer
            </h2>
            <div className="text-xl md:text-2xl text-text-light min-h-[60px] flex items-center justify-center">
              <Typewriter text={tagline} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg md:text-xl">
            <a
              href="tel:+918374773428"
              className="flex items-center gap-2 text-text-light hover:text-purple-secondary transition-all duration-300 hover:scale-105"
            >
              <FaPhone className="text-purple-primary group-hover:text-purple-secondary" />
              <span>+91 8374773428</span>
            </a>
            <a
              href="mailto:saurabhssm14@gmail.com"
              className="flex items-center gap-2 text-text-light hover:text-purple-secondary transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope className="text-purple-primary group-hover:text-purple-secondary" />
              <span>saurabhssm14@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/saurabh-melgirkar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-light hover:text-purple-secondary transition-all duration-300 hover:scale-105"
            >
              <FaLinkedin className="text-purple-primary group-hover:text-purple-secondary" />
              <span>linkedin.com/in/saurabh-melgirkar</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/assets/saurabh_melgirkar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-secondary hover-glow transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
              aria-label="Download resume PDF"
            >
              <FaDownload />
              View Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-primary text-purple-primary rounded-lg font-semibold hover:bg-purple-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
              aria-label="Navigate to contact section"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

