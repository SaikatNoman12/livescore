/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      borderRadius: {
        '20': '20px'
      },
      backgroundImage: {
        'bottom-gradient': "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%)",
      },
      fontSize: {
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '26': '28px',
        'sm': '15px',
      }
     
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        DEFAULT: '#EF233C',
        0: '#FFFFFF',
        0.1: "#f7f7f7",
        0.4: '#EF233C4D',
        0.5: '#BBBBBB',
        0.6:'#EDEDED',
        0.7:'#F5F5F5',
        0.8:'#B9B9B9',
        1: '#5A5A5A',
        1.2: "#D7D7D7",
        1.5: '#CEC8F6',
        2: '#BEB6F3',
        3: '#9E91EC',
        4: '#7D6DE6',
        5: '#5D48E0',
        6: '#4A3AB3',
        7: '#382B86',
        8: '#251D5A',
        8.5: '#1C1643',
        9: '#130E2D',
        9.5: '#090716',
        10: '#0E0E0E',
        11:"#FFEFF1",
        12:"#ecf1f3",
        13:"#EDF2F4",
        14:"#729d43",
        15:"#CCC"
      },
      'secondary': '#729D43',
      'tertiary': '#3B3E4E',
      'quaternary': '#8B7F9A',
    },
    fontFamily: {
      satoshi: ['satoshi', 'sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif'],
    },

    boxShadow: {
      'custom': '0px 4px 50px 0px #00000026',
      'custom-1': '0px 20px 50px 0px #00000012',
      "custom-2":'0px 0px 15px 0px #0000001A',
      "custom-3":'0px 10px 30px 0px rgba(0, 0, 0, 0.10)',
      'custom-4':'0px 10px 30px 0px rgba(0, 0, 0, 0.10)',
      'custom-5':'0px 20px 50px 0px rgba(0, 0, 0, 0.10)'
    },
    

  },
  plugins: [],
}

