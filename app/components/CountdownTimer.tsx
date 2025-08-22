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
    <div className="text-center mb-12 md:mb-16">
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 min-w-[80px] md:min-w-[100px]">
              <div className="font-sans text-2xl md:text-4xl font-light text-gray-800 mb-1">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-gray-600 font-medium">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-6"></div>
    </div>
  )
} 