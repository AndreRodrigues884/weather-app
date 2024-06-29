module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.vertical-rl': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        },
        '.vertical-lr': {
          'writing-mode': 'vertical-lr',
          'text-orientation': 'mixed',
        },
        '.vertical-tb': {
          'writing-mode': 'vertical-tb',
          'text-orientation': 'mixed',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
