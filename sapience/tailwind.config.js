// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#5A6FA9', // This will create a class like `bg-customBlue`
          // Optional: Add additional shades if needed
          // '50': '#E6F0FA',
          // '100': '#CCE1F5',
          // '200': '#99C3EB',
          // '300': '#66A5E1',
          // '400': '#3388D7',
          // '500': '#006ACD',
          // '600': '#0054A3',
          // '700': '#003F7A',
          // '800': '#002A51',
          // '900': '#001528',
        },
        customBlack: {
          DEFAULT: '#000'
        },
        customDarkBlue: {
          DEFAULT: '#143e61'
        },
        'blue-200': '#cfe8ff',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'red-200': '#fecaca',
      },
    },
  },
  plugins: [],
};
