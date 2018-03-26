const env = (process.env.NODE_ENV = process.env.NODE_ENV || 'development')
const nodeExternals = require('webpack-node-externals')

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
    link: [
      {
        rel: 'preload',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        onload: 'this.onload=null;this.rel="stylesheet"',
        as: 'style'
      }
    ]
  },
  meta: {
    name: 'SANTiHANS',
    description: 'We are a digital design and communications agency. 😇',
    theme_color: '#212121',
    ogHost: 'https://www.santihans.com',
    ogImage: { path: '/og-image.png' },
    twitterCard: 'summary',
    twitterSite: '@santihans4056',
    twitterCreator: '@stophecom'
  },
  manifest: {
    name: 'SANTiHANS',
    short_name: 'SANTiHANS',
    description: 'We are a digital design and communications agency. 😇'
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
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-91400477-2'
      }
    ]
  ],

  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  },

  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    vendor: ['~/plugins/vuetify.js', 'underscore'],
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
    babel: {
      plugins: [
        [
          'transform-imports',
          {
            vuetify: {
              transform: 'vuetify/es5/components/${member}', // eslint-disable-line no-template-curly-in-string
              preventFullImport: true
            }
          }
        ]
      ]
    },
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
