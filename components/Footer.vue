<template>
  <footer id="footer">
    <div class="footer-inner container">
      <div class="emblem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 353">
          <title>emblem</title>
          <g>
            <rect x="199.62" y="213.56" width="121.69" height="121.69" />
            <polygon points="127.28 335.25 174.9 335.25 174.9 91.83 127.28 141.22 127.28 335.25" />
            <polygon points="127.28 17.75 127.28 116.53 174.9 67.14 174.9 17.75 127.28 17.75" />
            <path d="M65.56,188.48,28.7,213.74V335.25H53.37V300a12.19,12.19,0,0,1,12.19-12.19h0A12.19,12.19,0,0,1,77.75,300v35.28h24.67V213.74Z" />
          </g>
        </svg>
      </div>
      <div class="address">
        <div>Santihans GmbH</div>
        <div>Mittlere Strasse 60</div>
        <div>4056 Basel</div>
        <div><a href="mailto:info@santihans.com">info@santihans.com</a></div>
      </div>
      <div class="language">
        <div>{{ $t('language') }}</div>
        <nuxt-link v-if="$i18n.locale === 'en'" :to="`/de` + $route.fullPath" active-class="none" exact>
          {{ $t('links.german') }}
        </nuxt-link>
        <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
          {{ $t('links.english') }}
        </nuxt-link>
      </div>
      <div class="menu">
        <ul>
          <li><a href="twitter.com/santihans" target="_blank">Twitter</a></li>
          <li><a href="facebook.com/santihans" target="_blank">Facebook</a></li>
          <li><a href="agb.htm">AGB</a></li>
          <li><a href="impressum.htm">Impressum</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'Footer',
    methods: {
      path (url) {
        return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
      }
    },
    i18n: {
      messages: {
        en: {
          language: 'Language',
          'links': {
            'german': 'German',
            'english': 'English'
          }
        },
        de: {
          language: 'Sprache',
          'links': {
            'german': 'Deutsch',
            'english': 'Englisch'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "Footer.scss";
</style>
