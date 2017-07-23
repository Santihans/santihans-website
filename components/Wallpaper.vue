<template>
  <div>
    <div class="wallpaper">
      <v-parallax src="/bg-2.jpg" height="800">
        <v-layout column align-center justify-center>
          <h1 class="white--text">Webdesign</h1>
          <h2 class="white--text headline">Website for extraordinary demands</h2>
          <h2 class="white--text headline">Stunning websites</h2>
        </v-layout>
        <div>
        <v-btn secondary outline dark large class="white--text">
          Portfolio
        </v-btn>
        </div>
        <div class="more">
          <div class="more-preview">More</div>
          <v-icon>expand_more</v-icon>
        </div>
      </v-parallax>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Wallpaper',
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {icon: 'apps', title: 'Welcome', to: '/'},
          {icon: 'bubble_chart', title: 'Inspire', to: '/inspire'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style lang="scss">
  @import "Wallpaper.scss";
</style>
