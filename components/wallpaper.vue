<template>
  <div class="wallpaper">
    <div class="parallax">
      <div class="parallax-image"></div>
      <div class="parallax-content">
        <div class="wallpaper-content boundaries">
          <h1>{{ $t('headline') }}</h1>
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
  },
  data() {
    return {
      calcHeight: '800px'
    }
  },
  i18n: {
    messages: {
      en: {
        headline: 'We are a premium communications agency for tomorrow’s digital experiences.'
      },
      de: {
        headline: 'Wir sind eine Premium-Kommunikationsagentur für die digitalen Erlebnisse von morgen.'
      }
    }
  }
}
</script>

<style lang="scss">
@import 'wallpaper.scss';
</style>
