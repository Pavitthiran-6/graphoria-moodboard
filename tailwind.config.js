/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#ffffff',
          black: '#050505',
          charcoal: '#111111',
          gray: '#1a1a1a',
          lightGray: '#888888',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(255, 255, 255, 0.15)',
        'neon-glow-strong': '0 0 30px rgba(255, 255, 255, 0.40)',
      }
    },
  },
  plugins: [],
}
