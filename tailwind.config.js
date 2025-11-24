/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF5532',
        "deep-black": '#111111',
        "dark-gray": '#575757',
        "light-gray": '#CECFCA',
        "off-white": '#F7F7F7',
        "soft-peach": '#F7A291',
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '35px',
        '4xl': '40px',
        '5xl': '80px',
        'full': '9999px',
      },
      spacing: {
        '2.5': '10px',
        '5': '20px',
        '7.5': '30px',
        '10': '40px',
        '12.5': '50px',
        '15': '60px',
        '17.5': '70px',
        '20': '80px',
        '25': '100px',
        '50': '200px',
        '75': '300px',
        '87.5': '350px',
        '4.5': '18px',
        '6.25': '25px',
        '6.25': '25px',
        '57.5': '230px',
        '3.75': '15px',
        '3.5': '14px',
        '1.25': '5px',
        '2.5': '10px',
      },
      width: {
        '50': '200px',
        '75': '300px',
        '87.5': '350px',
        '100': '400px',
      },
      height: {
        '50': '200px',
        '75': '300px',
        '87.5': '350px',
        '100': '400px',
        '200': '800px',
      },
      maxWidth: {
        '87.5': '350px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      screens: {
        'xs': '448px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      minWidth: {
        '50': '200px',
        '75': '300px',
      },
      padding: {
        '3.75': '15px',
        '15': '60px',
        '20': '80px',
        '25': '100px',
      },
      lineHeight: {
        '30': '30px',
      },
    },
  },
  plugins: [],
}
