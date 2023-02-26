/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
        secondary: '#031d44',
        tertiary: '#05b2dc',
      },
    },
  },
  plugins: [],
}
