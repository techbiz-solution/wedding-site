import Image from 'next/image'
import CountdownTimer from './components/CountdownTimer'

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
      {/* Countdown Section */}
      <CountdownTimer />

      {/* Main Image */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl aspect-[4/3] mb-12 md:mb-16 lg:mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl"></div>
        <Image
          src="/images/pp_logo.png"
          alt="Pumpuiz and Pete"
          fill
          className="object-cover rounded-2xl shadow-2xl"
          priority
        />
      </div>

      {/* Bottom Section with Date, Location, and RSVP */}
      <div className="w-full max-w-4xl lg:max-w-5xl text-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12 xl:space-x-20 mb-10 md:mb-12 lg:mb-16 space-y-6 md:space-y-0">
          {/* Date Block */}
          <div className="text-center">
            <p className="font-sans text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gray-700 mb-1">DECEMBER</p>
            <p className="font-sans text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gray-700">05, 2025</p>
          </div>

          {/* Vertical Line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block w-px h-16 lg:h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* RSVP Button */}
          <div className="flex flex-col items-center">
            <a 
              href="/rsvp"
              className="group relative bg-black text-white font-sans text-sm tracking-[0.3em] uppercase px-6 sm:px-8 md:px-10 py-3 md:py-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
            >
              RSVP
              <div className="absolute inset-0 border border-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Vertical Line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block w-px h-16 lg:h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          {/* Location Block */}
          <div className="text-center">
            <p className="font-sans text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-gray-700 mb-1">RARIN</p>
            <p className="font-sans text-base sm:text-lg md:text-xl font-light tracking-[0.2em] uppercase text-gray-600 max-w-[200px] mx-auto">Bangkok Riverside Venue</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-gray-600 mb-2 font-medium">WEDDING DAY</p>
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-gray-600 font-medium">FRIDAY, DECEMBER 05, 2025</p>
        </div>
      </div>
    </div>
  )
}
