<template>
<div class="component-branding">
  <section section="intro">
    <h2>{{ $t('intro.heading') }}</h2>
    <p class="abstract">{{ $t('intro.abstract') }}</p>
    <v-layout wrap class="references">
      <v-flex xs6 sm3 v-for="(item,i) in references" :key="i">
        <img :src="item.src" alt="Example">
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <div>
        <v-btn large primary to="#branding-services" v-smooth-scroll="{offset: -70 }">{{ $t('services.heading')}}</v-btn>
      </div>
      <v-btn large flat :to="localePath('/work')">{{ $t('buttons.showcase')}}</v-btn>
    </div>
  </section>

  <section id="branding-quote" class="section--dark">
    <component-quote-branding />
  </section>

  <section id="branding-services">
    <h3>{{ $t('services.heading') }}</h3>
    <p class="abstract">{{ $t('services.abstract') }}</p>

    <div class="expansion" v-for="(item, i) in services.advanced" :key="i">
      <h4>{{ $t(`${item.label}`) }}</h4>
      <v-expansion-panel class="expansion-custom">
        <v-expansion-panel-content v-for="(item,i) in item.items" :key="i">
          <div slot="header">
            <v-icon>check_circle</v-icon>{{ $t(`${item.label}`) }}</div>
          <v-card>
            <v-card-text class="inner" v-html="$t(`${item.details}`)"></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </section>
</div>
</template>

<script>
import { services, messages } from '~/assets/services.branding.js'
import Quote from '~/components/quoteBranding.vue'
var extend = require('node.extend')

export default {
  components: {
    'component-quote-branding': Quote
  },
  data() {
    return {
      services: services,
      references: [{
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
  i18n: extend(true, {}, messages, {
    messages: {
      en: {
        intro: {
          heading: 'Branding',
          abstract: 'A brand is an idea, a promise, a set of expectations that, taken together, account for a consumer\'s decision to choose one product over the other. We help you create this brand.'
        },
        services: {
          heading: 'Services',
          abstract: 'A good brand is universally understandable, and at the same time, unique as a fingerprint. We focus on minimalistic, but smart logo design with class and character.'
        }
      },
      de: {
        intro: {
          heading: 'Markengestaltung',
          abstract: 'Eine Marke ist eine Idee, ein Versprechen, eine Sammlung von Erwartungen. Zusammengenommen bilden diese Dinge die Entscheidungsgrundlage für den Erwerb eines Produktes.'
        },
        services: {
          heading: 'Dienstleistungen',
          abstract: 'Eine gute Marke ist universell verständlich und gleichzeitig einzigartig. Wir kreiren minimalistische, aber intelligente Logos mit Klasse und Charakter.'
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import "branding.scss"
</style>
