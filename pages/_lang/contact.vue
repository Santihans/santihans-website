<template>
<div>
  <div class="page-header">
    something
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
