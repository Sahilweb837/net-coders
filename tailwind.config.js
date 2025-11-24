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
        'safe': '90%',
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
    },
  },
  plugins: [],
}
