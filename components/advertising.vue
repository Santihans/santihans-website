<template>
<div class="component-advertising">
  <section>
    <h2>{{ $t('heading') }}</h2>
    <p class="abstract">{{ $t('abstract') }}</p>
  </section>


</div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        heading: 'Advertising',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi aliquam officia, dolorum natus unde libero repellendus inventore consectetur odit expedita debitis consequatur dolores. Inventore ducimus laboriosam, error voluptas numquam.'
      },
      de: {
        heading: 'Werbung',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto, eligendi ducimus quaerat officiis illo aliquid. Maxime ducimus soluta, eveniet, eum fugit asperiores quam, nam nisi eius sit id reprehenderit.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "advertising.scss"
</style>
