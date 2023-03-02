const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fefbe9',
        secondary: '#e1eedd',
        tertiary: '#f0a04b',
      },
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
