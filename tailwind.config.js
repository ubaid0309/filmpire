/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:
      {
        bgblack: '#121212',
        staryellow: '#FAAF00',
        skyblue: '#526E85',

      },
    },
  },
  plugins: [],
};
