<template>
  <div id="contact">
    <div class="page-header">
      <h1>{{ $t('pages.contact') }}</h1>
      <component-clouds />
      <div class="illustration">
        <img class="" src="~assets/images/header-contact.svg" alt="Illustration">
        <component-ufo />
      </div>
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
          <spinner/>
          <iframe src="https://snazzymaps.com/embed/6150"></iframe>
          <v-btn color="primary" href="https://goo.gl/maps/3CeEYuYSEzR2" target="_blank">Open Google Maps</v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import address from '~/components/contactAddress.vue'
import contactForm from '~/components/contactForm.vue'
import clouds from '~/components/clouds.vue'
import ufo from '~/components/ufo.vue'
import Spinner from '~/components/Spinner.vue'

export default {
  components: {
    'component-address': address,
    'component-contact-form': contactForm,
    'component-clouds': clouds,
    'component-ufo': ufo,
    Spinner
  },
  head() {
    return {
      title: this.$t('pages.contact')
    }
  }
}
</script>

<style lang="scss">
@import 'contact.scss';
</style>
