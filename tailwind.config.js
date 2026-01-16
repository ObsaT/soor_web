module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF7A00', // warm highlight
        lightGrayBg: '#F7F7F7',
        cardGray: '#EFEFEF',
      },
      borderRadius: { 'lg-12': '12px' }
    },
  },
  plugins: [],
}
