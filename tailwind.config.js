/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexmove': {
          orange: '#FF6A00',
          dark: '#1A1A1A',
          darker: '#0D0D0D',
          light: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
} 