/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary':{
        DEFAULT: '#5D48E0',
        0:    '#FFFFFF',
        0.5:  '#EFEDFC',
        1:    '#DFDAF9',
        1.5:  '#CEC8F6',
        2:    '#BEB6F3',
        3:    '#9E91EC',
        4:    '#7D6DE6',
        5:    '#5D48E0',
        6:    '#4A3AB3',
        7:    '#382B86',
        8:    '#251D5A',
        8.5:  '#1C1643',
        9:    '#130E2D',
        9.5:  '#090716',
        10:   '#000000',
      },
      'secondary'   : '#050042',
      'tertiary'    : '#3B3E4E',
      'quaternary'  : '#8B7F9A',
    },
    fontFamily:{
      Lexend:   ['Lexend', 'sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

