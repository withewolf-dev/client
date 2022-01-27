module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#dadbd3',
        bgApp: '#ebebeb',
        searchBg: '#f6f6f6',
        chatColor: '#dcf8c6',
      },
      boxShadow: {
        mainShadow: '-1px 4px 20px -6px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'chat-wallpaper': `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
