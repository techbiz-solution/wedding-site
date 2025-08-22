'use client'

import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/travel', label: 'TRAVEL' },
    { href: '/dress-code', label: 'DRESS CODE' },
    { href: '/photos', label: 'PHOTOS' },
    { href: '/rsvp', label: 'RSVP' },
  ]

  return (
    <nav className="w-full max-w-5xl text-center mb-10 md:mb-16">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-10 font-sans text-sm md:text-base tracking-[0.3em] uppercase text-gray-700">
        {navItems.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href} 
              className={`relative transition-all duration-300 hover:text-gray-900 ${
                pathname === item.href 
                  ? 'text-gray-900 font-medium' 
                  : 'hover:scale-105'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 