// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Update based on your project structure
    ],
    theme: {
      extend: {
        keyframes: {
          goAndBack: {
            '0%': { transform: 'translateX(45px) skewY(-55deg)' },
            '50%': { transform: 'translateX(-300px) skewY(-55deg)' },
            '100%': { transform: 'translateX(45px) skewY(-55deg)' },
          },
        },
        animation: {
          goAndBack: 'goAndBack 0.75s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  };
  