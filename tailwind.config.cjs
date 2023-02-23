/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      'p-clear-2': '#fae1e1',
      'p-clear': '#F3D5D5',
      's-clear': '#EDC4C4',
      'm-clear': '#A67C85',
      'p-dark': '#353541',
      's-dark': '#514B59',
      'red': '#FF0000'
    },
    fontFamily: {
      sans: ['Libre Baskerville', 'serif'],
      serif: ['Raleway', 'sans-serif'],
      dancing: ['Dancing Script', 'cursive']
    },
    extend: {
      borderRadius: {
        'rad': '100%',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          from: {
              transform: 'translate3d(0,20px,0)'
          },
          to: {
              transform: 'translate3d(0,0,0)',
              opacity: 1
          }
      },
    },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s both'
        }
    }
  },
  plugins: [],
}
