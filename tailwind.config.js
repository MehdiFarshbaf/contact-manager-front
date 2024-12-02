/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282a36",
        foreground: "#f8f8f2",
        comment: "#6272a4",
        CYAN :"#8be9fd",
        GREEN : "#50fa7b",
        ORANGE : "#ffb86c",
        PINK : "#ff79c6",
        PURPLE : "#bd93f9",
        RED : "#ff5555",
        YELLOW : "#f1fa8c",
        currentLine: "#44475a",
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

