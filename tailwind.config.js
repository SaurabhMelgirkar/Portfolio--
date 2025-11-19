/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0B0F',
        'purple-primary': '#9D4EDD',
        'purple-secondary': '#C77DFF',
        'text-light': '#EAEAEA',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-right': 'slideright 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 5px #9D4EDD, 0 0 10px #9D4EDD, 0 0 15px #9D4EDD' },
          '100%': { 'text-shadow': '0 0 10px #9D4EDD, 0 0 20px #9D4EDD, 0 0 30px #C77DFF' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

