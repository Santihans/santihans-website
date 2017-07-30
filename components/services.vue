<template>
  <div id='services'>
    <section class="service-webdesign boundaries">
      <h2>{{ $t('webdesign.headline') }}</h2>
      <p class="abstract">{{ $t('webdesign.abstract') }}</p>
      <img src="images/webdesign/brigittehenke.jpg" alt="Webdesign">
      <div>
        <v-btn large primary raised="false">Get a quote</v-btn>
      </div>
      <div>
        <v-btn flat large>Portfolio</v-btn>
      </div>
    </section>

    <section class="divider">
      //something
    </section>

    <section class="service-branding boundaries">
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
  import quotes from './QuotesCalculator.vue'

  export default {
    components: {
      'component-quotes-calculator': quotes
    },
    data () {
      return {
        branding: [
          {
            src: '/images/branding/denkmal.png'
          },
          {
            src: '/images/branding/cargomedia.png'
          },
          {
            src: '/images/branding/frontale-2016.png'
          },
          {
            src: '/images/branding/gundeli-street-team.png'
          },
          {
            src: '/images/branding/kingchiller.png'
          },
          {
            src: '/images/branding/frontale.jpg'
          },
          {
            src: '/images/branding/schiff-mode.png'
          },
          {
            src: '/images/branding/art44.png'
          }
        ]
      }
    },
    i18n: {
      messages: {
        en: {
          webdesign: {
            headline: 'Stunning Websites',
            abstract: 'We create individual handcrafted communication solutions. Fast, reliable and well designed websites for every demands.'
          },
          branding: {
            headline: 'Individual Branding',
            abstract: 'We develop corporate identitiy solutions that perfectly represent the values of your organisation. Leave customers with a lasting positive first impression.'
          },
          advertising: {
            headline: 'Creative Advertising',
            abstract: 'We help you aquire new customers with targeted smart advertising.'
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
  @import 'services.scss';
</style>
