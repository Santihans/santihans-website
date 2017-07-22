<template>
  <div>
    <app-header />
    <nuxt />

    <app-footer />
  </div>
</template>

<script>

  import Header from '~components/Header.vue'
  import Footer from '~components/Footer.vue'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">
  @import "default.scss";
</style>
