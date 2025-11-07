import React from 'react'
import { FaProjectDiagram, FaCode, FaAward, FaCalendarAlt } from 'react-icons/fa'

const Stats = () => {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: '5+',
      label: 'Projects Completed',
      color: 'text-purple-primary'
    },
    {
      icon: <FaCode />,
      number: '15+',
      label: 'Technologies',
      color: 'text-purple-secondary'
    },
    {
      icon: <FaAward />,
      number: '5+',
      label: 'Achievements',
      color: 'text-purple-primary'
    },
    {
      icon: <FaCalendarAlt />,
      number: '2+',
      label: 'Years Experience',
      color: 'text-purple-secondary'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-bg/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-6 text-center box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60 hover:scale-105"
            >
              <div className={`text-4xl mb-3 ${stat.color} flex justify-center`}>
                {stat.icon}
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-text-light/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

