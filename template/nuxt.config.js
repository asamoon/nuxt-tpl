module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'demo' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'format-detection', content: 'telephone=no, email=no'},
      // Disable tap highlight on IE
      { name: 'msapplication-tap-highligh', content:'no' },
      // Add to homescreen for Chrome on Android
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Web Starter Kit' },
      // Add to homescreen for Safari on iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Web Starter Kit' },
      // Tile icon for Win8 (144x144 + tile color)
      { name: 'msapplication-TileColor', content: '#00A2E4' },
      // Color the status bar on mobile devices
      { name: 'theme-color', content: '#00A2E4' }
      // Facebook
      // { property: 'fb:app_id', content: ''}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Source+Sans+Pro:300,400|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
    loading: {
    color: '#00A2E4',
    height: '3px',
    failedColor: '#900'
  },

  // css: [
  //   { src: '~assets/style/main.scss', lang: 'scss' }
  // ],

  /*
  ** 使用 Vue 插件
  */
  // plugins: [
  //   { src: '~plugins/vue-moment' },
  //   { src: '~plugins/vue-lazyload', ssr: false },
  // ],

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-cssnext')()
    ],
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
