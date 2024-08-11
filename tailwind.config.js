/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2940',
        secondary: '#536794',
        'border-secondary': '#536794',
        'border-primary': '#293550',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        small: { max: '1600px' }, // New screen size for less than 1500px
      },
    },
  },
  plugins: [],
};
