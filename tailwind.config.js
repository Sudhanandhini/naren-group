/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#d0202d',
          dark: '#a5151f',
          ink: '#7c0f17',
        },
        ink: {
          DEFAULT: '#17181a',
          2: '#0e0f10',
        },
        steel: {
          DEFAULT: '#6c6e72',
          2: '#9a9c9f',
        },
        concrete: {
          DEFAULT: '#e7e6e2',
          2: '#d7d6d1',
        },
        paper: '#f4f3f0',
        line: '#dcdbd6',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(14,15,16,.45)',
        'soft-sm': '0 6px 20px -12px rgba(14,15,16,.4)',
      },
      maxWidth: {
        wrap: '1200px',
      },
      keyframes: {
        wapulse: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        drawSeam: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        wapulse: 'wapulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
