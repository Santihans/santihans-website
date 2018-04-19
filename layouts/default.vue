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
import AppHeader from '~/components/AppHeader.vue'
import Navigation from '~/components/Navigation.vue'
import AppFooter from '~/components/AppFooter.vue'
import _ from 'underscore'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.i18n.language
      }
    }
  },
  components: {
    AppHeader,
    Navigation,
    AppFooter
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
      var self = this.$el
      _.throttle(function () {
        self.classList.toggle('scrollTop', window.scrollY < 10)
        self.classList.toggle('scrollTopExtendend', window.scrollY < window.screen.height / 8)
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
        document.body.classList.add('navigation--visible')

        _.delay(function () {
          document.body.classList.add('noScroll')
        }, 300)

      } else {
        document.body.classList.remove('noScroll', 'navigation--visible')
        _.defer(function () {
          window.scrollTo(0, self.savedScrollTop)
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
