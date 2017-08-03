<template>
<div class="component-webdesign">
  <p class="abstract">{{ $t('abstract') }}</p>
  <div class="teaser">
    <img src="images/webdesign/brigittehenke.jpg" alt="Webdesign">
  </div>
  <h3>References</h3>


  <h3>Interaktive Offerte</h3>
</div>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.'
      },
      de: {
        abstract: 'Text'
      }
    }
  }
}
</script>

<style lang="scss">
@import "webdesign.scss"
</style>
