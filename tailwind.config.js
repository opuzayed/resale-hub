/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
],

}

