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
import $ from 'jquery'

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  mounted() {
    var $self = $(this.$el)
    $(document).on('scroll', _.throttle(function () {
      $self.toggleClass('scrollTop', $(document).scrollTop() < window.screen.height / 10)
      $self.toggleClass('scrollTopExtendend', $(document).scrollTop() < window.screen.height / 5)
    }, 200))
  }
}
</script>

<style lang="scss">
@import "default.scss";
</style>
