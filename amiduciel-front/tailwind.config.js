module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            50:  '#edf6fc',  // fondo muy suave
            100: '#d3eaf8',
            200: '#a8d6f1',
            300: '#7cc1ea',
            400: '#57b0e4',
            500: '#3a82bc',  // tu color logo
            600: '#336fa1',
            700: '#265a83',
            800: '#1c4664',
            900: '#123145',  // acento muy oscuro
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  }