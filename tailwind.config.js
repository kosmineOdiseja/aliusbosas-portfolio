module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
      }
    },
    colors: {
      "nightsky": "#0a192f",
      "green": "#4ec5af",
      "light-text": "#ccd6f6", 
      "darker-text": "#8892b0"
    },
    screens: {
      'phone':  '560px', 
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}