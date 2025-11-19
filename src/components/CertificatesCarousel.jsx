import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight, FaCertificate, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// Helper to get asset path with base URL
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const CertificatesCarousel = () => {
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const certificates = [
    {
      image: getAssetPath('assets/Image.png'),
      title: 'State Level IoT Competition - 3rd Place',
      alt: 'State Level IoT Competition Certificate',
      year: '2024',
      organization: 'Sanjay Ghodawat University'
    },
    {
      image: getAssetPath('assets/Image (1).png'),
      title: 'Aavishkar 2024 Research Convention',
      alt: 'Aavishkar 2024 Certificate',
      year: '2024',
      organization: 'Aavishkar Research Convention'
    },
    {
      image: getAssetPath('assets/Image (2).png'),
      title: 'Project Presentation at Nanded',
      alt: 'Project Presentation Certificate',
      year: '2024',
      organization: 'MGM College, Nanded'
    },
    {
      image: getAssetPath('assets/WhatsApp Image 2025-10-20 at 1.36.21 AM.jpeg'),
      title: 'IJSCI Research Publication Certificate',
      alt: 'IJSCI Research Publication',
      year: '2024',
      organization: 'International Journal'
    },
    {
      image: getAssetPath('assets/WhatsApp Image 2025-10-20 at 1.32.00 AM.jpeg'),
      title: 'Receiving Certificate/Gift',
      alt: 'Certificate Award Ceremony',
      year: '2024',
      organization: 'Award Ceremony'
    }
  ]

  // Carousel navigation
  const nextCertificate = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
  }, [certificates.length])

  const prevCertificate = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
  }, [certificates.length])

  const goToCertificate = (index) => {
    setCurrentIndex(index)
  }

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextCertificate()
    }
    if (isRightSwipe) {
      prevCertificate()
    }
    
    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevCertificate()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextCertificate()
      }
    }

    const carouselContainer = document.getElementById('certificates-carousel')
    if (carouselContainer) {
      carouselContainer.addEventListener('keydown', handleKeyPress)
      return () => carouselContainer.removeEventListener('keydown', handleKeyPress)
    }
  }, [prevCertificate, nextCertificate])

  return (
    <div id="certificates-carousel" className="w-full max-w-6xl mx-auto" tabIndex={0}>
      {/* Professional Header */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="p-3 bg-purple-primary/20 rounded-full border border-purple-primary/40">
          <FaCertificate className="text-3xl text-purple-primary" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-text-light">
          Certificates & Awards
        </h3>
      </div>
      
      {/* Main Certificate Display */}
      <div className="relative bg-gradient-to-br from-dark-bg/90 to-dark-bg/70 border-2 border-purple-primary/30 rounded-3xl p-6 md:p-10 box-glow overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #9D4EDD 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative">
          {/* Large Navigation Arrows */}
          <button
            onClick={prevCertificate}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-4 md:p-5 bg-purple-primary/40 hover:bg-purple-primary/60 border-2 border-purple-primary rounded-full text-purple-primary hover:text-purple-secondary transition-all duration-300 hover-glow focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg hover:scale-110 shadow-2xl backdrop-blur-sm"
            aria-label="Previous certificate"
          >
            <FaAngleLeft className="text-3xl md:text-4xl" />
          </button>

          {/* Certificate Display Container */}
          <div 
            className="relative overflow-hidden rounded-2xl mx-12 md:mx-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center px-4 py-6"
                >
                  {/* Certificate Image Container */}
                  <div className="relative w-full max-w-4xl mx-auto group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-primary/30 to-purple-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                    
                    {/* Certificate Image */}
                    <div className="relative bg-dark-bg/50 rounded-2xl p-4 border border-purple-primary/20">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-auto rounded-xl shadow-2xl object-contain max-h-[70vh] mx-auto"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Failed to load image:', cert.image)
                          e.target.src = 'https://via.placeholder.com/800x600/9D4EDD/EAEAEA?text=Certificate+Not+Found'
                        }}
                      />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="mt-8 text-center max-w-2xl mx-auto">
                    <div className="inline-block bg-gradient-to-r from-purple-primary/20 to-purple-secondary/20 border border-purple-primary/30 rounded-full px-6 py-2 mb-4">
                      <p className="text-purple-primary font-semibold text-sm uppercase tracking-wider">
                        {cert.year}
                      </p>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-purple-secondary mb-3">
                      {cert.title}
                    </h4>
                    <p className="text-text-light/70 text-lg">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextCertificate}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-4 md:p-5 bg-purple-primary/40 hover:bg-purple-primary/60 border-2 border-purple-primary rounded-full text-purple-primary hover:text-purple-secondary transition-all duration-300 hover-glow focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg hover:scale-110 shadow-2xl backdrop-blur-sm"
            aria-label="Next certificate"
          >
            <FaAngleRight className="text-3xl md:text-4xl" />
          </button>
        </div>

        {/* Professional Navigation Indicators */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCertificate(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-primary ${
                index === currentIndex
                  ? 'w-10 bg-gradient-to-r from-purple-primary to-purple-secondary shadow-lg shadow-purple-primary/50'
                  : 'w-3 bg-purple-primary/30 hover:bg-purple-primary/50 hover:w-4'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>

        {/* Certificate Counter */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-dark-bg/50 border border-purple-primary/20 rounded-full px-4 py-2">
            <span className="text-purple-primary font-bold text-lg">{currentIndex + 1}</span>
            <span className="text-text-light/50">/</span>
            <span className="text-text-light/70 font-medium">{certificates.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificatesCarousel
