<template>
<div id="contact">
  <div class="page-header">
    <h1>{{ $t('pages.contact') }}</h1>
    <component-clouds />
    <img class="illustration" src="~assets/images/header-contact.svg" alt="Illustration">
  </div>
  <section class="page-content boundaries">
    <div class="flex">
      <div class="flex-contact">
        <div class="address">
          <component-address />
        </div>
        <component-contact-form />
      </div>
      <div class="flex-map">
        <spinner background="white"></spinner>
        <iframe src="https://snazzymaps.com/embed/6150"></iframe>
        <v-btn primary href="https://goo.gl/maps/3CeEYuYSEzR2" target="_blank">Open Google Maps</v-btn>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import address from '~/components/contactAddress.vue'
import contactForm from '~/components/contactForm.vue'
import Spinner from 'vue-loading-spinner/src/components/DoubleBounce.vue'
import clouds from '~/components/clouds.vue'

export default {
  components: {
    'component-address': address,
    'component-contact-form': contactForm,
    'spinner': Spinner,
    'component-clouds': clouds
  },
  head() {
    return {
      title: this.$t('pages.contact')
    }
  }
}
</script>

<style lang="scss">
@import "contact.scss";
</style>
