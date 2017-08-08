<template>
<div class="component-webdesign">
  <section class="intro">
    <h2>{{ $t('intro.heading') }}</h2>
    <p class="abstract">{{ $t('intro.abstract') }}</p>
    <div class="teaser">
      <img src="/images/webdesign/santihans-responsive.jpg" alt="Webdesign">
    </div>
    <div class="text-xs-center">
      <v-btn large flat outline to="#offer">{{ $t('intro.quote')}}</v-btn>
    </div>
  </section>

  <section class="services">
    <h3>{{ $t('services.heading') }}</h3>
    <div class="responsive-text">{{ $t('services.intro') }}</div>
    <v-expansion-panel class="expansion-custom">
      <v-expansion-panel-content v-for="(item,i) in services.advanced" :key="i">
        <div slot="header">
          <v-icon accent>add_circle</v-icon>{{ $t(`${item.label}`) }}</div>
        <v-card>
          <v-card-text class="inner">
            <v-expansion-panel class="expansion-custom level-2">
              <v-expansion-panel-content v-for="(item,i) in item.items" :key="i">
                <div slot="header">
                  <v-icon accent>fiber_manual_record</v-icon>{{ $t(`${item.label}`) }}</div>
                <v-card>
                  <v-card-text class="inner" v-html="$t(`${item.details}`)"></v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div class="services-footer"><small>{{ $t('services.footer') }}</small></div>
  </section>

  <section class="basics">
    <h4>{{ $t(services.basic.label) }}</h4>
    <p>{{ $t(services.basic.description) }}</p>
    <v-expansion-panel class="expansion-custom">
      <v-expansion-panel-content v-for="(item,i) in services.basic.items" :key="i">
        <div slot="header">
          <v-icon success>check_circle</v-icon>{{ $t(`${item.label}`) }}</div>
        <v-card>
          <v-card-text class="inner">{{ $t(`${item.details}`) }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </section>

  <section id="offer" class="offer">
    <component-offer/>
  </section>

  <section class="work">
    <h4>{{ $t('work.heading') }}</h4>
    <p>{{ $t('work.intro') }}</p>
    <v-layout wrap class="references">
      <v-flex xs6 sm3 v-for="(item,i) in referencesBranding" :key="i">
        <a v-ripple :href="item.url" target="_blank">
        <img :src="item.src" alt="Example">
      </a>
      </v-flex>
    </v-layout>
  </section>
</div>
</template>

<script>
import { services, messages } from '~/assets/services.webdesign.js'
import Offer from '~/components/offer.vue'
var extend = require('node.extend')

export default {
  components: {
    'component-offer': Offer
  },
  data() {
    return {
      services: services,
      referencesBranding: [{
          src: '/images/webdesign/frontale.jpg',
          url: 'http://frontale-festival.github.io'
        },
        {
          src: '/images/webdesign/denkmal.jpg',
          url: 'http://denkmal.org'
        },
        {
          src: '/images/webdesign/brigittehenke.jpg',
          url: 'http://brigittehenke.ch'
        },
        {
          src: '/images/webdesign/madeinbasel.jpg',
          url: 'http://madeinbasel.org'
        }
      ]
    }
  },
  i18n: extend(true, {}, messages, {
    messages: {
      en: {
        intro: {
          heading: 'Webdesign',
          abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.',
          quote: 'Get a Quote'

        },
        services: {
          heading: 'Services',
          intro: 'Get an overview of all our provided services',
          footer: 'Missing something? Contact us and we\'ll find a solution!'
        },
        work: {
          heading: 'Work',
          intro: 'A couple of our recent projects'
        }
      },
      de: {
        intro: {
          heading: 'Webdesign',
          abstract: 'Wir erstellen individuelle, aussergewöhnliche Webseiten mit Charakter. Wir legen Wert auf höchste Qualität, nicht nur im Bereich Verfügbarkeit und Sicherheit, sondern vor allem auch in den Bereichen Design und Benutzerfreundlichkeit. Wir sorgen für einen einzigartigen Auftritt im Netz.',
          quote: 'Interaktive Offerte'
        },
        services: {
          heading: 'Dienstleistungen',
          intro: 'Hier finden Sie alle unsere Webdesign-Angebote im Überblick.',
          footer: 'Vermissen Sie eine Dienstleistung? Wir arbeiten mit mehreren Partnern zusammen und finden bestimmt eine Lösung für ihre Bedürfnisse. Kontaktieren Sie uns.'
        },
        work: {
          heading: 'Arbeiten',
          intro: 'Im Folgenden finden Sie eine Auswahl an kürzlich realisierten Projekten.'
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import "webdesign.scss"
</style>
