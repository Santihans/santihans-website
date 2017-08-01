<template>
<div id="contact">
  <div class="page-header">
    <div class="clouds boundaries">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 117">
        <g>
          <path id="cloud-4" d="M275,95.73a7.79,7.79,0,1,0-15.31-.15h-2.39a7.46,7.46,0,0,0,0,14.92h16.22A7.46,7.46,0,0,0,275,95.73Z" />
          <path id="cloud-3" d="M132.46,14.41h-1.77a5.78,5.78,0,1,0-11.38.11,5.54,5.54,0,0,0,1.1,11h12a5.54,5.54,0,1,0,0-11.09Z" />
          <path id="cloud-2" d="M39.53,74.48a8.41,8.41,0,0,0-14.32-7.42,12.63,12.63,0,1,0-6.58,23.4c.31,0,.6,0,.9,0a8.16,8.16,0,0,0,.85,0H37.93a8.07,8.07,0,0,0,1.6-16Z" />
          <path id="cloud-1" d="M368.37,35.2a12.55,12.55,0,0,0-6.58,1.87,8.41,8.41,0,0,0-14.32,7.42,8.07,8.07,0,0,0,1.6,16h17.54a8.16,8.16,0,0,0,.85,0c.3,0,.6,0,.9,0a12.63,12.63,0,1,0,0-25.26Z" />
        </g>
      </svg>
    </div>
    <h1>{{ $t('pages.contact') }}</h1>
  </div>
  <section class="page-content boundaries">
    <v-card>
      <div class="card-contact">
        <component-address />
        <component-contact-form />
      </div>
      <div class="card-map">
        <iframe src="https://snazzymaps.com/embed/6150"></iframe>
        <v-btn primary href="https://goo.gl/maps/3CeEYuYSEzR2" target="_blank">Open Google Maps</v-btn>
      </div>
    </v-card>
  </section>
</div>
</template>

<script>
import address from '~/components/contactAddress.vue'
import contactForm from '~/components/contactForm.vue'

export default {
  components: {
    'component-address': address,
    'component-contact-form': contactForm
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
