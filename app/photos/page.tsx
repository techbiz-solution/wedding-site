export default function Photos() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 font-light">Our Story in Photos</h2>
        <p className="font-sans text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Journey through the moments that brought us together and led to this beautiful celebration of love.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>

      {/* Engagement Photos Section */}
      <div className="w-full max-w-5xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Engagement Photos</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Photo 1 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">📸</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">First Date</h4>
            <p className="font-sans text-sm text-gray-600 text-center">Where it all began</p>
          </div>

          {/* Photo 2 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">💕</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">Beach Proposal</h4>
            <p className="font-sans text-sm text-gray-600 text-center">The perfect moment</p>
          </div>

          {/* Photo 3 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">🌅</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">Sunset Walks</h4>
            <p className="font-sans text-sm text-gray-600 text-center">Our favorite pastime</p>
          </div>

          {/* Photo 4 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">✈️</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">Travel Adventures</h4>
            <p className="font-sans text-sm text-gray-600 text-center">Exploring the world together</p>
          </div>

          {/* Photo 5 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">🏠</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">Home Sweet Home</h4>
            <p className="font-sans text-sm text-gray-600 text-center">Building our life together</p>
          </div>

          {/* Photo 6 */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-4xl">💍</div>
            </div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium text-center">Ring Shopping</h4>
            <p className="font-sans text-sm text-gray-600 text-center">Finding the perfect ring</p>
          </div>
        </div>
      </div>

      {/* Special Moments Section */}
      <div className="w-full max-w-5xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Special Moments</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="font-serif text-xl md:text-2xl text-gray-800 mb-4 font-medium">Celebration with Family</h4>
            </div>
            <p className="font-sans text-base text-gray-600 leading-relaxed text-center">
              Sharing our joy with the people who mean the most to us. Every moment captured with love and laughter.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🌺</div>
              <h4 className="font-serif text-xl md:text-2xl text-gray-800 mb-4 font-medium">Wedding Planning</h4>
            </div>
            <p className="font-sans text-base text-gray-600 leading-relaxed text-center">
              From choosing the perfect venue to selecting every detail, documenting our journey to the big day.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery Info */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Wedding Day Photos</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
          <div className="text-4xl mb-4">📷</div>
          <h4 className="font-serif text-xl md:text-2xl text-gray-800 mb-4 font-medium">Professional Photography</h4>
          <p className="font-sans text-base text-gray-600 mb-6 leading-relaxed max-w-2xl">
            Our talented photographer will capture every precious moment of our wedding day. 
            Photos will be available here shortly after the celebration.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Photo Sharing */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Share Your Photos</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Wedding Hashtag</h4>
            <p className="font-sans text-sm text-gray-600 mb-4">Use our hashtag to share your photos</p>
            <p className="font-sans text-lg font-medium text-gray-800 tracking-wide">#PumpuizAndPete2025</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Email Photos</h4>
            <p className="font-sans text-sm text-gray-600 mb-4">Send us your favorite moments</p>
            <p className="font-sans text-sm text-gray-800">photos@pumpuizandpete.com</p>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="text-center">
        <p className="font-sans text-sm md:text-base text-gray-500 font-medium mb-4">
          Thank you for being part of our journey and capturing these precious moments with us!
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>
    </div>
  )
} 