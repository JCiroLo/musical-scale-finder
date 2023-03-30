module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/musical-scale-finder/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/styles/_Config.scss";`
      }
    }
  }
}
