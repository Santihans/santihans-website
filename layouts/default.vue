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
    },
    mounted () {
      if (process.BROWSER_BUILD) {
        var PaperRipple = require('paper-ripple')

        // // Getting all the buttons
        var buttons = document.querySelectorAll('.paperRipple');

        // Traversing the buttons
        [].forEach.call(buttons, function (button) {
          // New PaperRipple for the button
          var ripple = new PaperRipple()

          // Adding ripple container to the button
          button.appendChild(ripple.$)

          // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
          // when a user clicks on the button.
          button.addEventListener('mousedown', function (ev) {
            ripple.downAction(ev)
          })
          button.addEventListener('mouseup', function () {
            ripple.upAction()
          })
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "default.scss";
</style>
