<template>
<div>
  <div class="page-header">
    <h1>{{ $t('pages.store') }}</h1>
    <component-clouds />
    <img src="~assets/images/header-store-closed.svg" alt="Illustration">
  </div>
  <div class="page-content boundaries">
    <section class="construction">
      <h2>{{ $t('construction.heading') }}</h2>
      <p class="abstract">{{ $t('construction.info') }}</p>
    </section>
  </div>
</div>
</template>

<script>
import clouds from '~/components/clouds.vue'

export default {
  components: {
    'component-clouds': clouds
  },
  head() {
    return {
      title: this.$t('pages.store')
    }
  },
  i18n: {
    messages: {
      en: {
        construction: {
          heading: 'Opening Soon',
          info: 'This is the place for artworks and designer goods. Be patient while we set up our store. Please come back later.'
        }
      },
      de: {
        construction: {
          heading: 'Im Aufbau',
          info: 'Hier entsteht unser Shop für lokale Kunstarbeiten und Designartikel. Wir bitten um etwas Geduld bis zur Eröffnung. Komm später wieder.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'store.scss';
</style>
