<template>
<div class="wallpaper">
  <div class="parallax" v-bind:style="{'height': calcHeight}">
    <div class="parallax-inner">
      <h1>{{ $t('headline') }}</h1>
      <div class="tagline" v-text="'{' + $t('tagline') + '}'"></div>
    </div>
    <div class="more">
      <v-icon>expand_more</v-icon>
    </div>
  </div>

  <div class="wallpaper-overlay">
    <div class="clouds boundaries">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 117">
        <g>
          <path id="cloud-4" d="M275,95.73a7.79,7.79,0,1,0-15.31-.15h-2.39a7.46,7.46,0,0,0,0,14.92h16.22A7.46,7.46,0,0,0,275,95.73Z" />
          <path id="cloud-3" d="M132.46,14.41h-1.77a5.78,5.78,0,1,0-11.38.11,5.54,5.54,0,0,0,1.1,11h12a5.54,5.54,0,1,0,0-11.09Z" />
          <path id="cloud-2" d="M39.53,74.48a8.41,8.41,0,0,0-14.32-7.42,12.63,12.63,0,1,0-6.58,23.4c.31,0,.6,0,.9,0a8.16,8.16,0,0,0,.85,0H37.93a8.07,8.07,0,0,0,1.6-16Z" />
          <path id="cloud-1" d="M368.37,35.2a12.55,12.55,0,0,0-6.58,1.87,8.41,8.41,0,0,0-14.32,7.42,8.07,8.07,0,0,0,1.6,16h17.54a8.16,8.16,0,0,0,.85,0c.3,0,.6,0,.9,0a12.63,12.63,0,1,0,0-25.26Z" />
        </g>
      </svg>
    </div>
  </div>
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
