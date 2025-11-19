import React, { useState } from 'react'
import { FaStar, FaGlobe, FaServer, FaDatabase, FaBrain, FaWrench, FaCode, FaJava, FaUsers, FaLightbulb, FaClock, FaSync } from 'react-icons/fa'
import { SiReact, SiJavascript, SiPython, SiFlask, SiDjango, SiMysql, SiMongodb, SiTensorflow, SiGit, SiHtml5, SiCss3, SiBootstrap, SiPostgresql, SiFastapi, SiRender, SiVercel } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All Skills')
  const sectionRef = useScrollAnimation()

  const filters = [
    { name: 'All Skills', icon: <FaStar /> },
    { name: 'Languages & Frameworks', icon: <FaCode /> },
    { name: 'Databases & Tools', icon: <FaDatabase /> },
    { name: 'AI/ML Libraries & Data', icon: <FaBrain /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
  ]

  const allSkills = [
    // Languages & Frameworks
    { name: 'Python', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: SiPython },
    { name: 'Java', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: FaJava },
    { name: 'JavaScript', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: SiJavascript },
    { name: 'React.js', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: SiReact },
    { name: 'Django', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: SiDjango },
    { name: 'Flask', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: SiFlask },
    { name: 'FastAPI', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: SiFastapi },
    { name: 'REST API', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: FaCode },
    { name: 'DSA', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: FaCode },
    { name: 'HTML5', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: SiHtml5 },
    { name: 'CSS3', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: SiCss3 },
    { name: 'Bootstrap', category: 'Languages & Frameworks', level: 'Advanced', levelNum: 85, icon: SiBootstrap },
    { name: 'OOP', category: 'Languages & Frameworks', level: 'Expert', levelNum: 95, icon: FaCode },
    
    // Databases & Tools
    { name: 'MongoDB', category: 'Databases & Tools', level: 'Expert', levelNum: 95, icon: SiMongodb },
    { name: 'PostgreSQL', category: 'Databases & Tools', level: 'Advanced', levelNum: 85, icon: SiPostgresql },
    { name: 'MySQL', category: 'Databases & Tools', level: 'Advanced', levelNum: 85, icon: SiMysql },
    { name: 'Oracle 10g', category: 'Databases & Tools', level: 'Intermediate', levelNum: 75, icon: FaDatabase },
    { name: 'SQL Handling', category: 'Databases & Tools', level: 'Expert', levelNum: 95, icon: FaDatabase },
    { name: 'CRUD Operations', category: 'Databases & Tools', level: 'Expert', levelNum: 95, icon: FaCode },
    { name: 'Git', category: 'Databases & Tools', level: 'Expert', levelNum: 95, icon: SiGit },
    { name: 'Render', category: 'Databases & Tools', level: 'Advanced', levelNum: 85, icon: SiRender },
    { name: 'Vercel', category: 'Databases & Tools', level: 'Advanced', levelNum: 85, icon: SiVercel },
    
    // AI/ML Libraries & Data
    { name: 'TensorFlow', category: 'AI/ML Libraries & Data', level: 'Advanced', levelNum: 85, icon: SiTensorflow },
    { name: 'Scikit-learn', category: 'AI/ML Libraries & Data', level: 'Expert', levelNum: 95, icon: FaBrain },
    { name: 'Mediapipe', category: 'AI/ML Libraries & Data', level: 'Advanced', levelNum: 85, icon: FaBrain },
    { name: 'OpenCV (cv2)', category: 'AI/ML Libraries & Data', level: 'Advanced', levelNum: 85, icon: FaBrain },
    { name: 'Pandas', category: 'AI/ML Libraries & Data', level: 'Expert', levelNum: 95, icon: FaBrain },
    { name: 'NumPy', category: 'AI/ML Libraries & Data', level: 'Expert', levelNum: 95, icon: FaBrain },
    { name: 'ChatGPT', category: 'AI/ML Libraries & Data', level: 'Expert', levelNum: 95, icon: FaBrain },
    { name: 'Gemini', category: 'AI/ML Libraries & Data', level: 'Advanced', levelNum: 85, icon: FaBrain },
    { name: 'Copilot', category: 'AI/ML Libraries & Data', level: 'Advanced', levelNum: 85, icon: FaCode },
    
    // Soft Skills
    { name: 'Team Collaboration', category: 'Soft Skills', level: 'Expert', levelNum: 95, icon: FaUsers },
    { name: 'Problem Solving', category: 'Soft Skills', level: 'Expert', levelNum: 95, icon: FaLightbulb },
    { name: 'Time Management', category: 'Soft Skills', level: 'Advanced', levelNum: 85, icon: FaClock },
    { name: 'Adaptability', category: 'Soft Skills', level: 'Advanced', levelNum: 85, icon: FaSync },
  ]

  const filteredSkills = activeFilter === 'All Skills' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter)

  // Group skills by category for better organization
  const skillsByCategory = {
    'Languages & Frameworks': allSkills.filter(s => s.category === 'Languages & Frameworks'),
    'Databases & Tools': allSkills.filter(s => s.category === 'Databases & Tools'),
    'AI/ML Libraries & Data': allSkills.filter(s => s.category === 'AI/ML Libraries & Data'),
    'Soft Skills': allSkills.filter(s => s.category === 'Soft Skills'),
  }

  const getLevelColor = (level) => {
    if (level === 'Expert') return 'from-purple-primary to-purple-secondary'
    if (level === 'Advanced') return 'from-purple-primary/80 to-purple-secondary/80'
    return 'from-purple-primary/60 to-purple-secondary/60'
  }

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-text-light/70 text-lg">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? 'bg-purple-primary text-white shadow-lg shadow-purple-primary/50'
                  : 'bg-dark-bg/50 border border-purple-primary/30 text-text-light hover:border-purple-primary/60'
              }`}
            >
              <span className="text-sm">{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {activeFilter === 'All Skills' ? (
          // Show grouped by category
          <div ref={sectionRef} className="space-y-12 animate-fade-in">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-purple-primary mb-6 flex items-center gap-2">
                  <span>{filters.find(f => f.name === category)?.icon}</span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={index}
                        className="bg-dark-bg/50 border border-purple-primary/20 rounded-lg p-4 hover:border-purple-primary/60 hover:shadow-lg hover:shadow-purple-primary/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {Icon ? (
                            <Icon className="text-2xl text-purple-primary" />
                          ) : (
                            <div className="w-8 h-8 bg-purple-primary/20 rounded flex items-center justify-center">
                              <span className="text-purple-primary text-xs font-bold">{skill.name.charAt(0)}</span>
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="text-text-light font-semibold">{skill.name}</h3>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-text-light/70">Level</span>
                            <span className="text-purple-primary font-semibold">{skill.level}</span>
                          </div>
                          <div className="w-full bg-dark-bg/50 rounded-full h-2 overflow-hidden">
                            <div
                              className={`bg-gradient-to-r ${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.levelNum}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show filtered skills
          <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="bg-dark-bg/50 border border-purple-primary/20 rounded-lg p-4 hover:border-purple-primary/60 hover:shadow-lg hover:shadow-purple-primary/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {Icon ? (
                      <Icon className="text-2xl text-purple-primary" />
                    ) : (
                      <div className="w-8 h-8 bg-purple-primary/20 rounded flex items-center justify-center">
                        <span className="text-purple-primary text-xs font-bold">{skill.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-text-light font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-text-light/70">Level</span>
                      <span className="text-purple-primary font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-dark-bg/50 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.levelNum}%` }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills

