export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'foundation-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'foundation-sites/dist/css/foundation.min.css',
    'foundation-icon-fonts/foundation-icons.css',
    'assets/scss/main.scss',
    'assets/less/main.less',
    'assets/css/transitions.css',
    'jquery-ui-bundle/jquery-ui.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/client-only/foundation.client.js',
    '~/plugins/client-only/motion-ui.client.js',
    '~/plugins/utils.js',
    '~/plugins/client-only/jquery-ui-bundle.client.js',
    '~/plugins/client-only/aos.client.js',
    '~/plugins/client-only/swiper.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
}
