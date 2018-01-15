<template>
  <div class="language" :title="$t('language')">
    <template v-for="(lang, i) in Object.keys($i18n.messages)" class="language-link">
      <strong :key="i" v-if="$i18n.locale === lang">{{ $t('links.'+lang) }}</strong>
      <nuxt-link :key="i" v-else :to="{ params: {lang: lang} }" active-class="none" exact>
        {{ $t('links.'+lang) }}
      </nuxt-link>
      <template v-if="i < lang.length-1"> | </template>
    </template>
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        language: 'Language',
        'links': {
          'de': 'DE',
          'en': 'EN'
        }
      },
      de: {
        language: 'Sprache',
        'links': {
          'de': 'DE',
          'en': 'EN'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.language-link {
  display: inline;
}
</style>
