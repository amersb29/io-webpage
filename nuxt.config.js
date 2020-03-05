const pkg = require('./package')

module.exports = {
  mode: 'spa',
  env: {
    apiURL: process.env.NUXT_ENV_IOAPI || 'http://membresias-io.test'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/accounting.js',
    '~/plugins/get-image.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //DotEnv
    '@nuxtjs/dotenv',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    //Apollo
    '@nuxtjs/apollo',
    //swal
    'nuxt-sweetalert2',
    //Font Awesome
    ['nuxt-fontawesome', {
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }],
  ],

  dotenv: {
    path: './env/',
    filename: '.env.dev'
  },

 // Give apollo module options
 apollo: {
  tokenName: 'apollo-token', // optional, default: apollo-token
  cookieAttributes: {
    /**
      * Define when the cookie will be removed. Value can be a Number
      * which will be interpreted as days from time of creation or a
      * Date instance. If omitted, the cookie becomes a session cookie.
      */
    expires: 7, // optional, default: 7 (days)

    /**
      * Define the path where the cookie is available. Defaults to '/'
      */
    path: '/', // optional
    /**
      * Define the domain where the cookie is available. Defaults to
      * the domain of the page where the cookie was created.
      */
    domain: 'admon.inteligenciaobjetiva.com', // optional

    /**
      * A Boolean indicating if the cookie transmission requires a
      * secure protocol (https). Defaults to false.
      */
    secure: false,
  },
  // includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  authenticationType: 'Bearer', // optional, default: 'Bearer'
  // (Optional) Default 'apollo' definition
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network',
    },
  },
  // optional
  errorHandler: '~/plugins/apollo-error-handler.js',
  // required
  clientConfigs: {
    default: {
      // required  
      httpEndpoint: 'http://rest-io.test/graphql',
      // optional
      // See https://www.apollographql.com/docs/link/links/http.html#options
      // httpLinkOptions: {
      //   credentials: 'same-origin'
      // },
      // You can use `wss` for secure connection (recommended in production)
      // Use `null` to disable subscriptions
      // wsEndpoint: 'ws://localhost:4000', // optional
      wsEndpoint: null,
      // LocalStorage token
      tokenName: 'apollo-token', // optional
      // Enable Automatic Query persisting with Apollo Engine
      persisting: true, // Optional
      // Use websockets for everything (no HTTP)
      // You need to pass a `wsEndpoint` for this to work
      // websocketsOnly: false // Optional
    },
    test: {
      httpEndpoint: 'http://membresias-io.test/graphql',
      // wsEndpoint: 'ws://localhost:5000',
      tokenName: 'apollo-token'
    },
    // alternative: user path to config which returns exact same config options
    // test2: '~/plugins/my-alternative-apollo-config.js'
  }
},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if(ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
