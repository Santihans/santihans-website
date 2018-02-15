module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'SANTIHANS',
    titleTemplate: '%s - SANTIHANS',
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
        content:
          'Santihans is a design and communications agency with its main focus on web design, branding and advertising.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Santihans, Web Design, Design, Branding, Art, Communication, Identity, Advertising, Vision, St. Johann, 4056, Basel, Switzerland'
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
      src: '~assets/styles/app.styl',
      lang: 'styl'
    },
    {
      src: '~assets/styles/variables.scss',
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
    },
    {
      src: '~plugins/vueSmoothScroll.js'
    }
  ],

  modules: [
    [
      'nuxt-i18n-module',
      {
        languages: ['en', 'de']
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    vendor: ['jquery', 'vuetify', 'underscore', 'vue-smooth-scroll'],
    /*
     ** Run ESLINT on save
     */
    extend(config, { isClient }) {
      config.devtool = false

      if (isClient) {
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
