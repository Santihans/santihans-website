<template>
<div class="component-webdesign">
  <section class="intro">
    <h2>{{ $t('intro.heading') }}</h2>
    <p class="abstract">{{ $t('intro.abstract') }}</p>
    <div class="teaser">
      <img src="/images/webdesign/santihans-responsive.jpg" alt="Webdesign">
    </div>
    <div class="text-xs-center">
      <div>
        <v-btn large primary to="#webdesign-services" v-smooth-scroll="{offset: -70 }">{{ $t('services.heading')}}</v-btn>
      </div>
      <v-btn large flat :to="localePath('/work')">{{ $t('buttons.showcase')}}</v-btn>
    </div>
  </section>

  <section id="webdesign-quote" class="quote section--dark">
    <component-quote-webdesign/>
  </section>

  <section id="webdesign-services" class="services">
    <h3>{{ $t('services.heading') }}</h3>
    <p class="abstract">{{ $t('services.intro') }}</p>

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

    <div class="basics section--dark">
      <h4>{{ $t(services.basic.label) }}</h4>
      <p>{{ $t(services.basic.description) }}</p>
      <div class="expansion">
        <v-expansion-panel class="expansion-custom">
          <v-expansion-panel-content v-for="(item,i) in services.basic.items" :key="i">
            <div slot="header">
              <v-icon success>check_circle</v-icon>{{ $t(`${item.label}`) }}</div>
            <v-card>
              <v-card-text class="inner">{{ $t(`${item.details}`) }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { services, messages } from '~/assets/services.webdesign.js'
import Quote from '~/components/quoteWebdesign.vue'
var extend = require('node.extend')

export default {
  components: {
    'component-quote-webdesign': Quote
  },
  data() {
    return {
      services: services
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
          intro: 'Get an overview of all our provided web design services in detail. Should you miss anything feel free to contact us - we\'ll surely find a solution for your specific needs.'
        }
      },
      de: {
        intro: {
          heading: 'Webdesign',
          abstract: 'Wir erstellen individuelle, aussergewöhnliche Webseiten mit Charakter. Wir legen Wert auf höchste Qualität, sowohl im Bereich Verfügbarkeit und Sicherheit, als auch vor allem in den Bereichen Design und Benutzerfreundlichkeit. Wir sorgen für einen einzigartigen Auftritt im Netz.',
          quote: 'Interaktive Offerte'
        },
        services: {
          heading: 'Dienstleistungen',
          intro: 'Hier finden Sie alle unsere Webdesign-Angebote nochmals im Detail. Sollten sie eine Dienstleistung vermissen kontaktieren sie uns - wir finden bestimmt eine Lösung.'
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import "webdesign.scss"
</style>
