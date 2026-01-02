// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f3',
          100: '#e6ede5',
          200: '#cddbcb',
          300: '#a3b18a',
          400: '#8a9a5b',
          500: '#4a7c59',
          600: '#2a5934',
          700: '#1a2c21',
          800: '#0f1a13',
          900: '#050a06',
        },
        secondary: {
          50: '#fef9f5',
          100: '#fceee6',
          200: '#f8d9ce',
          300: '#f2bca9',
          400: '#e8b4a1',
          500: '#d49a7c',
          600: '#b97c5c',
          700: '#8a5a41',
          800: '#5c3c2b',
          900: '#2d1e15',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


