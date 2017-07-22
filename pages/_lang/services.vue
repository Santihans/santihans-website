<template>
  <div>
    <h1>{{ $t('pages.services') }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        hello: 'Hello World!'
      }
    },
    head () {
      return {
        title: this.$t('pages.services')
      }
    }
  }
</script>

<style></style>
