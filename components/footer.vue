<template>
<footer id="footer">
  <div class="footer-inner boundaries">
    <div class="emblem">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 353">
        <g>
          <rect x="199.62" y="213.56" width="121.69" height="121.69" />
          <polygon points="127.28 335.25 174.9 335.25 174.9 91.83 127.28 141.22 127.28 335.25" />
          <polygon points="127.28 17.75 127.28 116.53 174.9 67.14 174.9 17.75 127.28 17.75" />
          <path d="M65.56,188.48,28.7,213.74V335.25H53.37V300a12.19,12.19,0,0,1,12.19-12.19h0A12.19,12.19,0,0,1,77.75,300v35.28h24.67V213.74Z" />
        </g>
      </svg>
    </div>
    <component-address />
    <component-language />
    <div class="menu" :title="$t('about')">
      <ul>
        <li><a href="twitter.com/santihans" target="_blank">Twitter</a></li>
        <li><a href="facebook.com/santihans" target="_blank">Facebook</a></li>
        <nuxt-link v-ripple tag="li" :to="localePath('/agb')" exact>
          <a>{{ $t("pages.agb") }}</a>
        </nuxt-link>
        <li><a href="impressum.htm">Impressum</a></li>
      </ul>
    </div>
  </div>
</footer>
</template>

<script>
import language from '~/components/lanuage.vue'
import address from '~/components/contactAddress.vue'

export default {
  components: {
    'component-language': language,
    'component-address': address
  },
  i18n: {
    messages: {
      en: {
        about: 'About'
      },
      de: {
        about: 'Über'
      }
    }
  }
}
</script>

<style lang="scss">
@import "footer.scss";
</style>
