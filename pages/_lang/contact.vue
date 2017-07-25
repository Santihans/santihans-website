<template>
  <div class="page">
    <h1>{{ $t('pages.contact') }}</h1>
    <section-wallpaper></section-wallpaper>
  </div>
</template>

<script>
  import wallpaper from '~components/Wallpaper.vue'

  export default {
    name: 'ContactPage',
    components: {
      'section-wallpaper': wallpaper
    },
    head () {
      return {
        title: this.$t('pages.contact')
      }
    }
  }
</script>

<style>

</style>
