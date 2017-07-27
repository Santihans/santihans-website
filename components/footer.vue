<template>
  <footer id="footer">
    <div class="footer-inner boundaries">
      <component-address />
      <component-language />
      <div class="menu" :title="$t('about')">
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
  import language from '~components/lanuage.vue'
  import address from '~components/address.vue'

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
