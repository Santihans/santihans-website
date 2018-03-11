<template>
  <footer id="footer">
    <div class="footer-inner boundaries">
      <component-address />
      <component-language />
      <div class="menu" :title="$t('about')">
        <ul>
          <li v-for="(item, i) in social" :key="i">
            <a :href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import language from '~/components/language.vue'
import address from '~/components/contactAddress.vue'
import { about, social } from '~/assets/menus.js'

export default {
  components: {
    'component-language': language,
    'component-address': address
  },
  data() {
    return {
      about: about,
      social: social
    }
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
@import 'footer.scss';
</style>
