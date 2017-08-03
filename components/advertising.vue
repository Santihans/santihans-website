<template>
<div class="component-advertising">
  <p class="abstract">{{ $t('abstract') }}</p>

  <h3>Interaktive Offerte</h3>

  <h3>References</h3>

</div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi aliquam officia, dolorum natus unde libero repellendus inventore consectetur odit expedita debitis consequatur dolores. Inventore ducimus laboriosam, error voluptas numquam.'
      },
      de: {
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto, eligendi ducimus quaerat officiis illo aliquid. Maxime ducimus soluta, eveniet, eum fugit asperiores quam, nam nisi eius sit id reprehenderit.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "advertising.scss"
</style>
