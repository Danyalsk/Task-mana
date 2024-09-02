/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0f1011'
      },
      opacity: {
        0: '0',
        100: '1'
      }
    }
  },
  plugins: []
}
