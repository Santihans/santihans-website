<template>
  <div class="wallpaper">
    <v-parallax src="/bg-2.jpg" v-bind:style="{'height': calcHeight}">
      <div class="parallax-inner">
        <h1 class="white--text">Webdesign</h1>
        <h2 class="white--text headline">Website for extraordinary demands</h2>
        <h2 class="white--text headline">Stunning websites</h2>
        <div>
          <v-btn secondary outline dark large class="white--text">
            Portfolio
          </v-btn>
        </div>
      </div>
      <div class="more">
        <div class="more-preview">More</div>
        <v-icon>expand_more</v-icon>
      </div>
    </v-parallax>
  </div>
</template>

<script>
  export default {
    name: 'Wallpaper',
    data () {
      return {
        calcHeight: '800px',
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
    },
    beforeMount () {
      if (process.BROWSER_BUILD) {
        this.calcHeight = window.innerHeight + 'px'
      }
    }
  }
</script>

<style lang="scss">
  @import "wallpaper.scss";
</style>
