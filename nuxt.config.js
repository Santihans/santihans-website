const { createApolloFetch } = require('apollo-fetch')
const env = (process.env.NODE_ENV = process.env.NODE_ENV || 'development')

if (env === 'development') {
  require('dotenv').config()
}

module.exports = {
  env: {
    TIPE_API_KEY: process.env.TIPE_API_KEY,
    TIPE_ID: process.env.TIPE_ID
  },
  head: {
    title: 'SANTiHANS',
    titleTemplate: '%s - SANTiHANS',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'We are a digital design and communications agency. 😇'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'SANTiHANS, Web Design, Digital Design, Design, Branding, Art, Communication, Identity, Advertising, Vision, St. Johann, 4056, Basel, Switzerland, 😇'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'SANTiHANS'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'SANTiHANS'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.santihans.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.santihans.com/og-image.png'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'SANTiHANS'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'We are a digital design and communications agency. 😇'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'SANTiHANS'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@santihans4056'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@stophecom'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#F96673'
  },
  css: [
    {
      src: '@/assets/styles/app.styl',
      lang: 'styl'
    },
    {
      src: '@/assets/styles/variables.scss',
      lang: 'scss'
    }
  ],

  plugins: [
    {
      src: '~plugins/vuetify.js'
    },
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~plugins/crisp.js',
      ssr: false
    },
    {
      src: '~plugins/webFontLoader.js',
      ssr: false
    }
  ],

  modules: [
    [
      'nuxt-i18n-module',
      {
        languages: ['en', 'de']
      }
    ],
    '@nuxtjs/apollo',
    '@nuxtjs/font-awesome'
  ],

  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  },

  router: {
    // extendRoutes(routes, resolve) {
    //   const uri = 'https://api.tipe.io/graphql'
    //   const apolloFetch = createApolloFetch({ uri })
    //   apolloFetch.use(({ request, options }, next) => {
    //     if (!options.headers) {
    //       options.headers = {
    //         'Content-Type': 'application/json',
    //         Authorization: process.env.TIPE_API_KEY,
    //         'Tipe-Id': process.env.TIPE_ID
    //       }
    //     }
    //     next()
    //   })
    //   const query = `
    //     query Projects {
    //       projects: allProjects {
    //         urlSlug
    //       }
    //     }
    //   `
    //   apolloFetch({
    //     query
    //   }) // all apolloFetch arguments are optional
    //     .then(result => {
    //       const { data } = result
    //       const dynamicRoutes = data.projects.map(project => project.urlSlug)
    //       dynamicRoutes.forEach(element => {
    //         routes.push({
    //           name: `/work-${element}`,
    //           path: `/work/${element}`,
    //           component: resolve(__dirname, 'pages/work/_project.vue')
    //         })
    //       })
    //       console.log(routes)
    //       // return routes
    //     })
    //     .catch(error => {
    //       console.log('got error')
    //       console.log(error)
    //     })
    // }
  },

  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    vendor: [
      'jquery',
      '~/plugins/vuetify.js',
      'underscore',
      'vue-smooth-scroll'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
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
