/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
      'fade-in': 'fadeIn 0.2s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(-10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
      colors: {
        primary: '#012970',
        secondary: '#4154f1',
        accent: '#9df7ff',
        dark: '#121212',
        'light-bg': '#eaf6fd',
        'dark-card': '#1f1f1f',
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

