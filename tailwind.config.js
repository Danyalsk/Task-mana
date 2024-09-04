/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0f1011',
        'custom-dark2': '#080808',
        'ticket-bg': '#1a1b1f'
      },
      opacity: {
        0: '0',
        100: '1'
      }
    }
  },
  plugins: []
}
