<template>
  <div class="wallpaper">
    <div class="parallax">
      <div class="parallax-image">
        <video src="/video/Denkmal.mp4" autoplay muted loop poster="/video/Denkmal.jpg"></video>
      </div>
      <div class="parallax-content">
        <div class="wallpaper-content boundaries">
          <h1 v-if="$i18n.locale === 'en'">We are a
            <span>premium</span> communications agency for tomorrow’s digital
            <span>experiences.</span>
          </h1>
          <h1 v-if="$i18n.locale === 'de'">Wir sind eine
            <span>Premium</span>-Kommunikations&shy;agentur für die digitalen
            <span>Erlebnisse</span> von morgen.</h1>
        </div>
        <div class="more">
          <sroll-indicator />
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
import srollIndicator from '~/components/srollIndicator.vue'

export default {
  components: {
    'component-clouds': Clouds,
    srollIndicator
  }
}
</script>

<style lang="scss">
@import 'wallpaper.scss';
</style>
