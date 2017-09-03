<template>
<div class="wallpaper">
  <div class="parallax" v-bind:style="{'height': calcHeight}">
    <div class="parallax-inner">
      <h1>{{ $t('headline') }}</h1>
      <div class="tagline">{{ $t('tagline') }}</div>
    </div>
    <div class="more">
      <v-btn icon flat to="#sectionWebDesign" v-smooth-scroll="{offset: -200 }">
        <v-icon>expand_more</v-icon>
      </v-btn>
    </div>
  </div>

  <div class="wallpaper-overlay">
    <component-clouds />
  </div>
</div>
</template>

<script>
import Clouds from '~/components/clouds.vue'

export default {
  components: {
    'component-clouds': Clouds
  },
  data() {
    return {
      calcHeight: '800px'
    }
  },
  mounted() {
    if (process.browser) {
      this.calcHeight = window.innerHeight + 'px'
    }
  },
  i18n: {
    messages: {
      en: {
        headline: 'Creative Company',
        tagline: 'Webdesign. Branding. Advertising.'
      },
      de: {
        headline: 'Creative Company',
        tagline: 'Webdesign. Marken. Werbung.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "wallpaper.scss";
</style>
