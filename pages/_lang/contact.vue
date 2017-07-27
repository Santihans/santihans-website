<template>
  <div>
    <div class="page-header">
      <iframe src="https://snazzymaps.com/embed/6150" width="100%" height="430px" style="border:none;"></iframe>
      <div class="boundaries">
        <h2 class="white--text">{{ $t('pages.contact') }}</h2>
      </div>
    </div>
    <section class="page-content boundaries">
      <component-address />
    </section>
  </div>
</template>

<script>
  import address from '~components/address.vue'

  export default {
    components: {
      'component-address': address
    },
    head () {
      return {
        title: this.$t('pages.contact')
      }
    }
  }
</script>

<style lang="scss">
  @import "contact.scss";
</style>
