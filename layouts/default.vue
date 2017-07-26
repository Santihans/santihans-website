<template>
  <div id="layout" class="scrollTop">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>

  import Header from '~components/Header.vue'
  import Footer from '~components/Footer.vue'
  import _ from 'underscore'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    mounted () {
      var self = this
      document.addEventListener('scroll', _.throttle(function () {
        self.$el.classList.toggle('scrollTop', document.documentElement.scrollTop < 100)
      }, 200))
    }
  }
</script>

<style lang="scss">
  @import "default.scss";
</style>
