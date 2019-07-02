
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Catan Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/global-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios:{
      baseURL: process.env.BASE_URL || 'https://blog-tuto.firebaseio.com',
      credentials:false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env:{
    baseUrl:process.env.BASE_URL || 'https://blog-tuto.firebaseio.com'
  },
  transition:{
    name:'fade',
    mode:'out-in'
  }
}
