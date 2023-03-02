const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#F6F5F5',
        secondary: '#D3E0EA',
        tertiary: '#1687A7',
      },
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
