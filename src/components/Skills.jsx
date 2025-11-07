import React from 'react'
import { FaCode, FaDatabase, FaBrain, FaUsers } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'Oracle 10g', level: 75 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      icon: <FaBrain />,
      title: 'AI/ML Libraries & Data',
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'OpenCV', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 85 },
        { name: 'ChatGPT', level: 90 },
        { name: 'Gemini', level: 85 },
        { name: 'Copilot', level: 90 }
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Soft Skills',
      skills: [
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Time Management', level: 90 },
        { name: 'Adaptability', level: 88 }
      ]
    }
  ]

  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          TECHNICAL SKILLS
        </h2>
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-6 box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl text-purple-primary">{category.icon}</span>
                <h3 className="text-xl font-semibold text-purple-secondary">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-light text-sm font-medium">{skill.name}</span>
                      <span className="text-purple-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-bg/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-primary to-purple-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

