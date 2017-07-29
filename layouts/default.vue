<template>
<div id="layout" class="scrollTop scrollTopExtendend">
  <app-header />
  <div id="page">
    <nuxt />
  </div>
  <app-footer />
</div>
</template>

<script>
import header from '~/components/header.vue'
import footer from '~/components/footer.vue'
import _ from 'underscore'

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  mounted() {
    var self = this
    document.addEventListener('scroll', _.throttle(function () {
      self.$el.classList.toggle('scrollTop', document.documentElement.scrollTop < window.screen.height / 10)
      self.$el.classList.toggle('scrollTopExtendend', document.documentElement.scrollTop < window.screen.height / 5)
    }, 200))
  }
}
</script>

<style lang="scss">
@import "default.scss";
</style>
