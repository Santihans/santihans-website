<template>
<div id="index">
  <section-wallpaper></section-wallpaper>
  <div class="illustration-webdesign">
    <img src="~assets/images/webdesign.svg" alt="Illustration">
  </div>
  <section class="service-webdesign boundaries">
    <h2>{{ $t('webdesign.headline') }}</h2>
    <p class="abstract">{{ $t('webdesign.abstract') }}</p>
    <div>
      <v-btn large primary raised="false">Get a quote</v-btn>
    </div>
    <div>
      <v-btn flat large>Portfolio</v-btn>
    </div>
  </section>

  <div class="illustration-branding"></div>

  <section class="service-branding boundaries">
    <img class="illustration" src="~assets/images/branding.svg" alt="Illustration">
    <h2>{{ $t('branding.headline') }}</h2>
    <p class="abstract">{{ $t('branding.abstract') }}</p>

    <v-layout wrap class="references">
      <v-flex xs6 sm3 v-for="(item,i) in branding" :key="i">
        <img :src="item.src" alt="Example">
      </v-flex>
    </v-layout>
    <div>
      <v-btn large primary>Learn more</v-btn>
    </div>
    <div>
      <v-btn flat large>Portfolio</v-btn>
    </div>
  </section>

  <section class="advertising boundaries">
    <h2>{{ $t('advertising.headline') }}</h2>
    <p class="abstract">{{ $t('advertising.abstract') }}</p>
  </section>
</div>
</template>

<script>
import wallpaper from '~/components/wallpaper.vue'

export default {
  name: 'HomePage',
  components: {
    'section-wallpaper': wallpaper
  },
  head() {
    return {
      title: this.$t('pages.home')
    }
  },
  data() {
    return {
      branding: [{
          src: '/images/branding/denkmal.png'
        },
        {
          src: '/images/branding/frontale-2016.png'
        },
        {
          src: '/images/branding/gundeli-street-team.png'
        },
        {
          src: '/images/branding/schiff-mode.png'
        }
      ]
    }
  },
  i18n: {
    messages: {
      en: {
        webdesign: {
          headline: 'Stunning Webdesign',
          abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.'
        },
        branding: {
          headline: 'Individual Branding',
          abstract: 'We develop corporate identitiy solutions that perfectly represent the values of your organisation. Leave customers with a lasting positive first impression.'
        },
        advertising: {
          headline: 'Smart Advertising',
          abstract: 'We help you aquire new customers with targeted creative advertising.'
        }
      },
      de: {
        webdesign: {
          headline: 'Webseiten zum staunen',
          abstract: 'Wir erstellen schlichte, funktionale Webseiten für jeden Kunden individuell. Unser Angebot richtet sich so wohl an Private, Vereine für kleine staische Webseiten, wie auch an Unternhemen mit gehobenen Ansprüchen.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
