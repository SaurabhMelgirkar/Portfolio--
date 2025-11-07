import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-primary/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-text-light">
          © 2025 Saurabh Melgirkar | Made with{' '}
          <FaHeart className="inline text-red-500 animate-pulse" /> in India
        </p>
      </div>
    </footer>
  )
}

export default Footer

