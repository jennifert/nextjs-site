module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // add overrides here later if needed
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // You’re using this right 👍
    }),
  ],
};
