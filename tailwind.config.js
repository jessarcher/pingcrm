let colors = require('tailwindcss/colors')

module.exports = {
  content: ['./resources/**/*.{js,vue,blade.php}'],
  theme: {
    extend: {
      colors: {
        yellow: colors.amber,
        green: colors.emerald,
      },
    },
  },
}
