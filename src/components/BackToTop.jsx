import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-purple-primary hover:bg-purple-secondary text-white rounded-full shadow-lg hover-glow transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  )
}

export default BackToTop

