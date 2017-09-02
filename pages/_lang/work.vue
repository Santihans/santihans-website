<template>
<div id="work">
  <div class="page-header">
    <h1>{{ $t('pages.work') }}</h1>
    <component-clouds />
    <img class="illustration" src="~assets/images/header-work.svg" alt="Illustration">
  </div>
  <div class="page-content boundaries">
    <section class="portfolio">
      <v-layout wrap>
        <v-flex xs6 sm4 v-for="(item, key, index) in portfolio" :key="key" @keyup.esc="item.dialog=false">
          <v-dialog lazy v-model="item.dialog" class="portfolio-dialog" width="800" content-class="dialog-custom dialog-custom--portfolio">
            <nuxt-link class="portfolio-link" v-ripple slot="activator" alt="Preview" :to="{ path: localePath('/work')}">
              <v-card>
                <img :src="'/images/work/' + key + '/thumb.png'" alt="Preview">
                <div class="project">
                  <div class="name">{{ item.name }}</div>
                  <ul class="tags">
                    <li v-for="item in item.tags">{{ item }}</li>
                  </ul>
                </div>
              </v-card>
            </nuxt-link>
            <div class="dialog-header" :style="{'background-color': item.details.colorBg}">
              <v-btn icon large class="btn-close" @click="item.dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <h3 :style="{'color': item.details.colorFg}">{{ item.name }}</h3>
              <p class="abstract" :style="{'color': item.details.colorFg}">
                {{ item.details.abstract }}
              </p>
              <div v-if="item.details.hasOwnProperty('website')" class="text-xs-center">
                <v-btn flat outline dark :style="{'color': item.details.colorFg}" :href="item.details.website" target="_blank">{{ $t('buttons.visitWebsite') }}</v-btn>
              </div>
            </div>
            <div class="dialog-content">
              <div v-if="item.details.hasOwnProperty('scope')" class="scope">
                <h4>{{ $t('heading.scope') }}</h4>
                <ul>
                  <li v-for="item in item.details.scope">{{ item }}</li>
                </ul>
              </div>
              <h4>{{ $t('heading.impressions') }}</h4>
              <figure class="image" v-for="image in item.details.images">
                <img :src="'/images/work/' + key + '/' + image.src" :alt="image.caption">
                <figcaption class="image-caption">{{ image.caption }}</figcaption>
              </figure>
              <div class="dialog-footer">
                <v-btn primary @click="item.dialog = false">{{ $t('buttons.close' )}}</v-btn>
              </div>
            </div>
          </v-dialog>
        </v-flex>
      </v-layout>
    </section>
  </div>
</div>
</template>

<script>
import clouds from '~/components/clouds.vue'

export default {
  components: {
    'component-clouds': clouds
  },
  head() {
    return {
      title: this.$t('pages.work')
    }
  },
  data() {
    return {
      portfolio: {
        denkmal: {
          dialog: false,
          name: 'Denkmal.org',
          tags: ['webdesign', 'branding', 'advertising'],
          details: {
            abstract: 'Basel\'s event calendar made by locals.',
            website: 'https://denkmal.org',
            colorBg: '#8ba9a3',
            colorFg: 'white',
            scope: [
              'Webdesign: Design, UI with existing backend',
              'Branding: Logo Redesign, Colors, Fonts',
              'Advertising: Postcards, Stickers, Banners'
            ],
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
            abstract: 'Large-scale web applications.',
            colorBg: '#3FB4FF',
            colorFg: 'white',
            scope: [
              'Webdesign: Static website with headless cms backend',
              'Branding: CI, Logo Design, Colors, Fonts, Illustrations (Avatars)'
            ],
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
            abstract: 'Festival für frankophone Musik',
            website: 'http://frontale-festival.github.io/',
            colorBg: '#ffbd37',
            colorFg: '#300033',
            scope: [
              'Webdesign: Static website, Hosting',
              'Branding: Logo Design, Colors, Fonts'
            ],
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
            abstract: 'Local Running Community',
            colorBg: '#065296',
            colorFg: 'white',
            scope: [
              'Branding: Logo Design, Colors'
            ],
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
            abstract: 'Künstlerin',
            website: 'http://brigittehenke.ch',
            colorBg: '#618186',
            colorFg: 'white',
            scope: [
              'Webdesign: Design, Single-Page-Application, Headless CMS, Hosting'
            ],
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
            abstract: 'Just a demo.',
            website: 'http://kingchiller.com',
            colorBg: '#4ba629',
            colorFg: 'white',
            scope: [
              'Branding: Logo, Colors',
              'Webdesign: Temporary Placeholder'
            ],
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
            abstract: 'Fun Project',
            colorBg: '#54c6d9',
            colorFg: 'white',
            scope: [
              'Branding: Logo, Colors',
              'Advertising: Illustrations, Flyers'
            ],
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
            abstract: 'Just a demo.',
            colorBg: '#6fbfff',
            colorFg: 'white',
            scope: [
              'Branding: Logo, Colors'
            ],
            images: [{
              src: 'schiffmode-logo.svg',
              caption: 'Logo Design'
            }]
          }
        }
      }
    }
  },
  i18n: {
    messages: {
      en: {
        heading: {
          scope: 'Project Scope',
          impressions: 'Impressions'
        },
        portfolio: {

        }
      },
      de: {
        heading: {
          scope: 'Projektumfang',
          impressions: 'Impressionen'
        },
        portfolio: {}
      }
    }
  }
}
</script>

<style lang="scss">
@import 'work.scss';
</style>
