<template>
<div class="language" :title="$t('language')">
  <template v-if="$i18n.locale === 'en'">
    <div><strong>{{ $t('links.english') }}</strong></div>
    <nuxt-link :to="`/de` + $route.fullPath" active-class="none" exact>
      {{ $t('links.german') }}
    </nuxt-link>
  </template>
  <template v-else>
    <div><strong>{{ $t('links.german') }}</strong></div>
    <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
      {{ $t('links.english') }}
    </nuxt-link>
  </template>
</div>
</template>

<script>
export default {
  methods: {
    path(url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    }
  },
  i18n: {
    messages: {
      en: {
        language: 'Language',
        'links': {
          'german': 'Deutsch',
          'english': 'English'
        }
      },
      de: {
        language: 'Sprache',
        'links': {
          'german': 'Deutsch',
          'english': 'English'
        }
      }
    }
  }
}
</script>
