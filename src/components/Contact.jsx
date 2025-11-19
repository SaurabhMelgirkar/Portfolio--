import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // Form submission handled by FormSubmit.co
    // Form will submit normally to FormSubmit service
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          GET IN TOUCH
        </h2>
        <div ref={useScrollAnimation()} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/saurabhssm14@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-8 box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact from SAURABH.DEV!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/#contact`} />
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-purple-primary/50 rounded-lg text-text-light placeholder-text-light/50 focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/50 transition-colors"
                  aria-label="Your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-purple-primary/50 rounded-lg text-text-light placeholder-text-light/50 focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/50 transition-colors"
                  aria-label="Your email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-purple-primary/50 rounded-lg text-text-light placeholder-text-light/50 focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/50 transition-colors resize-none"
                  aria-label="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-secondary hover-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
                aria-label="Send message"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-8 box-glow hover-glow flex flex-col justify-center transition-all duration-300 hover:border-purple-secondary/60">
            <p className="text-xl text-text-light mb-6 text-center">Connect with me:</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/saurabh-melgirkar-57ab3a310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-dark-bg/80 border border-purple-primary/50 rounded-lg hover:bg-purple-primary/30 hover:border-purple-secondary hover-glow transition-all duration-300 group hover:scale-105"
              >
                <FaLinkedin className="text-2xl text-purple-primary group-hover:text-purple-secondary transition-colors" />
                <span className="text-text-light group-hover:text-purple-secondary transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://github.com/SaurabhMelgirkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-dark-bg/80 border border-purple-primary/50 rounded-lg hover:bg-purple-primary/30 hover:border-purple-secondary hover-glow transition-all duration-300 group hover:scale-105"
              >
                <FaGithub className="text-2xl text-purple-primary group-hover:text-purple-secondary transition-colors" />
                <span className="text-text-light group-hover:text-purple-secondary transition-colors">GitHub</span>
              </a>
              <a
                href="mailto:saurabhssm14@gmail.com?subject=Portfolio%20Contact&body=Hello%20Saurabh,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-dark-bg/80 border border-purple-primary/50 rounded-lg hover:bg-purple-primary/30 hover:border-purple-secondary hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
              >
                <FaEnvelope className="text-2xl text-purple-primary group-hover:text-purple-secondary transition-colors" />
                <span className="text-text-light group-hover:text-purple-secondary transition-colors">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

