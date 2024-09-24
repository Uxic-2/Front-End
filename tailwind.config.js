/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-orange": "#F8B46E",
        "main-green": "#A9C498",
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],  
};
