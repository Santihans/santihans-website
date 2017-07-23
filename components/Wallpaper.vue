<template>
  <section class="wallpaper">
    <div class="wallpaper-inner container">
      <h1>Webdesign</h1>
      <h2 class="headline">Website for extraordinary demands</h2>
      <h2 class="headline">Stunning websites</h2>
      <v-btn
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        <v-icon>web</v-icon>
      </v-btn>
    </div>
    <div class="more">
      <div class="more-preview">More</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M486,132.1c0,5.2-1.7,10.4-5.3,14.7L274.2,394.7c-4.4,5.2-10.8,8.3-17.6,8.3c-6.8,0-13.3-3-17.7-8.2L31.4,148.5
		c-8.2-9.7-6.9-24.2,2.8-32.4c9.7-8.2,24.2-6.9,32.4,2.8l189.8,225.3l188.9-226.8c8.1-9.8,22.6-11.1,32.4-3
		C483.2,118.9,486,125.5,486,132.1z" />
      </svg>
    </div>
  </section>
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
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
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
