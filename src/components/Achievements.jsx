import React from 'react'
import { FaTrophy } from 'react-icons/fa'
import CertificatesCarousel from './CertificatesCarousel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Achievements = () => {
  const achievementsRef = useScrollAnimation()
  const carouselRef = useScrollAnimation({ threshold: 0.05, rootMargin: '0px 0px -50px 0px' })
  
  const achievements = [
    {
      title: '1st Place – TechExpo 2024',
      description: 'YogaMate Project',
      year: '2024'
    },
    {
      title: '1st Place – TechExpo 2023',
      description: 'Complaint Management System',
      year: '2023'
    },
    {
      title: '3rd Place – Aavishkar Project Competition',
      description: 'Project Competition',
      year: '2024'
    },
    {
      title: '1st Place – Maharashtra Student Innovation Challenge',
      description: 'State Level Competition',
      year: '2024'
    },
    {
      title: 'QSpider Aptitude and GD',
      description: 'Secured full scholarship',
      year: '2024'
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light">
          ACHIEVEMENTS
        </h2>
        <div ref={achievementsRef} className="space-y-6 animate-fade-in mb-16 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-bg/70 to-dark-bg/50 border border-purple-primary/40 rounded-lg p-6 box-glow hover-glow transition-all duration-300 hover:border-purple-secondary/60 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <FaTrophy className="text-3xl text-purple-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-secondary mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-text-light/80 mb-1">{achievement.description}</p>
                  <p className="text-purple-primary font-semibold text-sm">{achievement.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Carousel */}
        <div ref={carouselRef} className="animate-fade-in mt-12">
          <CertificatesCarousel />
        </div>
      </div>
    </section>
  )
}

export default Achievements

