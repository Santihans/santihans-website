<template>
<div class="component-branding">
  <section>
    <h2>{{ $t('heading') }}</h2>
    <p class="abstract">{{ $t('abstract') }}</p>

    <h4>{{ $t('work') }}</h4>
    <v-layout wrap class="references">
      <v-flex xs6 sm3 v-for="(item,i) in branding" :key="i">
        <img :src="item.src" alt="Example">
      </v-flex>
    </v-layout>
  </section>

  <section id="quote" class="quote">
    <component-quote-branding />
  </section>
</div>
</template>

<script>
import Quote from '~/components/quoteBranding.vue'

export default {
  components: {
    'component-quote-branding': Quote
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
        heading: 'Branding',
        abstract: 'A brand is an idea, a promise, a set of expectations that, taken together, account for a consumer\'s decision to choose one product over the other. A brand has to be universally understandable, and at the same time, be as unique as a fingerprint. We help you create this brand.',
        work: 'Work'
      },
      de: {
        heading: 'Markengestaltung',
        abstract: 'Eine Marke ist eine Idee, ein Versprechen, eine Sammlung von Erwartungen welche, zusammengenommen, für den Kunden die Entscheidungsgrundlage bilden, ein Produkt dem anderen vorzuziehen. Eine Marke soll universell verständlich und gleichzeitig einzigartig sein. Wir helfen ihnen diese Marke zu entwickeln.',
        work: 'Arbeiten'
      }
    }
  }
}
</script>

<style lang="scss">
@import "branding.scss"
</style>
