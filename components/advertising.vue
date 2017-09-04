<template>
<div class="component-advertising">
  <section>
    <h2>{{ $t('heading') }}</h2>
    <p class="abstract">{{ $t('abstract') }}</p>
    <p class="abstract">{{ $t('placeholder') }}</p>
    <div class="text-xs-center">
      <v-btn large primary :to="localePath('/contact')">{{ $t('pages.contact')}}</v-btn>
    </div>
  </section>
</div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        heading: 'Advertising',
        abstract: 'We help you aquire new customers with targeted creative advertising. We create everything from ad campaigns to print products like business cards or packaging solutions.',
        placeholder: 'More on the topic coming soon. Contact us for more information.'
      },
      de: {
        heading: 'Werbung',
        abstract: 'Erweitere deine Kundschaft mithilfe kreativer Werbemassnahmen. Wir erarbeiten sowohl digitale Werbekampanien als auch physische Werbeartikel nach deinen Wünschen.',
        placeholder: 'Weiter Informationen folgen. In der Zwischenzeit kontaktiere uns.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "advertising.scss"
</style>
