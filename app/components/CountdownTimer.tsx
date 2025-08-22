'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2025-12-05T00:00:00')
    
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' }
  ]

  return (
    <div className="text-center mb-8 md:mb-12 lg:mb-16">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[100px]">
              <div className="font-sans text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-gray-800 mb-1">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-sans text-xs sm:text-xs md:text-sm tracking-[0.2em] uppercase text-gray-600 font-medium">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4 sm:mt-6"></div>
    </div>
  )
} 