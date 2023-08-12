/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     
      acents:"#1dd3b0",
    },
    extend: {
      backgroundImage: {
        'about-section': "url('/assets/about-section.jpg')",    
      }
    },
  },
  plugins: [],
}

