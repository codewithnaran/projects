import { useEffect, useState } from 'react'

export default function Component() {
  const [animate, setAnimate] = useState(false)
  const [showBee, setShowBee] = useState(false)

  useEffect(() => {
    // Start the rose animation after a short delay
    const roseTimer = setTimeout(() => setAnimate(true), 500)
    
    // Show the bee after the rose animation is complete
    const beeTimer = setTimeout(() => setShowBee(true), 1500)
    
    return () => {
      clearTimeout(roseTimer)
      clearTimeout(beeTimer)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-pink-100 to-pink-200 overflow-hidden">
      <div
        className={`absolute text-8xl transition-all duration-1000 ease-in-out ${
          animate
            ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
            : '-left-20 top-1/2 -translate-y-1/2 scale-100'
        }`}
        aria-label="Animated rose"
      >
        
      </div>
      {showBee && (
        <div 
          className="absolute text-4xl left-1/2 top-1/2 -translate-x-[30%] -translate-y-[130%] animate-bounce"
          style={{ animationDuration: '2s' }}
          aria-label="Honey bee sipping from the rose"
        >
          🐝
        </div>
      )}
    </div>
  )
}