<template>
  <v-app id="layout" class="scrollTop scrollTopExtendend">
    <app-header v-on:navigation="toggleNavigation" />
    <navigation v-on:navigation="toggleNavigation" />
    <div id="page">
      <nuxt />
    </div>
    <app-footer />
    <div id="overlay"></div>
  </v-app>
</template>

<script>
import appHeader from '~/components/header.vue'
import Navigation from '~/components/Navigation.vue'
import appFooter from '~/components/footer.vue'
import _ from 'underscore'
import $ from 'jquery'

export default {
  components: {
    appHeader,
    Navigation,
    appFooter
  },
  data: () => ({
    navigationVisibility: false,
    savedScrollTop: 0
  }),
  methods: {
    toggleNavigation: function (state) {
      this.navigationVisibility = state
    },
    handleScroll: function () {
      var $self = $(this.$el)
      _.throttle(function () {
        $self.toggleClass('scrollTop', $(document).scrollTop() < 10)
        $self.toggleClass('scrollTopExtendend', $(document).scrollTop() < window.screen.height / 8)
      }, 100)()
    },
    handleKeyboardShortcuts: function (event) {
      if (event.key === 'Escape' && this.navigationVisibility) {
        this.toggleNavigation(false)
      }
    }
  },
  mounted() {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
    document.addEventListener('keyup', this.handleKeyboardShortcuts)
  },
  beforeDestroy: function () {
    document.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    navigationVisibility() {
      var self = this

      if (this.navigationVisibility) {
        this.savedScrollTop = window.scrollY
        $('body').addClass('navigation--visible')

        _.delay(function () {
          $('body').addClass('noScroll')
        }, 300)

      } else {
        $('body').removeClass('noScroll navigation--visible')
        _.defer(function () {
          $(document).scrollTop(self.savedScrollTop)
        })
      }
    },

    '$route': function () {
      this.navigationVisibility = false
    }
  }
}
</script>

<style lang="scss">
@import 'default.scss';
</style>
