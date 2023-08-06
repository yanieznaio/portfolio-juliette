/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light': 'rgba(255, 255, 255, 0.85)',
        'dark-light': 'rgb(0, 23, 55)',
        'dark-light2': 'rgba(0, 23, 55, 0.75)',
        'light-gray': 'rgba(0, 23, 55, 0.1)',
        'light-gray2': 'rgba(0, 23, 55, 0.03)'
      },
      boxShadow: {
        'nav': 'rgba(0, 23, 55, 0.05) 0px 4px 16px 0px ',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
}
