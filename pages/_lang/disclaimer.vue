<template>
<div id="disclaimer">
  <div class="page-header">
    <h1>{{ $t('pages.disclaimer') }}</h1>
  </div>
  <section class="page-content boundaries">
    <component-address />
    <div class="registry">
      CHE-244.875.499
    </div>
  </section>
</div>
</template>

<script>
import address from '~/components/contactAddress.vue'

export default {
  components: {
    'component-address': address
  },
  head() {
    return {
      title: this.$t('pages.disclaimer')
    }
  }
}
</script>

<style lang="scss">
@import "disclaimer.scss";
</style>
