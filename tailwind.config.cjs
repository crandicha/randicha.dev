const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f5f7',
        ink: '#1d1d1f',
        muted: '#6e6e73',
        'muted-dark': '#a1a1a6',
        'canvas-dark': '#1c1c1e',
        'surface-dark': '#2c2c2e',
        'ink-dark': '#f5f5f7',
        accent: '#0071e3',
        'accent-dark': '#2997ff',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
