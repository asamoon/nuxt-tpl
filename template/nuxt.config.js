module.exports = {
  mode: 'spa',
  // cache: true,
  /* Build configuration
  ------------------------------------------ */
  build: {
    postcss: [
      // require('postcss-cssnext')(),
      require('cssnano')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    vendor: ['tether-drop', 'perfect-scrollbar'],
    maxChunkSize: 300000,
    analyze: {
      analyzerMode: 'static'
    },
    /* Run ESLINT on save
    -------------------- */
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
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  ------------------------------------------ */
  head: {
    title: '{{ name }}',
    titleTemplate: '%s - {{ name }}',
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '天空部落' },
        { name: 'full-screen', content: 'yes' },
        { name: 'x5-page-mode', content: 'app' },
        { name: 'format-detection', content: 'telephone=no, email=no'},
        // Disable tap highlight on IE
        { name: 'msapplication-tap-highligh', content:'no' },
        // Add to homescreen for Chrome on Android
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'application-name', content: 'lifeInfo' },
        // Add to homescreen for Safari on iOS
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: 'lifeInfo' },
        // Tile icon for Win8 (144x144 + tile color)
        { name: 'msapplication-TileColor', content: '#00A2E4' },
        // Color the status bar on mobile devices
        { name: 'theme-color', content: '#00A2E4' }
        // Facebook
        // { property: 'fb:app_id', content: '241039752194'},
        // { property: 'og:image', content: 'https://www.yam.com/I/C/C0BQM/1/1JHY1QOLYPF0.png'}
      ],
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Open+Sans:400,700' }
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Open+Sans:400,700|Material+Icons' }
      // { rel: 'stylesheet', href: 'https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?u8vidh' }
    ],
    noscript: [
      { innerHTML: '為了正常瀏覽本站，請開啟瀏覽器的 JavaScript', body: true }
    ]
  },
  /* Customize the progress-bar color
  ------------------------------------------ */
  loading: {
    color: '#00A2E4',
    height: '6px',
    failedColor: '#900'
  },
  loadingIndicator: {
    // name: 'chasing-dots',
    name: 'cube-grid',
    color: 'white',
    background: '#00A2E4'
  },
  /* Customize app manifest
  ------------------------------------------ */
  manifest: {
    name: '{{ name }}',
    short_name: '{{ name }}',
    lang: 'zh-Hant-TW',
    display: 'standalone',
    // "start_url": "/top",
    theme_color: '#00A2E4',
    background_color: "#f1f2f1"
  },
  css: [
    { src: '~/assets/style/main.scss', lang: 'scss' }
  ],
  /* Plugins
  ------------------------------------------ */
  plugins: [
    // { src: '~plugins/vue-moment', ssr: false },
    // { src: '~plugins/vue-material-design-icons' },
    { src: '~plugins/vue-lazyload', ssr: false },
    { src: '~plugins/v-tooltip', ssr: false },
    { src: '~plugins/vee-validate', ssr: false },
    { src: '~plugins/vue-float-label', ssr: false },
    // { src: '~plugins/vue-autosize', ssr: false },
    { src: '~plugins/vue-filter' },
    // dev
    { src: '~plugins/mockjs' }
  ],
  /* Render
  ------------------------------------------ */
  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  },
  /* Modules
  ------------------------------------------ */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/toast',
      {
        position: 'bottom-center',
        className: 'mui-toast',
        iconPack : 'material'
      }
    ],
    ['@nuxtjs/axios',
      {
        baseURL: 'http://localhost:3001'
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // proxyHeaders: true,
        // credentials: true
      }
    ],
  ]
}
