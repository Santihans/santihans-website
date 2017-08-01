<template>
<div>
  <div class="page-header">
    <div class="boundaries">
      <h2 class="white--text">{{ $t('pages.portfolio') }}</h2>
    </div>
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

<style scoped>
.page-header {
  height: 400px;
  background-color: #d65b32;
  display: flex;
  align-items: flex-end;
}
</style>
