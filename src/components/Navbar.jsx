import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaUser, FaCode, FaFolder, FaTrophy, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'achievements', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Projects', href: '#projects', icon: <FaFolder /> },
    { name: 'Achievements', href: '#achievements', icon: <FaTrophy /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-purple-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-purple-primary hover:text-purple-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary rounded px-2"
            aria-label="Go to homepage"
          >
            <div className="w-8 h-8 bg-purple-primary rounded flex items-center justify-center">
              <FaCode className="text-white text-sm" />
            </div>
            <span>Saurabh's Portfolio</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-purple-primary/20 text-purple-primary'
                      : 'text-text-light hover:text-purple-primary hover:bg-purple-primary/10'
                  }`}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  <span className="text-sm">{link.icon}</span>
                  {link.name}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-primary text-2xl focus:outline-none focus:ring-2 focus:ring-purple-primary rounded p-1 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-2 w-full text-left text-text-light hover:text-purple-primary hover:bg-purple-primary/10 transition-all duration-300 px-4 py-3 rounded-lg"
                aria-label={`Navigate to ${link.name} section`}
              >
                <span>{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

