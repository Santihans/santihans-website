<template>
  <div class="wallpaper">
    <div class="parallax">
      <div class="parallax-image">
        <video autoplay muted loop poster="/video/Denkmal.jpg">
          <source src="/video/Denkmal.mp4" type="video/mp4">
        </video>
      </div>
      <div class="parallax-content">
        <div class="wallpaper-content boundaries">
          <h1 v-if="$i18n.locale === 'en'">Your
            <span>next-level</span> communications agency for tomorrow’s digital
            <span>experiences.</span>
          </h1>
          <h1 v-if="$i18n.locale === 'de'">Deine
            <span>Next-Level</span>-Kommunikations&shy;agentur für die digitalen
            <span>Erlebnisse</span> von morgen.</h1>
        </div>
        <img class="talk-to-us" :class="{'ready': ready}" src="/images/talk-to-us.svg" alt="Talk to us">
        <div class="more">
          <scroll-indicator />
        </div>
      </div>
    </div>

    <div class="wallpaper-overlay">
      <component-clouds />
    </div>
  </div>
</template>

<script>
import Clouds from '~/components/clouds.vue'
import scrollIndicator from '~/components/scrollIndicator.vue'

export default {
  data() {
    return {
      ready: false
    }
  },
  components: {
    'component-clouds': Clouds,
    scrollIndicator
  },
  mounted() {
    this.ready = true
  }
}
</script>

<style lang="scss">
@import 'wallpaper.scss';
</style>
