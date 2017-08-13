<template>
<div>
  <div class="page-header">
    <h1>{{ $t('pages.store') }}</h1>
  </div>
  <div class="page-content boundaries">
    <div class="construction">
      {{ $t('construction') }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: this.$t('pages.store')
    }
  },
  i18n: {
    messages: {
      en: {
        construction: 'Coming Soon'
      },
      de: {
        construction: 'Im Aufbau'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'store.scss';
</style>
