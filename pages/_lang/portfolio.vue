<template>
<div>
  <div class="page-header">
    <h1>{{ $t('pages.portfolio') }}</h1>
  </div>
  <div class="page-content boundaries">
    <h1>{{ $t('pages.portfolio') }}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  components: {},
  head() {
    return {
      title: this.$t('pages.portfolio')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'portfolio.scss';
</style>
