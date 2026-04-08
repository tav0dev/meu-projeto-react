/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        foreground: "#FFFFFF",
        akiraRed: "#E22B29",
        akiraBlue: "#3B82F6",
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px #E22B29',
        'neo-cyan': '5px 5px 0px 0px #04D9FF',
        'neo-white': '5px 5px 0px 0px #FFFFFF',
        'neo-hover': '2px 2px 0px 0px #E22B29',
      }
    },
  },
  plugins: [],
}
