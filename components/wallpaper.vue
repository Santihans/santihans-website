<template>
<div class="wallpaper">
  <v-parallax src="/bg-4.jpg" v-bind:style="{'height': calcHeight}">
    <div class="parallax-inner">
      <h1>{{ $t('headline') }}</h1>
      <div class="tagline">{ {{ $t('tagline') }} }</div>
      <div class="bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 353">
          <title>emblem</title>
          <rect x="199.62" y="213.56" width="121.69" height="121.69" />
          <polygon points="127.28 335.25 174.9 335.25 174.9 91.83 127.28 141.22 127.28 335.25" />
          <polygon points="127.28 17.75 127.28 116.53 174.9 67.14 174.9 17.75 127.28 17.75" />
          <path d="M65.56,188.48,28.7,213.74V335.25H53.37V300a12.19,12.19,0,0,1,12.19-12.19h0A12.19,12.19,0,0,1,77.75,300v35.28h24.67V213.74Z" />
        </svg>
      </div>
    </div>
    <div class="more">
      <v-icon>expand_more</v-icon>
    </div>
  </v-parallax>

  <div class="wallpaper-overlay"></div>
</div>
</template>

<script>
export default {
  name: 'Wallpaper',
  data() {
    return {
      calcHeight: '800px'
    }
  },
  beforeMount() {
    if (process.browser) {
      this.calcHeight = window.innerHeight + 'px'
    }
  },
  i18n: {
    messages: {
      en: {
        headline: 'Webdesign. Branding. Advertising.',
        tagline: 'A digital communications agency'
      },
      de: {
        headline: 'Webdesign. Logos. Werbung.',
        tagline: 'Agentur für digitale Kommunikation'
      }
    }
  }
}
</script>

<style lang="scss">
@import "wallpaper.scss";
</style>
