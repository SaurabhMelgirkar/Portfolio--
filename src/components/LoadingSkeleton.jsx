import React from 'react'

const LoadingSkeleton = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="bg-dark-bg/50 border border-purple-primary/30 rounded-lg p-6 animate-pulse">
        <div className="h-4 bg-purple-primary/20 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-purple-primary/20 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-purple-primary/20 rounded w-5/6"></div>
      </div>
    )
  }

  if (type === 'image') {
    return (
      <div className="w-full h-48 bg-purple-primary/20 rounded-lg animate-pulse"></div>
    )
  }

  return null
}

export default LoadingSkeleton

