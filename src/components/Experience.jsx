import React from 'react'
import { FaCalendarAlt, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const experiences = [
    {
      title: 'Python Developer Intern',
      company: 'OASIS INFOBYTE',
      period: 'Jun 2025 – Jul 2025',
      icon: <FaBriefcase />,
      points: [
        'Completed a one-month AICTE OIB-SIP internship in Python Programming.',
        'Gained hands-on exposure to OOP, data structures, file handling, and core Python libraries.',
        'Built multiple mini-projects to improve logical reasoning and clean code practices.',
        'Enhanced problem-solving, debugging, and real-world application development skills.',
        'Applied Python in automation and data manipulation tasks.'
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'TEDx DYPAKURDI',
      period: 'React.js, Node.js, MongoDB Atlas, Razorpay, Google Sheets API',
      icon: <FaBriefcase />,
      points: [
        'Developed and deployed a TEDx ticket booking platform using React and Node.js.',
        'Integrated Razorpay for secure payments and managed booking limits (400 tickets max).',
        'Implemented real-time ticket updates and automated PDF + email confirmations.',
        'Stored all user data in MongoDB Atlas and appended booking details to Google Sheets.'
      ],
      link: 'https://www.tedxdypakurdi.com/'
    }
  ]

  const sectionRef = useScrollAnimation()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          EXPERIENCE
        </h2>
        
        {/* Horizontal Scrolling Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide pb-8">
            <div className="flex md:flex-row flex-col gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative min-w-[90vw] md:min-w-0 bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border-l-4 border-purple-primary rounded-lg p-6 md:p-8 box-glow hover-glow transition-all duration-300 hover:border-purple-secondary hover:scale-[1.01]"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-primary rounded-full border-4 border-dark-bg box-glow flex items-center justify-center">
                    <span className="text-purple-secondary text-xs">{exp.icon}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-purple-secondary mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-text-light mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-text-light/80">
                        <FaCalendarAlt className="text-purple-primary" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 flex items-center gap-2 text-purple-primary hover:text-purple-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary rounded px-2"
                        aria-label="View website"
                      >
                        <span>View Website</span>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-text-light">
                        <span className="text-purple-primary mt-1 flex-shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator (Desktop) */}
          <div className="hidden md:flex justify-center mt-8 gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-purple-primary/50"></div>
            <p className="text-text-light/60 text-sm ml-4">Scroll horizontally to view more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
