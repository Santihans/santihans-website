<template>
  <div class="page">
    <div class="page-header">
      <iframe src="https://snazzymaps.com/embed/6150" width="100%" height="430px" style="border:none;"></iframe>
      <div class="boundaries">
        <h2 class="white--text">{{ $t('pages.contact') }}</h2>
      </div>
    </div>
    <section class="page-content boundaries">
      <div>Santihans GmbH</div>
      <div>Mittlere Strasse 60</div>
      <div>4056 Basel</div>

    </section>
  </div>
</template>

<script>
  export default {
    name: 'ContactPage',
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
