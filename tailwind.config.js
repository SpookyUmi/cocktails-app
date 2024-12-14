/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '876px',
      xl: '1024px',
    },
    colors: {
      'transparent-peach': '#e4b7a04f',
    },
    fontFamily: {
      limelight: ['Limelight', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        md: '0 4px 3px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        article: '1fr 200px',
      },
      gridTemplateRows: {
        app: '400px 1fr',
      },
      boxShadow: {
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.20)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
