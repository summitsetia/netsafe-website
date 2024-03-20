/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], // Specify the files to scan for classes
  theme: {
    extend: {},
  },
  plugins: [],
}
