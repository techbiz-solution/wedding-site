/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['var(--font-great-vibes)', 'cursive'],
        'serif': ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        'wedding-brown': '#8B4513',
      },
    },
  },
  plugins: [],
} 