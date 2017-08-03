<template>
<div class="component-branding">
  <p class="abstract">{{ $t('abstract') }}</p>

  <h3>Interaktive Offerte</h3>

  <h3>References</h3>
  <v-layout wrap class="references">
    <v-flex xs6 sm3 v-for="(item,i) in branding" :key="i">
      <img :src="item.src" alt="Example">
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
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
        abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.'
      },
      de: {
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto, eligendi ducimus quaerat officiis illo aliquid. Maxime ducimus soluta, eveniet, eum fugit asperiores quam, nam nisi eius sit id reprehenderit.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "branding.scss"
</style>
