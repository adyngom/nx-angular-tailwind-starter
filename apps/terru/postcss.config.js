module.exports = {
  plugins: [
    require('postcss-nested'),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
}
