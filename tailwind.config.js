module.exports = {
  purge:['index.html', './src/**/*.jsx'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
   ]
}
