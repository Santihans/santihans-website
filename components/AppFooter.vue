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
@import '~assets/styles/variables.scss';

#footer {
  background-color: $colorNight;
  color: white;
  padding-bottom: 7vw;
  padding-top: 7vw;
  position: relative;
  @media (min-width: $breakpointMedium) {
    padding-bottom: 40px;
    padding-top: 40px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer-inner {
    flex-wrap: wrap;

    > div {
      margin-bottom: 30px;
    }
    @media (min-width: $breakpointSmall) {
      display: flex;

      > div {
        margin-bottom: 0;
      }
    }
  }

  .contact {
    margin-right: 50px;
    line-height: 1.4;

    i {
      display: none;
    }
  }

  .menu {
    margin-left: auto;

    ul {
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      line-height: 1.4;
      list-style-type: none;

      li {
        @media (min-width: $breakpointMedium) {
          display: inline;
          margin-right: 10px;
        }
      }
    }
  }
}

</style>
