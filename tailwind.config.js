/** @type {import('tailwindcss').Config} */
import {generateSpacers, TYPOGRAPHY_UTILS} from './src/utils'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:
    {
      'aqua': '#33EBEB',
      'purple': '#524FF4',
      "black": "#000000",
      'white': '#FFFFFF',
    },
    fontSize: TYPOGRAPHY_UTILS,
    spacing: generateSpacers(50, 8),
    fontFamily: {
      'book': ['book'],
      'medium': ['medium'],
    },
  },
  plugins: [],
}

