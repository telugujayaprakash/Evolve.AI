/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'main-image': "url('/src/Assets/H.jpg')",
          'white-lines': "url('/src/Assets/2.jpg')",
        },
      }
  },
  plugins: [],
}

