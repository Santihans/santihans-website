<template>
<div id="index">
  <section-wallpaper></section-wallpaper>
  <div class="illustration">
    <img src="~assets/images/devices.svg" alt="Illustration">
  </div>
  <section-services></section-services>
</div>
</template>

<script>
import wallpaper from '~/components/wallpaper.vue'
import services from '~/components/services.vue'

export default {
  name: 'HomePage',
  components: {
    'section-wallpaper': wallpaper,
    'section-services': services
  },
  head() {
    return {
      title: this.$t('pages.home')
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
