/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f2ff',
          100: '#ede5ff',
          200: '#d8c7ff',
          300: '#c1a3ff',
          400: '#a371f8',
          500: '#8c4ff0',
          600: '#7230d4',
          700: '#5b22ab',
          800: '#43187d',
          900: '#2f1157',
        },
        navy: {
          50: '#f9f4ff',
          100: '#f1e7ff',
          200: '#e3cfff',
          300: '#c8a4ff',
          400: '#ad79ff',
          500: '#9051f5',
          600: '#7234d1',
          700: '#5a26a7',
          800: '#3f1a78',
          900: '#2a0f54',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
}

