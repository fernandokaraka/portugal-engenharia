/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        // Paleta da Portugal Engenharia (derivada do logo)
        brand: {
          DEFAULT: '#1B5E20', // verde principal
          50: '#E6F2E7',
          100: '#CDE6CF',
          200: '#9BCF9F',
          300: '#69B86F',
          400: '#3CA44A',
          500: '#1B5E20',
          600: '#2E7D32' // hover
        },
        accent: {
          DEFAULT: '#C62828', // vermelho de destaque
          600: '#E53935'      // hover
        },
        support: '#FBC02D',  // amarelo (detalhes/hover)
        ink: '#212121',      // texto principal
        surface: '#F5F5F5'   // fundos suaves
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.06)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
