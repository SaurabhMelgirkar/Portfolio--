import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Education = () => {
  const sectionRef = useScrollAnimation()
  
  const education = [
    {
      degree: 'MCA',
      institution: 'DY Patil Institute of MCA and Management, Akurdi',
      period: '2024–2026 (Current)',
      grade: 'SGPA: 7.58'
    },
    {
      degree: 'B.Sc. (CS)',
      institution: "MGM's College of CS and IT, Nanded",
      period: '2021–2024',
      grade: 'CGPA: 8.0'
    },
    {
      degree: 'XII',
      institution: 'Siva Sivani Jr. College, Hyderabad',
      period: '2021',
      grade: '79%'
    },
    {
      degree: 'X',
      institution: 'P. Jog School, Pune',
      period: '2019',
      grade: '80.20%'
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          EDUCATION
        </h2>
        <div ref={sectionRef} className="space-y-6 animate-fade-in">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-6 box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-purple-primary mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-secondary mb-1">
                    {edu.degree} | {edu.institution}
                  </h3>
                  <p className="text-text-light/80 mb-1">{edu.period}</p>
                  <p className="text-purple-primary font-semibold">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

