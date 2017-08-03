<template>
<div class="component-webdesign">
  <p class="abstract">{{ $t('abstract') }}</p>
  <div class="teaser">
    <img src="/images/webdesign/brigittehenke-responsive.jpg" alt="Webdesign">
  </div>

  <h3>Interaktive Offerte</h3>

  <h3>References</h3>
  <v-layout wrap class="references">
    <v-flex xs6 sm3 v-for="(item,i) in branding" :key="i">
      <a v-ripple :href="item.url" target="_blank">
        <img :src="item.src" alt="Example">
      </a>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      branding: [{
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
@import "webdesign.scss"
</style>
