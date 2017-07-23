<template>
  <div>
    <section-wallpaper></section-wallpaper>
    <section-services></section-services>
  </div>
</template>

<script>
  import wallpaper from '~components/Wallpaper.vue'
  import services from '~components/Services.vue'

  export default {
    name: 'HomePage',
    components: {
      'section-wallpaper': wallpaper,
      'section-services': services
    },
    head () {
      return {
        title: this.$t('pages.home')
      }
    }
  }
</script>

<style>

</style>
