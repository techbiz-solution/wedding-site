import type { Metadata } from 'next'
import { Great_Vibes, Cormorant_Garamond } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: 'Our Wedding Day',
  description: 'Join us in celebrating our special day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable} ${cormorant.variable} font-sans bg-gradient-to-br from-[#fefefe] to-[#f8f7f6]`}>
        <div className="min-h-screen flex flex-col items-center px-6 md:px-8 pt-10 md:pt-16">
          {/* Decorative top border */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8 md:mb-12"></div>
          
          <h1 className="font-script text-5xl md:text-7xl text-gray-800 mb-4 md:mb-6 leading-tight">
              Our wedding day
            </h1>

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="w-full">
            {children}
          </main>
          
          {/* Decorative bottom border */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12 md:mt-16"></div>
        </div>
      </body>
    </html>
  )
}
