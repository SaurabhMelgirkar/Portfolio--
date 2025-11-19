import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Helper to get asset path with base URL
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const allProjects = [
    {
      title: 'YogaMate (AI-Powered Yoga Trainer)',
      image: getAssetPath('assets/unnamed.jpg'),
      tags: 'Python, ML, TensorFlow',
      description: 'Built with Python, ML, and TensorFlow; achieved top honors at Aavishkar 2024.',
      features: [
        'Utilized Mediapipe and OpenCV to build the innovative model',
        'Implemented an advanced 8-node Artificial Neural Network',
        'Achieved top honours (Triumph) at Aavishkar 2024'
      ],
      github: 'https://github.com/SaurabhMelgirkar/Yoga-Mate',
      category: 'Python'
    },
    {
      title: 'IoT-Based Home Automation',
      image: getAssetPath('assets/iot(1).jpg'),
      tags: 'ESP32, IoT, Python',
      description: 'Created ESP32-powered system reducing energy consumption by 15%.',
      features: [
        'Implemented an ESP32 microcontroller for remote device control',
        'Earned 3rd place and Rs 5,000 at a state competition',
        'Showcased advanced features for device automation'
      ],
      category: 'IoT'
    },
    {
      title: 'Complaint Portal',
      image: getAssetPath('assets/complaint portal(1).jpg'),
      tags: 'PHP, MySQL',
      description: 'Developed a centralized complaint management system using PHP and MySQL.',
      features: [
        'Built using PHP and integrated with MySQL for robust data handling',
        'Employs a secure input-based Digital Complaint Management System',
        'Secured 1st place at TechExpo 2023'
      ],
      github: 'https://github.com/SaurabhMelgirkar/Complaint-Portal-/tree/master/Complaint%20Portal',
      category: 'PHP'
    },
    {
      title: 'Emoify',
      image: getAssetPath('assets/emo.jpg'),
      tags: 'Flask, TensorFlow, OpenCV',
      description: 'Emotion-based music suggestion app using Flask, TensorFlow, and OpenCV.',
      features: [
        'Utilized Flask to create a lightweight, Python-driven web server',
        'Employs TensorFlow and OpenCV for real-time emotion detection',
        'Personalized music suggestion system based on emotional data'
      ],
      github: 'https://github.com/SaurabhMelgirkar/emoify',
      category: 'Python'
    }
  ]

  const categories = ['All', 'Python', 'React', 'PHP', 'IoT']

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => 
        project.tags.toLowerCase().includes(activeFilter.toLowerCase()) ||
        project.category === activeFilter
      )

  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          PROJECTS
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-purple-primary text-white hover-glow'
                  : 'bg-dark-bg/50 border border-purple-primary/40 text-text-light hover:border-purple-secondary hover:bg-purple-primary/20'
              }`}
              aria-label={`Filter projects by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-bg/80 to-dark-bg/50 border border-purple-primary/40 rounded-lg overflow-hidden box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60 hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image'
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-purple-primary/80 text-sm mb-3">{project.tags}</p>
                <p className="text-text-light mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-text-light text-sm">
                      <FaCheckCircle className="text-purple-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-primary hover:text-purple-secondary transition-colors"
                  >
                    <FaGithub />
                    <span>View Code</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

