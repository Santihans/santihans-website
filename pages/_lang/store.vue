<template>
<div>
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
    <h1>{{ $t('pages.store') }}</h1>
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

<style lang="scss" scoped>
@import 'store.scss';
</style>
