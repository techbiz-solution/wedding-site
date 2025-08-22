'use client'

import { useState } from 'react'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit RSVP')
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', guestCount: '' })
    } catch (error) {
      console.error('RSVP submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 font-light">RSVP</h2>
        <p className="font-sans text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Please let us know if you can join us for our special day.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-sans text-sm font-medium text-gray-700 mb-2 tracking-wide">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-200 font-sans text-gray-800 placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Number of Guests Field */}
          <div className="mb-8">
            <label htmlFor="guestCount" className="block font-sans text-sm font-medium text-gray-700 mb-2 tracking-wide">
              NUMBER OF GUESTS (INCLUDING YOURSELF)
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-200 font-sans text-gray-800"
            >
              <option value="">Select number of guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
              <option value="9">9 Guests</option>
              <option value="10">10+ Guests</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-sans text-sm tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm text-center">Thank you for your RSVP!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm text-center">There was an error submitting your RSVP. Please try again.</p>
            </div>
          )}
        </form>
      </div>

      <div className="text-center mt-8">
        <p className="font-sans text-sm text-gray-500">
          Questions about your RSVP? Contact us at rsvp@pumpuizandpete.com
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4"></div>
      </div>
    </div>
  )
} 