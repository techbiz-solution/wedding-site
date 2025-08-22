import Image from 'next/image'

export default function Travel() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 font-light">Travel & Accommodation</h2>
        <p className="font-sans text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          We&apos;ve gathered all the travel information you&apos;ll need to join us in Bangkok for our special day.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>

      {/* Venue Section */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Wedding Venue</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Venue Details - Left Side */}
            <div>
              <h4 className="font-serif text-xl md:text-2xl text-gray-800 mb-4 font-medium">RARIN – Bangkok Riverside Venue</h4>
              <p className="font-sans text-base text-gray-600 mb-4 leading-relaxed">
                Located along the beautiful Chao Phraya River, RARIN offers a stunning backdrop for our wedding celebration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-sans text-sm font-medium text-gray-700 mb-2">Address:</p>
                  <p className="font-sans text-sm text-gray-600">123 Riverside Road, Bangkok, Thailand</p>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-gray-700 mb-2">Date & Time:</p>
                  <p className="font-sans text-sm text-gray-600">Friday, December 5, 2025 at 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Venue Image - Right Side */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/venue.png"
                alt="RARIN Bangkok Riverside Venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Venue Location</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4490341855144!2d100.49002929999999!3d13.6912322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299bf6a84c907%3A0x560932bf43b5b621!2sRARIN-Bangkok%20Riverside%20Venue!5e0!3m2!1sen!2sth!4v1755905094120!5m2!1sen!2sth" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="RARIN-Bangkok Riverside Venue Location"
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <p className="font-sans text-sm text-gray-600 mb-3">
              📍 RARIN – Bangkok Riverside Venue
            </p>
            <a 
              href="https://maps.google.com/?q=RARIN-Bangkok+Riverside+Venue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-sans text-xs tracking-[0.2em] uppercase px-6 py-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg rounded-lg"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Where to Stay</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h4 className="font-serif text-lg md:text-xl text-gray-800 mb-3 font-medium">The Riverside Hotel</h4>
            <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
              Luxury accommodation with stunning river views, just 5 minutes from the venue.
            </p>
            <div className="space-y-2 mb-4">
              <p className="font-sans text-xs text-gray-500">📍 0.5 km from venue</p>
              <p className="font-sans text-xs text-gray-500">💰 $150-250 per night</p>
              <p className="font-sans text-xs text-gray-500">📞 +66 2 123 4567</p>
            </div>
            <a href="#" className="inline-block bg-black text-white font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Book Now
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h4 className="font-serif text-lg md:text-xl text-gray-800 mb-3 font-medium">Bangkok Grand Hotel</h4>
            <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
              Modern hotel in the heart of Bangkok, 15 minutes from the venue.
            </p>
            <div className="space-y-2 mb-4">
              <p className="font-sans text-xs text-gray-500">📍 2 km from venue</p>
              <p className="font-sans text-xs text-gray-500">💰 $100-180 per night</p>
              <p className="font-sans text-xs text-gray-500">📞 +66 2 987 6543</p>
            </div>
            <a href="#" className="inline-block bg-black text-white font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Transportation Section */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Getting Around</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🚕</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Taxi</h4>
            <p className="font-sans text-sm text-gray-600">Readily available throughout Bangkok</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🚇</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">BTS Skytrain</h4>
            <p className="font-sans text-sm text-gray-600">Fast and efficient public transport</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🚢</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">River Ferry</h4>
            <p className="font-sans text-sm text-gray-600">Scenic route along Chao Phraya River</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <p className="font-sans text-sm md:text-base text-gray-500 font-medium mb-4">
          Need help with travel arrangements?
        </p>
        <p className="font-sans text-sm text-gray-500">
          Contact us at travel@pumpuizandpete.com
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4"></div>
      </div>
    </div>
  )
} 