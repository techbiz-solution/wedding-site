export default function DressCode() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 font-light">Dress Code</h2>
        <p className="font-sans text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Help us create the perfect atmosphere by following our dress code guidelines for our special day.
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>

      {/* Main Dress Code */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Formal Attire</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
          <div className="text-4xl mb-4">👗</div>
          <h4 className="font-serif text-xl md:text-2xl text-gray-800 mb-4 font-medium">Black Tie Optional</h4>
          <p className="font-sans text-base text-gray-600 mb-6 leading-relaxed max-w-2xl">
            We invite you to dress in your finest attire to celebrate this special occasion with us.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">What to Wear</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Women */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👰</div>
              <h4 className="font-serif text-lg md:text-xl text-gray-800 font-medium">For Women</h4>
            </div>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Cocktail dresses or formal gowns</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Elegant jumpsuits or pantsuits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Heels or formal flats</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Statement jewelry and accessories</span>
              </li>
            </ul>
          </div>

          {/* For Men */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🤵</div>
              <h4 className="font-serif text-lg md:text-xl text-gray-800 font-medium">For Men</h4>
            </div>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Dark suits or tuxedos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Dress shirts with ties or bow ties</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Dress shoes (black or dark brown)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-sans text-sm text-gray-600">Belt and formal accessories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* What to Avoid */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">What to Avoid</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-gray-800 font-medium mb-4">Clothing</h4>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">Jeans or casual pants</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">T-shirts or casual tops</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">Athletic wear or sneakers</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-gray-800 font-medium mb-4">Colors & Patterns</h4>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">Overly bright or neon colors</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">Large, distracting patterns</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="font-sans text-sm text-gray-600">White (reserved for the couple)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather & Comfort */}
      <div className="w-full max-w-4xl mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 font-light">Weather & Comfort</h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🌡️</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Temperature</h4>
            <p className="font-sans text-sm text-gray-600">December in Bangkok: 20-30°C (68-86°F)</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🌧️</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Weather</h4>
            <p className="font-sans text-sm text-gray-600">Dry season, low chance of rain</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">💧</div>
            <h4 className="font-serif text-lg text-gray-800 mb-2 font-medium">Humidity</h4>
            <p className="font-sans text-sm text-gray-600">Moderate humidity levels</p>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="text-center">
        <p className="font-sans text-sm md:text-base text-gray-500 font-medium mb-4">
          Most importantly, we want you to feel comfortable and confident!
        </p>
        <p className="font-sans text-sm text-gray-500">
          Questions about attire? Contact us at dresscode@pumpuizandpete.com
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4"></div>
      </div>
    </div>
  )
} 