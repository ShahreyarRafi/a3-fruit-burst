/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('/images/banner1.png')",
        'banner-2': "url('/images/banner2.png')",
        'banner-3': "url('/images/banner3.png')",
        'banner-4': "url('/images/banner4.png')",
      }
    }
  }
}