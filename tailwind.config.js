/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      colors: {
        'diwan': {
          'navy': '#061E29',
          'blue': '#1D546D',
          'teal': '#5F9598',
          'light': '#F3F4F4',
        },
      },
    },
  },
  plugins: [],
}

