import EN from '~/assets/locale/work.portfolio.en.json'
import DE from '~/assets/locale/work.portfolio.de.json'

const portfolio = {
  denkmal: {
    dialog: false,
    name: 'Denkmal.org',
    tags: ['webdesign', 'branding', 'advertising'],
    details: {
      abstract: 'portfolio.denkmal.details.abstract',
      website: 'https://denkmal.org',
      colorBg: '#8ba9a3',
      colorFg: 'white',
      scope: {
        webdesign: 'portfolio.denkmal.details.scope.webdesign',
        branding: 'portfolio.denkmal.details.scope.branding',
        advertising: 'portfolio.denkmal.details.scope.advertising'
      },
      images: [{
          src: 'denkmal-mobile-stripe.jpg',
          caption: 'Loading Screen / Daytime Mode / Nighttime Mode / Details'
        },
        {
          src: 'denkmal-responsive-1.jpg',
          caption: 'Denkmal Normal Mode'
        },
        {
          src: 'denkmal-logo-1.png',
          caption: 'Daytime Logo'
        },
        {
          src: 'denkmal-logo-2.png',
          caption: 'Nighttime Logo'
        },
        {
          src: 'denkmal-sticker-1.png',
          caption: 'Sticker Example'
        },
        {
          src: 'denkmal-sticker-2.png',
          caption: 'Sticker Example'
        },
        {
          src: 'denkmal-sticker-3.png',
          caption: 'Sticker Example'
        },
        {
          src: 'denkmal-sticker-4.png',
          caption: 'Sticker Example'
        },
        {
          src: 'denkmal-postcard.jpg',
          caption: 'Event Postcard'
        },
        {
          src: 'denkmal-process-1.png',
          caption: 'Logo Design Process'
        }
      ]
    }
  },
  cargomedia: {
    dialog: false,
    name: 'Cargo Media AG',
    tags: ['webdesign', 'branding'],
    details: {
      abstract: 'portfolio.cargomedia.details.abstract',
      colorBg: '#3FB4FF',
      colorFg: 'white',
      scope: {
        webdesign: 'portfolio.cargomedia.details.scope.webdesign',
        branding: 'portfolio.cargomedia.details.scope.branding'
      },
      images: [{
          src: 'cargomedia-mobile-stripe.jpg',
          caption: 'Webdesign'
        },
        {
          src: 'cargomedia-logo.svg',
          caption: 'Logo Design'
        },
        {
          src: 'cargomedia-avatars.svg',
          caption: 'Illustrations'
        }
      ]
    }
  },
  frontale: {
    dialog: false,
    name: 'Frontâle Festival',
    tags: ['webdesign', 'branding', 'advertising'],
    details: {
      abstract: 'portfolio.frontale.details.abstract',
      website: 'http://frontale-festival.github.io/',
      colorBg: '#ffbd37',
      colorFg: '#300033',
      scope: {
        webdesign: 'portfolio.frontale.details.scope.webdesign',
        branding: 'portfolio.frontale.details.scope.branding'
      },
      images: [{
          src: 'frontale-mobile-stripe.jpg',
          caption: 'Webdesign'
        },
        {
          src: 'frontale-postcard.png',
          caption: 'Postcard'
        },
        {
          src: 'frontale-rooster.svg',
          caption: 'Rooster Illustration'
        },
        {
          src: 'frontale-print.jpg',
          caption: 'Print Banner'
        },
        {
          src: 'frontale-header-2015.png',
          caption: 'Banner 2015'
        }
      ]
    }
  },
  gundelistreetteam: {
    dialog: false,
    name: 'Gundeli Street Team',
    tags: ['branding'],
    details: {
      abstract: 'portfolio.gundelistreetteam.details.abstract',
      colorBg: '#065296',
      colorFg: 'white',
      scope: {
        branding: 'portfolio.gundelistreetteam.details.scope.branding'
      },
      images: [{
          src: 'gundelistreetteam-print.jpg',
          caption: 'Shirts'
        },
        {
          src: 'gundelistreetteam-logo-blue.svg',
          caption: 'Logo Male'
        },
        {
          src: 'gundelistreetteam-logo-pink.svg',
          caption: 'Logo Female'
        }
      ]
    }
  },
  brigittehenke: {
    dialog: false,
    name: 'Brigitte Henke',
    tags: ['webdesign', 'cms'],
    details: {
      abstract: 'portfolio.brigittehenke.details.abstract',
      website: 'http://brigittehenke.ch',
      colorBg: '#618186',
      colorFg: 'white',
      scope: {
        webdesign: 'portfolio.brigittehenke.details.scope.webdesign'
      },
      images: [{
          src: 'brigittehenke-mobile-stripe.jpg',
          caption: 'Webdesign Mobile'
        },
        {
          src: 'brigittehenke-responsive-1.jpg',
          caption: 'Webdesign Responsive'
        },
        {
          src: 'brigittehenke-responsive-2.jpg',
          caption: 'Webdesign Responsive'
        },
        {
          src: 'brigittehenke-responsive-3.jpg',
          caption: 'Webdesign Responsive'
        }
      ]
    }
  },
  kingchiller: {
    dialog: false,
    name: 'Kingchiller',
    tags: ['branding'],
    details: {
      abstract: 'portfolio.kingchiller.details.abstract',
      website: 'http://kingchiller.com',
      colorBg: '#4ba629',
      colorFg: 'white',
      scope: {
        branding: 'portfolio.kingchiller.details.scope.branding'
      },
      images: [{
        src: 'kingchiller-logo.svg',
        caption: 'Logo Design'
      }]
    }
  },
  marguerite: {
    dialog: false,
    name: 'Marguerite',
    tags: ['illustration'],
    details: {
      abstract: 'portfolio.marguerite.details.abstract',
      colorBg: '#54c6d9',
      colorFg: 'white',
      scope: {
        branding: 'portfolio.marguerite.details.scope.branding',
        advertising: 'portfolio.marguerite.details.scope.advertising'
      },
      images: [{
          src: 'marguerite-logo.jpg',
          caption: 'Logo Drafts'
        },
        {
          src: 'marguerite-flyer.jpg',
          caption: 'Folded Flyers'
        }
      ]
    }
  },
  schiffmode: {
    dialog: false,
    name: 'Schiff Mode',
    tags: ['branding'],
    details: {
      abstract: 'portfolio.schiffmode.details.abstract',
      colorBg: '#6fbfff',
      colorFg: 'white',
      scope: {
        branding: 'portfolio.schiffmode.details.scope.branding'
      },
      images: [{
        src: 'schiffmode-logo.svg',
        caption: 'Logo Design'
      }]
    }
  }
}

const messages = {
  messages: {
    en: EN,
    de: DE
  }
}

export {
  portfolio,
  messages
}
